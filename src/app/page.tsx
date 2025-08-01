
'use server';

import type { Product } from '@/lib/types';
import ProductShowcase from "@/components/home/ProductShowcase";
import { mockProducts } from '@/lib/products';

async function getProducts(): Promise<Product[]> {
  try {
    // In a real application, this would fetch from your database.
    // For now, we use the local mock data on the server.
    return mockProducts;
  } catch (error) {
    console.error('Error fetching products for homepage:', error);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="flex flex-col">
      <ProductShowcase products={products} />
    </div>
  );
}
