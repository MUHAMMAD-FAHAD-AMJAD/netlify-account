"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import type { CartItem, Product } from "@/lib/types";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";

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

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
        <SheetHeader className="p-4 border-b flex-row items-center justify-between">
          <SheetTitle className="text-xl font-bold">Your Cart</SheetTitle>
           <SheetClose asChild>
              <Button variant="ghost" size="icon">
                <X className="h-5 w-5" />
              </Button>
            </SheetClose>
        </SheetHeader>
        <Tabs defaultValue="cart" className="flex-1 flex flex-col">
          <TabsList className="grid w-full grid-cols-2 rounded-none px-4 pt-4 bg-transparent">
            <TabsTrigger value="cart" className="pb-3 rounded-none data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary">Cart</TabsTrigger>
            <TabsTrigger value="recent" className="pb-3 rounded-none data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary">Recently viewed</TabsTrigger>
          </TabsList>
          <ScrollArea className="flex-1">
            <TabsContent value="cart" className="flex-1 p-4 flex flex-col gap-6 mt-0">
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
                    <div className="flex-1 flex flex-col gap-2">
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="font-semibold">{item.product.name}</h4>
                                <p className="text-sm text-muted-foreground">Rs. {item.product.price.toLocaleString()}</p>
                            </div>
                             <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive">
                                <Trash2 className="h-4 w-4"/>
                            </Button>
                        </div>
                      <div className="flex items-center">
                         <div className="flex items-center gap-2 border rounded-full p-1">
                          <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
                              <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-4 text-center">{item.quantity}</span>
                           <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
                              <Plus className="h-4 w-4" />
                          </Button>
                         </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-muted-foreground flex-1 flex flex-col items-center justify-center h-full py-20">
                  <p>Your cart is empty.</p>
                </div>
              )}
            </TabsContent>
            <TabsContent value="recent" className="flex-1 p-4 flex flex-col gap-4 mt-0">
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
                  <Button size="icon" className="rounded-full w-10 h-10 bg-primary text-primary-foreground transition-colors duration-300 hover:bg-primary/80">
                      <Plus className="h-5 w-5" />
                  </Button>
                </div>
              ))}
            </TabsContent>
          </ScrollArea>
          {mockCartItems.length > 0 && (
             <SheetFooter className="p-4 border-t flex flex-col gap-4 bg-background">
                <div className="flex justify-between items-center font-bold text-lg">
                    <span>Subtotal</span>
                    <span>Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="rounded-full h-12">View Cart</Button>
                    <Button className="rounded-full h-12">Checkout</Button>
                </div>
             </SheetFooter>
          )}
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
