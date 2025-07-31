
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import { ChevronLeft, ShoppingCart, Lock, CreditCard, Calendar } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

function Logo() {
    return (
        <Link href="/" className="flex items-center">
            <Image 
                src="/1.png" 
                alt="Maher Zarai Markaz" 
                width={200} 
                height={50}
                className="object-contain h-[50px]"
                priority
                unoptimized
                data-ai-hint="logo"
            />
        </Link>
    );
}

function Breadcrumbs({ step }: { step: 'information' | 'shipping' | 'payment' }) {
    const steps = ['information', 'shipping', 'payment'];
    const currentStepIndex = steps.indexOf(step);

    return (
        <nav aria-label="Breadcrumb">
            <ol className="flex items-center text-sm text-gray-500 mb-8 space-x-2">
                <li><Link href="/cart" className="text-primary hover:underline">Cart</Link></li>
                {steps.map((s, index) => (
                    <li key={s} className="flex items-center space-x-2">
                        <ChevronLeft className="h-4 w-4 rotate-180 text-gray-400" />
                        <span className={cn(
                            "capitalize",
                            index === currentStepIndex ? "font-medium text-black" : "",
                            index > currentStepIndex ? "text-gray-500" : ""
                        )}>
                            {s}
                        </span>
                    </li>
                ))}
            </ol>
        </nav>
    )
}

function InformationStep({ onContinue }: { onContinue: () => void }) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onContinue();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <h2 className="text-lg font-semibold mb-4">Shipping address</h2>
                <div className="space-y-4">
                    <Select required>
                        <SelectTrigger className="h-12 rounded-lg">
                            <SelectValue placeholder="Country/Region" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="pakistan">Pakistan</SelectItem>
                            <SelectItem value="usa">United States</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                        </SelectContent>
                    </Select>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input placeholder="First name" className="h-12 rounded-lg" required/>
                        <Input placeholder="Last name" className="h-12 rounded-lg" required/>
                    </div>
                    <Input placeholder="Address" className="h-12 rounded-lg" required/>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input placeholder="City" className="h-12 rounded-lg" required/>
                        <Input placeholder="Postal code" className="h-12 rounded-lg" />
                    </div>
                    <Input placeholder="Phone" type="tel" className="h-12 rounded-lg" required/>
                </div>
            </div>
            
            <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 mt-8">
                <Link href="/" className="flex items-center gap-1 text-primary hover:underline">
                    <ChevronLeft className="h-4 w-4" />
                    Return to cart
                </Link>
                <Button 
                    type="submit"
                    className="w-full sm:w-auto h-14 rounded-lg text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 px-8"
                >
                    Continue to shipping
                </Button>
            </div>
        </form>
    );
}

function ShippingStep({ onContinue, onBack }: { onContinue: () => void, onBack: () => void }) {
    return (
        <div className="space-y-6">
             <div className="border rounded-lg p-4 text-sm space-y-3">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <span className="text-gray-500 w-16">Contact</span>
                        <p>demo@example.com</p>
                    </div>
                     <button onClick={onBack} className="text-xs text-primary hover:underline">Change</button>
                </div>
                 <Separator/>
                 <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <span className="text-gray-500 w-16">Ship to</span>
                        <p>123 Fake Street, Anytown, 12345, Pakistan</p>
                    </div>
                     <button onClick={onBack} className="text-xs text-primary hover:underline">Change</button>
                </div>
            </div>
            
            <div>
                <h2 className="text-lg font-semibold mb-4">Shipping method</h2>
                <div className="border rounded-lg p-4 flex justify-between items-center text-sm">
                    <p>Standard Shipping</p>
                    <p className="font-semibold">FREE</p>
                </div>
            </div>

            <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 mt-8">
                <button onClick={onBack} className="flex items-center gap-1 text-primary hover:underline">
                    <ChevronLeft className="h-4 w-4" />
                    Return to information
                </button>
                <Button 
                    className="w-full sm:w-auto h-14 rounded-lg text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 px-8"
                    onClick={onContinue}
                >
                    Continue to payment
                </Button>
            </div>
        </div>
    )
}

