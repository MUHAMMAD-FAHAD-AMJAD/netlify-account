import { NextResponse } from 'next/server';

// This is the URL of your backend service deployed on Render.
// IMPORTANT: You will need to replace this with your actual Render URL after you deploy the backend.
const BACKEND_URL = process.env.BACKEND_URL || 'https://your-render-backend-url.onrender.com';

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Retrieve a list of all products by proxying to the backend.
 *     description: Fetches a complete list of all available products by making a request to the live backend service. This acts as a proxy to avoid direct client-to-backend requests and hide the backend URL.
 *     tags:
 *       - Products
 *     responses:
 *       200:
 *         description: An array of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       500:
 *         description: Internal Server Error if the backend is unreachable or returns an error.
 */
export async function GET() {
  try {
    // Fetch data from the external backend
    const response = await fetch(`${BACKEND_URL}/api/products`);
    
    if (!response.ok) {
      // If the backend returns an error, forward that error to the client
      return new NextResponse(`Error from backend: ${response.statusText}`, { status: response.status });
    }

    const products = await response.json();
    
    // Forward the successful response from the backend to the client
    return NextResponse.json(products);

  } catch (error) {
    console.error('[PRODUCTS_PROXY_GET]', error);
    // This error is for network issues or if the fetch itself fails.
    return new NextResponse('Failed to connect to the backend service.', { status: 503 }); // 503 Service Unavailable
  }
}
