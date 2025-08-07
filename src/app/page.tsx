
'use server';

import type { Product } from '@/lib/types';
import ProductShowcase from "@/components/home/ProductShowcase";
import HeroCarousel from "@/components/home/HeroCarousel";
import CategoryGrid from "@/components/home/CategoryGrid";
import { getProducts } from '@/lib/products';

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="flex flex-col">
      <HeroCarousel />
      <CategoryGrid />
      <ProductShowcase
        title="Featured Products"
        description="Our most popular products, trusted by farmers everywhere."
        products={products.slice(0, 4)}
      />
      <ProductShowcase
        title="New Arrivals"
        description="Check out the latest additions to our product line."
        products={products.slice(4, 8)}
      />
      <ProductShowcase
        title="On Sale"
        description="Get the best deals on our top-quality products."
        products={products.slice(8, 12)}
      />
    </div>
  );
}
