
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getProducts } from '@/lib/products';
import type { Product, Category } from '@/lib/types';

export default async function CategoryGrid() {
  const products = await getProducts();

  const uniqueCategories = Array.from(new Set(products.map(p => p.category)))
    .map(categoryName => {
      const product = products.find(p => p.category === categoryName);
      return {
        name: categoryName,
        href: `/products/${categoryName.toLowerCase().replace(/\s/g, '-')}`,
        description: `${categoryName} for your farm`,
        imageUrl: `https://picsum.photos/seed/${categoryName.toLowerCase().replace(/\s/g, '-')}/600/400`,
        imageHint: `An image related to ${categoryName}`
      } as Category;
    });

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight">Shop by Category</h2>
          <p className="mt-4 text-lg text-muted-foreground">Find exactly what you need for your farm or garden.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {uniqueCategories.map((category) => (
            <Link key={category.name} href={category.href} className="block group">
              <Card className="relative overflow-hidden rounded-3xl border-none shadow-lg transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:-translate-y-2">
                <Image
                  src={category.imageUrl}
                  alt={category.description}
                  data-ai-hint={category.imageHint}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">{category.name}</h3>
                  <p className="text-lg text-white/90 mb-4">{category.description}</p>
                   <div className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                    Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
