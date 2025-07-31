import { mockProducts } from '@/lib/products';
import type { Product } from '@/lib/types';
import Breadcrumbs from '@/components/products/Breadcrumbs';
import ProductGrid from '@/components/products/ProductGrid';
import ProductFilters from '@/components/products/ProductFilters';

export default function CategoryPage({ params }: { params: { slug: string[] } }) {
  const { slug } = params;
  const [category, subcategory] = slug;

  const filteredProducts = mockProducts.filter(p => {
    const categoryMatch = category ? p.category.toLowerCase() === category.toLowerCase() : true;
    const subcategoryMatch = subcategory ? p.subcategory.toLowerCase() === subcategory.toLowerCase() : true;
    return categoryMatch && subcategoryMatch;
  });

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
