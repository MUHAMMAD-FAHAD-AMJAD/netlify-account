
import { NextResponse } from 'next/server';
import { mockProducts } from '@/lib/products';

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Retrieve a list of all products.
 *     description: Fetches a complete list of all available products from the data store. This endpoint is intended to be the source of truth for product information.
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
 *         description: Internal Server Error.
 */
export async function GET() {
  try {
    // In a real backend, you would fetch this data from your MongoDB database.
    // For now, we are returning the mock data.
    const products = mockProducts;
    return NextResponse.json(products);
  } catch (error) {
    console.error('[PRODUCTS_GET]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
