import type { Product } from './types';

export async function getProducts(): Promise<Product[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:9002';
    const res = await fetch(`${baseUrl}/api/products`);
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    const products = await res.json();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}
