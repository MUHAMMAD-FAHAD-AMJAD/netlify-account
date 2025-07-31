
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SocialBar from './SocialBar';
import NotificationMarquee from './NotificationMarquee';
import MainNav from './MainNav';
import { Badge } from '../ui/badge';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';
import { Input } from '../ui/input';
import CartSidebar from '../cart/CartSidebar';

export default function Header() {
  const { cartItems, setIsCartOpen } = useAppContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter();
  
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchTerm = e.currentTarget.search.value;
    if (searchTerm) {
      alert(`Searching for: ${searchTerm}`);
      setIsSearchOpen(false);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
        <SocialBar />
        <NotificationMarquee />
        <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>

          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
                <Image 
                  src="/logo.png"
                  alt="Maher Zarai Markaz" 
                  width={180} 
                  height={45}
                  className="h-[45px] object-contain"
                  priority
                  unoptimized
                />
            </Link>
          </div>
          
          <div className="hidden lg:flex flex-1 justify-center">
            <MainNav closeMobileMenu={() => setIsMobileMenuOpen(false)} />
          </div>

          <div className="flex items-center justify-end gap-2">
            <div className="relative hidden md:block">
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                <Search className="h-6 w-6" />
              </Button>
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 200, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-1/2 right-full -translate-y-1/2 mr-2"
                  >
                    <form onSubmit={handleSearchSubmit}>
                      <Input
                        name="search"
                        type="text"
                        placeholder="Search..."
                        className="h-10 rounded-full border-gray-300 focus:ring-primary focus:border-primary"
                        autoFocus
                        onBlur={() => setIsSearchOpen(false)}
                      />
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link href="/auth">
              <Button variant="ghost" size="icon">
                <User className="h-6 w-6" />
              </Button>
            </Link>
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
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
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
                      unoptimized
                    />
                 </Link>
                <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <MainNav isMobile closeMobileMenu={() => setIsMobileMenuOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CartSidebar />
    </>
  );
}
