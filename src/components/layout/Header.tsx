
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SocialBar from './SocialBar';
import NotificationMarquee from './NotificationMarquee';
import MainNav from './MainNav';
import CartSidebar from '../cart/CartSidebar';
import { Badge } from '../ui/badge';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const cartItemCount = 2; // Mock count

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
        <SocialBar />
        <NotificationMarquee />
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Mobile Menu Trigger */}
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={toggleMobileMenu}>
            <Menu className="h-6 w-6" />
          </Button>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="Maher Zarai Markaz" 
              width={180} 
              height={40}
              className="object-contain"
              data-ai-hint="logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex justify-center flex-1">
            <MainNav />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <AnimatePresence>
              {isSearchOpen && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 'auto', opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="h-10 px-4 rounded-full border border-gray-300 focus:ring-primary focus:border-primary transition-all duration-300"
                    autoFocus
                    onBlur={() => setIsSearchOpen(false)}
                  />
                </motion.div>
              )}
            </AnimatePresence>
             <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <Search className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="relative" onClick={() => setIsCartOpen(true)}>
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 justify-center p-0 rounded-full bg-primary text-primary-foreground">
                  {cartItemCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
       <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-white lg:hidden"
          >
            <div className="container mx-auto p-4">
              <div className="flex justify-between items-center mb-8">
                 <Link href="/" className="flex items-center" onClick={toggleMobileMenu}>
                    <Image 
                      src="/logo.png" 
                      alt="Maher Zarai Markaz" 
                      width={160} 
                      height={35}
                      className="object-contain"
                      data-ai-hint="logo"
                    />
                 </Link>
                <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <MainNav isMobile />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CartSidebar isOpen={isCartOpen} onOpenChange={setIsCartOpen} />
    </>
  );
}
