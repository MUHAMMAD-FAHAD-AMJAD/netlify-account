
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, User, ShoppingCart, Menu, X, ChevronDown, LogOut, UserCog, History } from 'lucide-react';
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useToast } from '@/hooks/use-toast';


function UserNav() {
  const { user, logout } = useAppContext();

  if (!user) {
    return (
      <Link href="/auth">
        <Button variant="ghost" size="icon">
          <User className="h-6 w-6" />
        </Button>
      </Link>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-auto px-3 gap-2">
            <Avatar className="h-8 w-8">
                <AvatarImage src={`https://api.pravatar.cc/150?u=${user.email}`} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="hidden md:block font-medium">{user.name}</span>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
            <Link href="/dashboard">
                <UserCog className="mr-2 h-4 w-4" />
                <span>My Profile</span>
            </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
             <Link href="/dashboard">
                <History className="mr-2 h-4 w-4" />
                <span>Order History</span>
            </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout} className="cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function Header() {
  const { cartItems, setIsCartOpen } = useAppContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { toast } = useToast();
  
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchTerm = e.currentTarget.search.value;
    if (searchTerm) {
      toast({
        title: "Search Submitted",
        description: `You searched for: "${searchTerm}". Search results page is not yet implemented.`
      })
      setIsSearchOpen(false);
      e.currentTarget.reset();
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md">
        <SocialBar />
        <NotificationMarquee />
        <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4 border-b">
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:left-0 lg:translate-x-0 flex-shrink-0">
             <Link href="/" className="flex items-center gap-2">
                <Image 
                  src="/logo.png" 
                  alt="Maher Zarai Markaz" 
                  width={50} 
                  height={50} 
                  className="h-12 w-12 object-contain"
                  priority
                  unoptimized
                />
                <span className="hidden sm:inline-block text-xl font-bold tracking-tight">
                    MAHER ZARAI MARKAZ
                </span>
            </Link>
          </div>
          
          <div className="hidden lg:flex flex-1 justify-center">
            <MainNav closeMobileMenu={() => setIsMobileMenuOpen(false)} />
          </div>

          <div className="flex items-center justify-end gap-2">
            <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 200, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
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
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <Search className="h-6 w-6" />
            </Button>
            <UserNav />
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
                 <Link href="/" className="flex items-center gap-2" onClick={toggleMobileMenu}>
                    <Image 
                      src="/logo.png" 
                      alt="Maher Zarai Markaz" 
                      width={40} 
                      height={40}
                      unoptimized
                    />
                    <span className="text-lg font-bold">MAHER ZARAI MARKAZ</span>
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
