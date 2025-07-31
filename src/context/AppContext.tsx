
"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { Product, CartItem } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

interface AppContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  recentlyViewed: Product[];
  addRecentlyViewed: (product: Product) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>([]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { id: `cart_${product.id}_${Date.now()}`, product, quantity }];
    });
    toast({
        title: "Added to cart",
        description: `${product.name} (x${quantity}) has been added to your cart.`,
    })
    setIsCartOpen(true);
  };

  const removeFromCart = (itemId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(itemId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };
  
  const addRecentlyViewed = (product: Product) => {
    setRecentlyViewed(prev => {
        const isAlreadyViewed = prev.some(p => p.id === product.id);
        if (isAlreadyViewed) {
            // Move the item to the front if it's already in the list
            const newOrder = [product, ...prev.filter(p => p.id !== product.id)];
            return newOrder;
        }
        const updatedList = [product, ...prev];
        // Keep the list to a reasonable size, e.g., 10
        if (updatedList.length > 10) {
            updatedList.pop();
        }
        return updatedList;
    });
  }

  return (
    <AppContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, recentlyViewed, addRecentlyViewed }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
