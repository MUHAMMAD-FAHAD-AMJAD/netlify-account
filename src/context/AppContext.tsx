
"use client";

import React, { createContext, useContext, useState, ReactNode, useCallback, useEffect } from 'react';
import type { Product, CartItem, User } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

interface AuthResponse {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  token: string;
}

interface AppContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  recentlyViewed: Product[];
  addRecentlyViewed: (product: Product) => void;
  user: User | null;
  login: (authData: AuthResponse) => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>([]);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for user data in localStorage on initial load
    try {
      const storedUser = localStorage.getItem('userInfo');
      if (storedUser) {
        const userData = JSON.parse(storedUser);
        setUser({
          id: userData._id,
          name: userData.name,
          email: userData.email,
          isAdmin: userData.isAdmin,
        });
      }
    } catch (error) {
      console.error("Failed to parse user info from localStorage", error);
      localStorage.removeItem('userInfo');
    }
  }, []);

  const login = (authData: AuthResponse) => {
    const userData = {
        id: authData._id,
        name: authData.name,
        email: authData.email,
        isAdmin: authData.isAdmin,
    };
    setUser(userData);
    localStorage.setItem('userInfo', JSON.stringify(authData));
    toast({
      title: "Login Successful",
      description: `Welcome back, ${authData.name}!`,
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('userInfo');
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

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
  
  const addRecentlyViewed = useCallback((product: Product) => {
    setRecentlyViewed(prev => {
        const isAlreadyViewed = prev.some(p => p.id === product.id);
        if (isAlreadyViewed) {
            const newOrder = [product, ...prev.filter(p => p.id !== product.id)];
            return newOrder;
        }
        const updatedList = [product, ...prev];
        if (updatedList.length > 10) {
            updatedList.pop();
        }
        return updatedList;
    });
  }, []);

  return (
    <AppContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, recentlyViewed, addRecentlyViewed, user, login, logout }}>
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
