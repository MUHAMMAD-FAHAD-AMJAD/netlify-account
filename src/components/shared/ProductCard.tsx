"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Product } from '@/lib/types';
import { Star, StarHalf } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleMouseEnter = () => {
    if (product.images.length > 1) {
      // Logic for image cycling can be added here
    }
  };

  const handleMouseLeave = () => {
    setCurrentImageIndex(0);
  };
  
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full_${i}`} className="w-4 h-4 text-yellow-400 fill-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-4 h-4 text-yellow-400 fill-yellow-400" />);
    }

    for (let i = stars.length; i < 5; i++) {
      stars.push(<Star key={`empty_${i}`} className="w-4 h-4 text-gray-300 fill-gray-300" />);
    }

    return stars;
  };

  return (
    <Card
      className="group relative overflow-hidden rounded-[20px] border-none shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {product.isSoldOut && (
        <Badge
          variant="secondary"
          className="absolute top-4 left-4 z-10 rounded-full bg-gray-200 text-gray-800"
        >
          Sold Out
        </Badge>
      )}
      <div className="aspect-square overflow-hidden bg-gray-50">
        <Image
          src={product.images[currentImageIndex]}
          alt={product.name}
          data-ai-hint={product.imageHint}
          width={400}
          height={400}
          className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
      <CardContent className="p-4 bg-white">
        <p className="text-sm text-muted-foreground mb-1">{product.brand}</p>
        <h3 className="font-bold text-lg leading-tight truncate">{product.name}</h3>
        <div className="flex items-center mt-2">
            {renderStars()}
          <span className="ml-2 text-xs text-muted-foreground">({product.reviews} reviews)</span>
        </div>
        <div className="flex items-baseline justify-between mt-4">
          <p className="text-2xl font-black text-gray-900">
            Rs. {product.price.toLocaleString()}
          </p>
          <Button
            size="lg"
            className={cn(
              "rounded-full h-12 text-base transition-all duration-300 ease-in-out",
              product.isSoldOut
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-black text-white border-2 border-transparent hover:bg-white hover:text-black hover:border-black"
            )}
            disabled={product.isSoldOut}
          >
            {product.isSoldOut ? 'Out of Stock' : 'Add to Cart'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
