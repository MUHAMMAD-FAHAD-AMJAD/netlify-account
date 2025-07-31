
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Product } from '@/lib/types';
import { Star, StarHalf, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
  onViewProduct: () => void;
}

export default function ProductCard({ product, onAddToCart, onViewProduct }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleMouseEnter = () => {
    onViewProduct(); // Track recently viewed
    if (product.images.length > 1) {
      setCurrentImageIndex(1 % product.images.length);
    }
  };

  const handleMouseLeave = () => {
    setCurrentImageIndex(0);
  };
  
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating - fullStars >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full_${i}`} className="w-4 h-4 text-yellow-400 fill-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-4 h-4 text-yellow-400 fill-yellow-400" />);
    }

    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty_${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <Card
      className="group relative overflow-hidden rounded-2xl border-none shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 flex flex-col bg-white"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={`/product/${product.id}`} onClick={onViewProduct} className="absolute inset-0 z-10" aria-label={`View ${product.name}`}/>
      <div className="aspect-square overflow-hidden relative">
         {product.isSoldOut && (
            <Badge
            variant="secondary"
            className="absolute top-3 left-3 z-20 rounded-full bg-gray-900/70 text-white backdrop-blur-sm"
            >
            Sold Out
            </Badge>
        )}
        {product.originalPrice && (
            <Badge
            variant="destructive"
            className="absolute top-3 right-3 z-20 rounded-full"
            >
            Sale
            </Badge>
        )}
        <Image
          src={product.images[currentImageIndex]}
          alt={product.name}
          data-ai-hint={product.imageHint}
          width={400}
          height={400}
          className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
      <CardContent className="p-4 flex flex-col flex-1">
        <p className="text-sm text-muted-foreground mb-1">{product.brand}</p>
        <h3 className="font-semibold text-base leading-snug flex-1 text-balance">{product.name}</h3>
        <div className="flex items-center mt-2">
            {renderStars()}
          <span className="ml-2 text-xs text-muted-foreground">({product.reviews} reviews)</span>
        </div>
        <div className="flex items-center justify-between mt-4">
            <div className="flex items-baseline gap-2">
                <p className="text-xl font-bold text-gray-900">
                    Rs. {product.price.toLocaleString()}
                </p>
                {product.originalPrice && <p className="text-sm font-medium text-muted-foreground line-through">Rs. {product.originalPrice.toLocaleString()}</p>}
            </div>
            <Button
                size="icon"
                onClick={(e) => {
                    e.stopPropagation(); // prevent link navigation
                    e.preventDefault();
                    onAddToCart();
                }}
                className={cn(
                  "rounded-full h-10 w-10 transition-all duration-300 ease-in-out z-20",
                  product.isSoldOut
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-black text-white border-2 border-transparent hover:bg-white hover:text-black hover:border-black"
                )}
                disabled={product.isSoldOut}
                aria-label="Add to cart"
            >
                <ShoppingCart className="h-5 w-5"/>
            </Button>
        </div>
      </CardContent>
    </Card>
  );
}
