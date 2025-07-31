"use client";

import { useState } from "react";
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
import Image from "next/image";
import type { CartItem, Product } from "@/lib/types";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { cn } from "@/lib/utils";

interface CartSidebarProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const initialCartItems: CartItem[] = [
  {
    id: "1",
    product: {
      id: "prod1",
      name: "Organic Fertilizer",
      brand: "Syngenta",
      price: 2500,
      images: ["https://placehold.co/100x100"],
      rating: 4.5,
      reviews: 120,
    },
    quantity: 4,
  },
  {
    id: "2",
    product: {
      id: "prod2",
      name: "Pre-emergence Herbicide",
      brand: "Engro",
      price: 1800,
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
    name: "Systemic Insecticide",
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
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [activeTab, setActiveTab] = useState("cart");

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      handleRemoveItem(itemId);
      return;
    }
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const handleAddItemFromRecent = (product: Product) => {
    const existingItem = cartItems.find(item => item.product.id === product.id);
    if (existingItem) {
      handleQuantityChange(existingItem.id, existingItem.quantity + 1);
    } else {
      const newItem: CartItem = {
        id: `cart_${product.id}`,
        product: product,
        quantity: 1,
      };
      setCartItems([...cartItems, newItem]);
    }
    setActiveTab("cart");
  };

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 bg-white">
        <SheetHeader className="p-4 border-b flex-row items-center justify-between">
          <SheetTitle className="text-xl font-bold">Shopping Cart</SheetTitle>
           <SheetClose asChild>
              <Button variant="ghost" size="icon">
                <X className="h-5 w-5" />
              </Button>
            </SheetClose>
        </SheetHeader>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col overflow-hidden">
          <TabsList className="grid w-full grid-cols-2 rounded-none p-0 bg-transparent border-b h-auto">
            <TabsTrigger value="cart" className="py-3 text-base font-medium rounded-none data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-green-600 data-[state=active]:text-green-600 text-gray-500 data-[state=inactive]:border-b-2 data-[state=inactive]:border-transparent">Cart</TabsTrigger>
            <TabsTrigger value="recent" className="py-3 text-base font-medium rounded-none data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-green-600 data-[state=active]:text-green-600 text-gray-500 data-[state=inactive]:border-b-2 data-[state=inactive]:border-transparent">Recently viewed</TabsTrigger>
          </TabsList>
          <ScrollArea className="flex-1">
            <TabsContent value="cart" className="flex-1 p-4 flex flex-col gap-6 mt-0">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <Image
                      data-ai-hint="product agriculture"
                      src={item.product.images[0]}
                      alt={item.product.name}
                      width={80}
                      height={80}
                      className="rounded-lg border object-cover aspect-square"
                    />
                    <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start">
                            <div>
                                <h4 className="font-medium text-base">{item.product.name}</h4>
                                <p className="text-sm text-muted-foreground">Rs. {item.product.price.toLocaleString()}</p>
                            </div>
                             <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-destructive" onClick={() => handleRemoveItem(item.id)}>
                                <Trash2 className="h-4 w-4"/>
                            </Button>
                        </div>
                      <div className="flex items-center mt-2">
                         <div className="flex items-center gap-2 border rounded-full py-1 px-2">
                          <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full" onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
                              <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-5 text-center font-medium text-sm">{item.quantity}</span>
                           <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                              <Plus className="h-4 w-4" />
                          </Button>
                         </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-muted-foreground flex-1 flex flex-col items-center justify-center h-full py-20">
                  <p className="text-lg">Your cart is empty.</p>
                  <p className="text-sm">Add items to get started!</p>
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
                    <h5 className="font-medium text-sm">{product.name}</h5>
                    <p className="text-sm text-muted-foreground">Rs. {product.price.toLocaleString()}</p>
                  </div>
                   <Button size="sm" variant="outline" className="rounded-full" onClick={() => handleAddItemFromRecent(product)}>
                      Add
                  </Button>
                </div>
              ))}
            </TabsContent>
          </ScrollArea>
          {cartItems.length > 0 && activeTab === 'cart' && (
             <SheetFooter className="p-4 border-t flex flex-col gap-4 bg-gray-50/80 backdrop-blur-sm sm:flex-col sm:items-stretch sm:justify-start">
                <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-bold text-xl">Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="rounded-full h-11 text-base font-semibold border-2 border-black hover:bg-black hover:text-white">View Cart</Button>
                    <Button className="rounded-full h-11 text-base font-semibold bg-black text-white hover:bg-gray-800">Checkout</Button>
                </div>
             </SheetFooter>
          )}
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
