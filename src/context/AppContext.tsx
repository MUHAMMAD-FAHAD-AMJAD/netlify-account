
"use client";

import React, { createContext, useContext, useState, ReactNode, useCallback, useEffect } from 'react';
import type { Product, CartItem, User } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';
import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signOut, type Auth } from 'firebase/auth';

// IMPORTANT: Replace with your actual Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

interface AppContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number, options?: { showToast?: boolean }) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  recentlyViewed: Product[];
  addRecentlyViewed: (product: Product) => void;
  user: User | null;
  firebaseAuth: Auth | null;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

let firebaseApp: FirebaseApp | null = null;
let firebaseAuth: Auth | null = null;

// Ensure Firebase is initialized only on the client side
if (typeof window !== 'undefined') {
    // Check if the config keys are placeholders. If so, don't initialize.
    if (firebaseConfig.apiKey !== "YOUR_API_KEY") {
        try {
            firebaseApp = initializeApp(firebaseConfig);
            firebaseAuth = getAuth(firebaseApp);
        } catch (error) {
            console.error("Firebase initialization error:", error);
        }
    } else {
        console.warn("Firebase config is using placeholder keys. Please replace them in src/context/AppContext.tsx to enable authentication.");
    }
}


export function AppProvider({ children }: { children: ReactNode }) {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>([]);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!firebaseAuth) return;
    
    const unsubscribe = onAuthStateChanged(firebaseAuth, (firebaseUser) => {
        if (firebaseUser) {
            setUser({
                id: firebaseUser.uid,
                name: firebaseUser.displayName || 'User',
                email: firebaseUser.email || '',
                isAdmin: false // You might need a custom claim for this
            });
        } else {
            setUser(null);
        }
    });

    return () => unsubscribe();
  }, []);


  const logout = () => {
    if (firebaseAuth) {
        signOut(firebaseAuth).then(() => {
             toast({
                title: "Logged Out",
                description: "You have been successfully logged out.",
            });
        });
    }
  };

  const addToCart = (product: Product, quantity: number = 1, options: { showToast?: boolean } = { showToast: true }) => {
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

    if (options.showToast) {
       toast({
          title: "Added to cart",
          description: `${product.name} (x${quantity}) has been added to your cart.`,
      })
    }
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
    <AppContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, recentlyViewed, addRecentlyViewed, user, firebaseAuth, logout }}>
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
