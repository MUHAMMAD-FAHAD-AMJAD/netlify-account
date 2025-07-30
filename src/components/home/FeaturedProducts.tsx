import ProductCard from '@/components/shared/ProductCard';
import type { Product } from '@/lib/types';

const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Contact Insecticide',
    brand: 'FMC',
    price: 1250,
    images: ['https://placehold.co/400x400', 'https://placehold.co/400x400', 'https://placehold.co/400x400'],
    rating: 4.5,
    reviews: 112,
    isSoldOut: false,
    imageHint: 'insecticide bottle'
  },
  {
    id: '2',
    name: 'Non-selective Herbicide',
    brand: 'Syngenta',
    price: 2100,
    images: ['https://placehold.co/400x400', 'https://placehold.co/400x400'],
    rating: 4.8,
    reviews: 98,
    isSoldOut: false,
    imageHint: 'herbicide spray'
  },
  {
    id: '3',
    name: 'NPK Fertilizer',
    brand: 'Engro',
    price: 3500,
    images: ['https://placehold.co/400x400'],
    rating: 5,
    reviews: 254,
    isSoldOut: true,
    imageHint: 'fertilizer bag'
  },
  {
    id: '4',
    name: 'Hybrid Wheat Seeds',
    brand: 'Maher Seeds',
    price: 4200,
    images: ['https://placehold.co/400x400', 'https://placehold.co/400x400'],
    rating: 4.9,
    reviews: 310,
    isSoldOut: false,
    imageHint: 'wheat seeds'
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight">Featured Products</h2>
          <p className="mt-4 text-lg text-muted-foreground">Top picks for your agricultural needs</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
