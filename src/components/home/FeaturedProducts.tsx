"use client";

import { useEffect, useState } from 'react';
import ProductCard, { ProductCardSkeleton } from '@/components/shared/ProductCard';
import { useAppContext } from '@/context/AppContext';
import type { Product } from '@/lib/types';

// IDs of the products to feature
const featuredProductIds = ['insect-1', 'herbi-2', 'fert-1', 'seed-1'];

export default function FeaturedProducts() {
  const { addToCart, addRecentlyViewed } = useAppContext();
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        // In a real app, you might have a dedicated endpoint for featured products
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const allProducts: Product[] = await response.json();
        const filteredProducts = allProducts.filter(p => featuredProductIds.includes(p.id));
        setFeaturedProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching featured products:", error);
        // Optionally set an error state to show a message to the user
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);
  
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight">Featured Products</h2>
          <p className="mt-4 text-lg text-muted-foreground">Top picks for your agricultural needs</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          ) : (
            featuredProducts.map((product) => (
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