function PaymentStep({ onBack, onPay }: { onBack: () => void, onPay: () => void }) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onPay();
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border rounded-lg p-4 text-sm space-y-3">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <span className="text-gray-500 w-16">Contact</span>
                        <p>demo@example.com</p>
                    </div>
                    <button type="button" onClick={() => onBack()} className="text-xs text-primary hover:underline">Change</button>
                </div>
                 <Separator/>
                 <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <span className="text-gray-500 w-16">Ship to</span>
                        <p>123 Fake Street, Anytown, 12345, Pakistan</p>
                    </div>
                     <button type="button" onClick={() => onBack()} className="text-xs text-primary hover:underline">Change</button>
                </div>
                 <Separator/>
                 <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <span className="text-gray-500 w-16">Method</span>
                        <p>Standard Shipping - FREE</p>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Payment</h2>
                <p className="text-sm text-gray-500">All transactions are secure and encrypted.</p>
                <div className="border rounded-lg mt-2 bg-gray-50 p-4 space-y-4">
                     <div className="relative">
                        <Input id="card-number" placeholder="Card number" className="h-12 rounded-lg bg-white pl-10" required />
                        <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"/>
                    </div>
                    <Input placeholder="Name on card" className="h-12 rounded-lg bg-white" required />
                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative">
                            <Input id="expiration" placeholder="Expiration date (MM / YY)" className="h-12 rounded-lg bg-white pl-10" required />
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"/>
                        </div>
                        <div className="relative">
                             <Input id="cvc" placeholder="Security code" className="h-12 rounded-lg bg-white pl-10" required />
                             <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"/>
                        </div>
                    </div>
                </div>
            </div>

             <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 mt-8">
                 <button type="button" onClick={() => onBack()} className="flex items-center gap-1 text-primary hover:underline">
                    <ChevronLeft className="h-4 w-4" />
                    Return to shipping
                </button>
                <Button 
                    type="submit"
                    className="w-full sm:w-auto h-14 rounded-lg text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 px-8"
                >
                    Pay now
                </Button>
            </div>
        </form>
    )
}

export default function CheckoutPage() {
  const { cartItems } = useAppContext();
  const [step, setStep] = useState<'information' | 'shipping' | 'payment'>('information');
  const { toast } = useToast();
  const router = useRouter();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const shipping = 0;
  const total = subtotal + shipping;
  
  const handleContinueToShipping = () => setStep('shipping');
  const handleContinueToPayment = () => setStep('payment');
  const handleBackToInformation = () => setStep('information');
  const handleBackToShipping = () => setStep('shipping');
  const handlePay = () => {
    toast({
        title: "Order Placed!",
        description: "Thank you for your purchase. Your order is being processed.",
    });
    // In a real app, you would clear the cart here as well.
    router.push('/');
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white text-black">
      {/* Left Side - Forms */}
      <main className="w-full lg:w-[55%] lg:pl-32 xl:pl-48 py-8 sm:py-16 px-4 sm:px-8 order-2 lg:order-1">
        <div className="max-w-lg mx-auto lg:mx-0">
            <div className="mb-8">
                 <Logo />
            </div>
           
            <Breadcrumbs step={step} />

            {step === 'information' && <InformationStep onContinue={handleContinueToShipping} />}
            {step === 'shipping' && <ShippingStep onContinue={handleContinueToPayment} onBack={handleBackToInformation}/>}
            {step === 'payment' && <PaymentStep onBack={handleBackToShipping} onPay={handlePay}/>}

            <footer className="mt-12 pt-6 border-t">
              <p className="text-xs text-gray-500">All rights reserved Maher Zarai Markaz</p>
            </footer>
        </div>
      </main>

      {/* Right Side - Order Summary */}
      <aside className="w-full lg:w-[45%] bg-gray-50 p-4 sm:p-8 lg:p-12 border-l order-1 lg:order-2">
        <div className="max-w-md mx-auto lg:mx-0 lg:sticky lg:top-16">
            <div className="lg:hidden flex items-center justify-between mb-8">
                 <Logo />
                 <Link href="/cart" aria-label="Open Cart">
                    <Button variant="ghost" size="icon" className="relative">
                        <ShoppingCart className="h-6 w-6" />
                        {cartItems.length > 0 && (
                          <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                          </span>
                        )}
                    </Button>
                </Link>
            </div>
            
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
                    <p className="text-xs text-gray-500">{item.product.brand}</p>
                  </div>
                  <p className="font-semibold text-sm">Rs. {(item.product.price * item.quantity).toLocaleString()}</p>
                </div>
              ))}
            </div>

            <Separator className="my-6" />
            
            <div className="flex gap-2">
                <Input placeholder="Discount code" className="bg-white rounded-lg h-11" />
                <Button variant="outline" className="h-11 border-gray-300 text-gray-600 hover:bg-gray-200 px-6 rounded-lg">Apply</Button>
            </div>

            <Separator className="my-6" />

            <div className="space-y-2 text-base">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">Rs. {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="font-medium">{shipping === 0 ? 'FREE' : `Rs. ${shipping.toLocaleString()}`}</span>
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
    </div>
  );
}
