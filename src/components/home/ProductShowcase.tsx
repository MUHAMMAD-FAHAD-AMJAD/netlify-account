
"use client";

import ProductCard, { ProductCardSkeleton } from '@/components/shared/ProductCard';
import { useAppContext } from '@/context/AppContext';
import type { Product } from '@/lib/types';

interface ProductShowcaseProps {
  products: Product[];
  title: string;
  description: string;
}

export default function ProductShowcase({ products, title, description }: ProductShowcaseProps) {
  const { addToCart, addRecentlyViewed } = useAppContext();
  const isLoading = !products || products.length === 0;

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight">{title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          ) : (
            products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={() => addToCart(product)}
                onViewProduct={() => addRecentlyViewed(product)}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
