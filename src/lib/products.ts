import type { Product } from './types';

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch('/api/products');
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
