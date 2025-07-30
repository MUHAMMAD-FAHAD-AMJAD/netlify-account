import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { Category } from '@/lib/types';
import { ArrowRight } from 'lucide-react';

const categories: Category[] = [
  { name: 'Shop All', description: 'All Agricultural Products', imageUrl: 'https://placehold.co/600x400', imageHint: 'farm field' },
  { name: 'Insecticides', description: 'Pest Control Solutions', imageUrl: 'https://placehold.co/600x400', imageHint: 'insects farm' },
  { name: 'Herbicides', description: 'Weed Control Products', imageUrl: 'https://placehold.co/600x400', imageHint: 'weeds field' },
  { name: 'Fungicides', description: 'Disease Prevention', imageUrl: 'https://placehold.co/600x400', imageHint: 'plant disease' },
  { name: 'Fertilizers', description: 'Plant Nutrition', imageUrl: 'https://placehold.co/600x400', imageHint: 'fertilizer bags' },
  { name: 'Seeds', description: 'Quality Seeds & Seedlings', imageUrl: 'https://placehold.co/600x400', imageHint: 'seeds planting' },
];

export default function CategoryGrid() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="relative overflow-hidden group rounded-3xl border-none shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
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
                <Button variant="secondary" className="rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                  Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
