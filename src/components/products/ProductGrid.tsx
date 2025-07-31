"use client";

import ProductCard from '@/components/shared/ProductCard';
import { useAppContext } from '@/context/AppContext';
import type { Product } from '@/lib/types';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const { addToCart, addRecentlyViewed } = useAppContext();

  if (products.length === 0) {
    return (
        <div className="text-center py-20 text-muted-foreground">
            <h2 className="text-2xl font-bold">No Products Found</h2>
            <p>Try adjusting your filters or checking another category.</p>
        </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
      {products.map((product) => (
        <ProductCard 
            key={product.id} 
            product={product}
            onAddToCart={() => addToCart(product)}
            onViewProduct={() => addRecentlyViewed(product)}
        />
      ))}
    </div>
  );
}
