
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import { ChevronLeft, ShoppingCart } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

function Logo() {
    return (
        <Link href="/" className="flex items-center">
            <Image 
                src="/1.png" 
                alt="Maher Zarai Markaz" 
                width={180} 
                height={45}
                className="object-contain h-[45px]"
                priority
                unoptimized
                data-ai-hint="logo"
            />
        </Link>
    );
}

export default function CheckoutPage() {
  const { cartItems } = useAppContext();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const shipping = 0; // It's free in the reference screenshot
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen flex flex-col lg:flex-row-reverse bg-white text-black">
       <header className="fixed top-0 left-0 right-0 lg:hidden bg-white/80 backdrop-blur-sm z-20 border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Logo />
            <Link href="/cart">
                <Button variant="ghost" size="icon">
                    <ShoppingCart className="h-6 w-6" />
                </Button>
            </Link>
        </div>
      </header>
    
      {/* Right Side - Order Summary */}
      <aside className="w-full lg:w-2/5 lg:min-h-screen lg:fixed lg:right-0 lg:top-0 bg-gray-50 p-4 sm:p-8 lg:p-12 border-l">
        <div className="max-w-lg mx-auto">
            <div className="hidden lg:flex items-center justify-between mb-8">
                 <Logo />
                 <Link href="/cart">
                    <Button variant="ghost" size="icon">
                        <ShoppingCart className="h-6 w-6" />
                    </Button>
                </Link>
            </div>
            
            {/* Cart Items */}
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="relative">
                    <Image
                      data-ai-hint="product agriculture"
                      src={item.product.images[0]}
                      alt={item.product.name}
                      width={64}
                      height={64}
                      className="rounded-lg border object-cover aspect-square"
                    />
                    <span className="absolute -top-2 -right-2 bg-gray-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{item.product.name}</p>
                  </div>
                  <p className="font-semibold text-sm">Rs. {(item.product.price * item.quantity).toLocaleString()}</p>
                </div>
              ))}
            </div>

            <Separator className="my-6" />
            
            {/* Coupon Code */}
            <div className="flex gap-2">
                <Input placeholder="Discount code" className="bg-white rounded-md h-11" />
                <Button variant="outline" className="h-11 border-gray-300 text-gray-600 hover:bg-gray-200">Apply</Button>
            </div>

            <Separator className="my-6" />

            {/* Totals */}
            <div className="space-y-2 text-base">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>Rs. {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `Rs. ${shipping.toLocaleString()}`}</span>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="flex justify-between items-baseline">
              <span className="font-medium text-lg">Total</span>
              <div className="flex items-baseline gap-2">
                <span className="text-gray-500 text-sm">PKR</span>
                <span className="font-semibold text-2xl">Rs. {total.toLocaleString()}</span>
              </div>
            </div>
        </div>
      </aside>


      {/* Left Side - Forms */}
      <main className="w-full lg:w-3/5 lg:pr-[40%] py-16 lg:py-12 px-4 sm:px-8">
        <div className="max-w-lg mx-auto">
            <div className="hidden lg:block">
                 <Logo />
            </div>
           
           <ol className="flex items-center text-sm text-gray-500 mt-8 mb-6 space-x-2">
                <li><Link href="/cart" className="text-primary hover:underline">Cart</Link></li>
                <li><ChevronLeft className="h-4 w-4 rotate-180" /></li>
                <li className="font-medium text-black">Information</li>
                <li><ChevronLeft className="h-4 w-4 rotate-180" /></li>
                <li><span>Shipping</span></li>
                 <li><ChevronLeft className="h-4 w-4 rotate-180" /></li>
                <li><span>Payment</span></li>
            </ol>

            {/* Contact Info */}
            <div className="border rounded-md p-4 flex justify-between items-center mb-6">
                <div>
                    <p className="text-xs text-gray-500">Contact</p>
                    <p className="font-medium">demo@example.com</p>
                </div>
                <button className="text-xs text-primary hover:underline">Log out</button>
            </div>


            <div className="space-y-8">
                {/* Shipping Address */}
                <div>
                    <h2 className="text-lg font-medium mb-4">Shipping address</h2>
                    <div className="space-y-4">
                         <Select>
                            <SelectTrigger className="h-12 rounded-md">
                                <SelectValue placeholder="Country/Region" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="pakistan">Pakistan</SelectItem>
                                <SelectItem value="usa">United States</SelectItem>
                                <SelectItem value="uk">United Kingdom</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Input placeholder="First name" className="h-12 rounded-md" />
                            <Input placeholder="Last name" className="h-12 rounded-md" />
                        </div>
                        <Input placeholder="Address" className="h-12 rounded-md" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                             <Input placeholder="City" className="h-12 rounded-md" />
                            <Input placeholder="Postal code" className="h-12 rounded-md" />
                        </div>
                         <Input placeholder="Phone" type="tel" className="h-12 rounded-md" />
                    </div>
                </div>
            </div>

             <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 mt-8">
                <Link href="/products/all" className="flex items-center gap-2 text-primary hover:underline">
                    <ChevronLeft className="h-4 w-4" />
                    Return to cart
                </Link>
                 <Button className="w-full sm:w-auto h-14 rounded-md text-base font-medium bg-black text-white hover:bg-gray-800 px-8">
                  Continue to shipping
                </Button>
            </div>
        </div>
        <footer className="mt-12 pt-6 border-t">
            <p className="text-xs text-gray-500 text-center">All rights reserved Maher Zarai Markaz</p>
        </footer>
      </main>

    </div>
  );
}
