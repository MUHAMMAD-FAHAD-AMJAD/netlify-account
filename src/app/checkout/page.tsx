
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { mockProducts } from "@/lib/products";
import { CreditCard, Truck } from "lucide-react";

const cartItems = [
  { ...mockProducts[0], quantity: 2 },
  { ...mockProducts[4], quantity: 1 },
];

export default function CheckoutPage() {
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 500;
  const total = subtotal + shipping;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black tracking-tighter">Checkout</h1>
          <p className="mt-2 text-lg text-muted-foreground">Complete your order securely</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Side - Forms */}
          <div className="lg:col-span-7 space-y-8">
            {/* Delivery Information */}
            <Card className="rounded-2xl shadow-lg border-none">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Delivery Information</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" className="h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" className="h-12 rounded-xl" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="123 Main St, Garden Town" className="h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Lahore" className="h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="postalCode">Postal Code</Label>
                  <Input id="postalCode" placeholder="54000" className="h-12 rounded-xl" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+92 300 1234567" className="h-12 rounded-xl" />
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card className="rounded-2xl shadow-lg border-none">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Payment Method</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <RadioGroup defaultValue="cod" className="space-y-4">
                  <Label
                    htmlFor="cod"
                    className="flex items-center justify-between p-4 border rounded-xl cursor-pointer has-[:checked]:bg-primary/10 has-[:checked]:border-primary transition-all"
                  >
                    <div>
                      <h4 className="font-semibold">Cash on Delivery (COD)</h4>
                      <p className="text-sm text-muted-foreground">Pay with cash upon delivery.</p>
                    </div>
                    <RadioGroupItem value="cod" id="cod" />
                  </Label>
                  <Label
                    htmlFor="card"
                    className="flex items-center justify-between p-4 border rounded-xl cursor-pointer has-[:checked]:bg-primary/10 has-[:checked]:border-primary transition-all"
                  >
                    <div>
                      <h4 className="font-semibold">Credit/Debit Card</h4>
                      <p className="text-sm text-muted-foreground">Secure payment via PayFast/RPAY.</p>
                    </div>
                    <RadioGroupItem value="card" id="card" />
                  </Label>
                </RadioGroup>
                <div className="flex items-center space-x-2">
                  <Checkbox id="same-billing" />
                  <Label htmlFor="same-billing" className="text-sm">Billing address is the same as my shipping address</Label>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Order Summary */}
          <div className="lg:col-span-5">
            <Card className="rounded-2xl shadow-lg border-none sticky top-24">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <Image
                        data-ai-hint={item.imageHint}
                        src={item.images[0]}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="rounded-lg border object-cover aspect-square"
                      />
                      <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-semibold">Rs. {(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  ))}
                </div>
                <Separator />
                <div className="space-y-2 text-base">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>Rs. {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>Rs. {shipping.toLocaleString()}</span>
                  </div>
                </div>
                <Separator />
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-black text-3xl">Rs. {total.toLocaleString()}</span>
                </div>
                <Button className="w-full h-14 rounded-xl text-lg font-bold bg-black text-white hover:bg-gray-800">
                  Place Order
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
