
'use server';

import type { Product } from '@/lib/types';
import Breadcrumbs from '@/components/products/Breadcrumbs';
import ProductGrid from '@/components/products/ProductGrid';
import ProductFilters from '@/components/products/ProductFilters';
import { notFound } from 'next/navigation';
import { mockProducts } from '@/lib/products';

// Helper function to get products. On the server, we can directly access the data source.
// This avoids making an unnecessary HTTP request to our own API.
async function getProducts(category?: string, subcategory?: string): Promise<Product[]> {
  try {
    // In a real application, this would fetch from your database.
    const products = mockProducts;
    
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
    // Directly use the mock data at build time
    const products: Product[] = mockProducts;

    const paths = new Set<string>();

    products.forEach(p => {
      // Ensure category is a string before processing
      if (typeof p.category === 'string' && p.category) {
        const cat = p.category.toLowerCase();
        paths.add(cat);
        if (typeof p.subcategory === 'string' && p.subcategory) {
          paths.add(`${cat}/${p.subcategory.toLowerCase()}`);
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
