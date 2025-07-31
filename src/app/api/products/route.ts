
import { NextResponse } from 'next/server';
import { mockProducts } from '@/lib/products';

// IMPORTANT: After you deploy your backend to Render, you MUST replace this URL
// with the actual URL of your Render service.
// For example: 'https://your-backend-name.onrender.com'
const BACKEND_URL = 'https://your-render-backend-url.onrender.com';

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Retrieve a list of all products by proxying to the backend or using mock data.
 *     description: >
 *       Fetches a complete list of all available products.
 *       If the `BACKEND_URL` is configured and not a placeholder, it makes a request to the live backend service.
 *       This acts as a proxy to avoid direct client-to-backend requests and hide the backend URL.
 *       If the `BACKEND_URL` is a placeholder, it falls back to serving mock data for local development.
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
 *       503:
 *         description: Service Unavailable. The backend service is unreachable.
 *       500:
 *         description: Internal Server Error if the backend returns an error.
 */
export async function GET() {
  // Check if the backend URL is still the placeholder.
  // If it is, serve mock data for local development.
  if (BACKEND_URL === 'https://your-render-backend-url.onrender.com' || !BACKEND_URL) {
    console.warn("Serving mock data because backend URL is not configured. Update src/app/api/products/route.ts");
    return NextResponse.json(mockProducts);
  }
  
  try {
    // If the backend URL is configured, fetch data from the external backend
    const response = await fetch(`${BACKEND_URL}/api/products`, {
      // Revalidate data every 60 seconds
      next: { revalidate: 60 }
    });
    
    if (!response.ok) {
      // If the backend returns an error, forward that error to the client
      const errorText = await response.text();
      console.error(`Error from backend: ${response.status} ${response.statusText} - ${errorText}`);
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

// This forces the route to be dynamic, ensuring it runs on the server at request time.
export const dynamic = 'force-dynamic';
