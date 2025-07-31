
'use server';

import type { Product } from '@/lib/types';
import Breadcrumbs from '@/components/products/Breadcrumbs';
import ProductGrid from '@/components/products/ProductGrid';
import ProductFilters from '@/components/products/ProductFilters';
import { notFound } from 'next/navigation';

// Helper function to get the base URL for API requests
function getBaseUrl() {
  if (process.env.NEXT_PUBLIC_URL) {
    return process.env.NEXT_PUBLIC_URL;
  }
  // If the app is running on Vercel, use the Vercel URL
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  // Fallback for local development
  return 'http://localhost:3000';
}

async function getProducts(category?: string, subcategory?: string): Promise<Product[]> {
  try {
    const baseUrl = getBaseUrl();
    const res = await fetch(`${baseUrl}/api/products`, { cache: 'no-store' });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.statusText}`);
    }
    
    const products: Product[] = await res.json();
    
    if (!category) {
      return products;
    }

    const filtered = products.filter(p => {
      const categoryMatch = p.category.toLowerCase() === category.toLowerCase();
      const subcategoryMatch = subcategory ? p.subcategory?.toLowerCase() === subcategory.toLowerCase() : true;
      return categoryMatch && subcategoryMatch;
    });

    return filtered;
  } catch (error) {
    console.error('Error in getProducts:', error);
    return [];
  }
}


export default async function CategoryPage({ params }: { params: { slug: string[] } }) {
  const { slug } = params;

  if (!slug || slug.length === 0) {
    notFound();
  }

  const [category, subcategory] = slug.map(s => decodeURIComponent(s));

  const filteredProducts = await getProducts(category, subcategory);

  const title = subcategory ? subcategory.replace(/-/g, ' ') : category.replace(/-/g, ' ');

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <Breadcrumbs path={slug} />
      <div className="text-center mb-10">
        <h1 className="text-4xl font-black tracking-tight capitalize">{title}</h1>
        <p className="mt-2 text-lg text-muted-foreground">{filteredProducts.length} products found</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4 lg:w-1/5">
          <ProductFilters />
        </aside>
        <main className="w-full md:w-3/4 lg:w-4/5">
          <ProductGrid products={filteredProducts} />
        </main>
      </div>
    </div>
  );
}

// This function is needed by Next.js to know which dynamic routes to pre-render.
// We can generate this from our product data.
export async function generateStaticParams() {
  try {
    const baseUrl = getBaseUrl();
    const res = await fetch(`${baseUrl}/api/products`);
    
    if(!res.ok) {
      console.error(`Failed to fetch products for static params: ${res.statusText}`);
      return [];
    }

    const products: Product[] = await res.json();

    const paths = new Set<string>();

    products.forEach(p => {
      // Ensure category is a string before processing
      if (typeof p.category === 'string' && p.category) {
        paths.add(p.category.toLowerCase());
        if (typeof p.subcategory === 'string' && p.subcategory) {
          paths.add(`${p.category.toLowerCase()}/${p.subcategory.toLowerCase()}`);
        }
      }
    });
    
    return Array.from(paths).map(path => ({
      slug: path.split('/'),
    }));
  } catch (error) {
     console.error('Error in generateStaticParams:', error);
     return [];
  }
}
