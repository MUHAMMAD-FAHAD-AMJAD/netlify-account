
"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star, Minus, Plus, ShoppingCart, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useAppContext } from "@/context/AppContext";
import ProductCard from "@/components/shared/ProductCard";
import type { Product } from "@/lib/types";

interface ProductPageClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductPageClient({ product, relatedProducts }: ProductPageClientProps) {
  const { addToCart, addRecentlyViewed } = useAppContext();
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product.images[0]);

  // Add the product to the recently viewed list when the component mounts
  useEffect(() => {
    addRecentlyViewed(product);
  }, [product, addRecentlyViewed]);


  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full_${i}`} className="w-5 h-5 text-yellow-400 fill-yellow-400" />);
    }
    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty_${i}`} className="w-5 h-5 text-gray-300 fill-gray-300" />);
    }

    return stars;
  };

  return (
    <>
      <div className="grid md:grid-cols-2 gap-12 items-start mt-6">
        {/* Image Gallery */}
        <div className="space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden border bg-gray-50">
              <Image
                  src={mainImage}
                  alt={product.name}
                  data-ai-hint={product.imageHint}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain transition-transform duration-500 hover:scale-105 p-4"
              />
               {product.originalPrice && (
                  <Badge
                  variant="destructive"
                  className="absolute top-4 left-4 z-10 rounded-full text-base px-4 py-1"
                  >
                  Sale
                  </Badge>
              )}
            </div>
             <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, index) => (
                    <div 
                      key={index} 
                      className={`aspect-square rounded-lg overflow-hidden border-2 cursor-pointer bg-gray-50 ${mainImage === img ? 'border-primary' : 'border-transparent'}`}
                      onClick={() => setMainImage(img)}
                    >
                         <Image
                              src={img}
                              alt={`${product.name} thumbnail ${index+1}`}
                              width={100}
                              height={100}
                              className="object-contain w-full h-full p-1"
                          />
                    </div>
                ))}
            </div>
        </div>

        {/* Product Info */}
        <div>
          <span className="text-sm font-medium text-primary uppercase">{product.brand}</span>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mt-2">{product.name}</h1>
          
          <div className="flex items-center gap-4 mt-4">
               <div className="flex items-center">
                  {renderStars()}
               </div>
               <a href="#reviews" className="text-sm text-muted-foreground hover:text-primary">({product.reviews} reviews)</a>
          </div>

          <Separator className="my-6"/>

          <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-primary">Rs. {product.price.toLocaleString()}</span>
              {product.originalPrice && (
                  <span className="text-xl font-medium text-gray-400 line-through">Rs. {product.originalPrice.toLocaleString()}</span>
              )}
          </div>
          
          <div className="mt-2 flex items-center gap-2">
              {product.isSoldOut ? (
                  <Badge variant="secondary" className="text-base">Sold Out</Badge>
              ) : (
                  <Badge variant="default" className="bg-green-100 text-green-800 text-base border border-green-200">
                      <Check className="h-4 w-4 mr-1" />
                      In Stock
                  </Badge>
              )}
          </div>

          <p className="mt-6 text-base text-gray-700 leading-relaxed">{product.description}</p>
          
          <Separator className="my-6"/>

          <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 border rounded-full py-2 px-3">
                  <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full" onClick={() => setQuantity(q => Math.max(1, q - 1))}>
                      <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center font-bold text-lg">{quantity}</span>
                  <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full" onClick={() => setQuantity(q => q + 1)}>
                      <Plus className="h-4 w-4" />
                  </Button>
              </div>
              <Button 
                  size="lg" 
                  className="flex-1 h-14 text-lg rounded-full bg-black text-white hover:bg-gray-800"
                  onClick={handleAddToCart}
                  disabled={product.isSoldOut}
              >
                  <ShoppingCart className="mr-2 h-5 w-5"/>
                  Add to Cart
              </Button>
          </div>
          
        </div>
      </div>
      
      {/* Related Products Section */}
      <div className="mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
            {relatedProducts.map((p) => (
              <ProductCard 
                key={p.id} 
                product={p} 
                onAddToCart={() => addToCart(p, 1)}
                onViewProduct={() => addRecentlyViewed(p)}
              />
            ))}
          </div>
      </div>
    </>
  );
}
