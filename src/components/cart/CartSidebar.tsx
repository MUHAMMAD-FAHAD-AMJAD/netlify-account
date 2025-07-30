"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import type { CartItem, Product } from "@/lib/types";
import { Minus, Plus, Trash2, X } from "lucide-react";

interface CartSidebarProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const mockCartItems: CartItem[] = [
  {
    id: "1",
    product: {
      id: "prod1",
      name: "Systemic Insecticide",
      brand: "Syngenta",
      price: 1500,
      images: ["https://placehold.co/100x100"],
      rating: 4.5,
      reviews: 120,
    },
    quantity: 1,
  },
  {
    id: "2",
    product: {
      id: "prod2",
      name: "Organic Fertilizer",
      brand: "Engro",
      price: 2500,
      images: ["https://placehold.co/100x100"],
      rating: 5,
      reviews: 88,
    },
    quantity: 2,
  },
];

const mockRecentlyViewed: Product[] = [
  {
    id: "prod3",
    name: "Pre-emergence Herbicide",
    brand: "Bayer",
    price: 1800,
    images: ["https://placehold.co/100x100"],
    rating: 4,
    reviews: 54,
  },
  {
    id: "prod4",
    name: "Cotton Seeds",
    brand: "Maher Seeds",
    price: 3200,
    images: ["https://placehold.co/100x100"],
    rating: 4.8,
    reviews: 210,
  },
];

export default function CartSidebar({ isOpen, onOpenChange }: CartSidebarProps) {
  const subtotal = mockCartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const freeShippingThreshold = 5000;
  const progressValue = (subtotal / freeShippingThreshold) * 100;

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
        <Tabs defaultValue="cart" className="flex-1 flex flex-col">
          <SheetHeader className="p-4 border-b">
            <SheetTitle className="text-center text-lg">Your Cart</SheetTitle>
            <TabsList className="grid w-full grid-cols-2 mt-4">
              <TabsTrigger value="cart" className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none">Cart</TabsTrigger>
              <TabsTrigger value="recent" className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none">Recently viewed</TabsTrigger>
            </TabsList>
          </SheetHeader>
          <TabsContent value="cart" className="flex-1 overflow-y-auto p-4 flex flex-col gap-6">
            {mockCartItems.length > 0 ? (
              mockCartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <Image
                    data-ai-hint="product agriculture"
                    src={item.product.images[0]}
                    alt={item.product.name}
                    width={80}
                    height={80}
                    className="rounded-lg border object-cover"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-semibold">{item.product.name}</h4>
                      <p className="text-sm text-muted-foreground">Rs. {item.product.price.toLocaleString()}</p>
                    </div>
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon" className="h-8 w-8 rounded-full transition-colors duration-300 hover:bg-black hover:text-white">
                            <Minus className="h-4 w-4" />
                        </Button>
                        <span>{item.quantity}</span>
                         <Button variant="outline" size="icon" className="h-8 w-8 rounded-full transition-colors duration-300 hover:bg-black hover:text-white">
                            <Plus className="h-4 w-4" />
                        </Button>
                       </div>
                       <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
                           <Trash2 className="h-4 w-4"/>
                       </Button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-muted-foreground flex-1 flex flex-col items-center justify-center">
                <p>Your cart is empty.</p>
              </div>
            )}
          </TabsContent>
          <TabsContent value="recent" className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
            {mockRecentlyViewed.map((product) => (
              <div key={product.id} className="flex items-center gap-4">
                <Image
                  data-ai-hint="product agriculture"
                  src={product.images[0]}
                  alt={product.name}
                  width={60}
                  height={60}
                  className="rounded-lg border object-cover"
                />
                <div className="flex-1">
                  <h5 className="font-semibold text-sm">{product.name}</h5>
                  <p className="text-sm text-muted-foreground">Rs. {product.price.toLocaleString()}</p>
                </div>
                <Button size="icon" className="rounded-full w-10 h-10 bg-black text-white transition-colors duration-300 hover:bg-white hover:text-black border border-transparent hover:border-black">
                    <Plus className="h-5 w-5" />
                </Button>
              </div>
            ))}
          </TabsContent>

          {mockCartItems.length > 0 && (
             <SheetFooter className="p-4 border-t flex flex-col gap-4 bg-gray-50">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-sm">
                        <p>
                            {progressValue >= 100
                            ? "You've got free shipping!"
                            : `Add Rs. ${(freeShippingThreshold - subtotal).toLocaleString()} for free shipping`}
                        </p>
                    </div>
                    <Progress value={progressValue} className="h-2" />
                </div>
                <Separator />
                <div className="flex justify-between items-center font-bold text-lg">
                    <span>Subtotal</span>
                    <span>Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="rounded-full h-12 transition-colors duration-300 bg-white text-black border-black hover:bg-black hover:text-white">View Cart</Button>
                    <Button className="rounded-full h-12 transition-colors duration-300 bg-black text-white hover:bg-gray-800">Checkout</Button>
                </div>
             </SheetFooter>
          )}
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
