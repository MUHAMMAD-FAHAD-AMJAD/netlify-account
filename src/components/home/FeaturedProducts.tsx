"use client";

import ProductCard from '@/components/shared/ProductCard';
import { mockProducts } from '@/lib/products';
import { useAppContext } from '@/context/AppContext';

// Get a few products to feature on the home page
const featuredProducts = mockProducts.filter(p => ['insect-1', 'herbi-2', 'fert-1', 'seed-1'].includes(p.id));

export default function FeaturedProducts() {
  const { addToCart, addRecentlyViewed } = useAppContext();
  
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight">Featured Products</h2>
          <p className="mt-4 text-lg text-muted-foreground">Top picks for your agricultural needs</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={() => addToCart(product)}
              onViewProduct={() => addRecentlyViewed(product)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
