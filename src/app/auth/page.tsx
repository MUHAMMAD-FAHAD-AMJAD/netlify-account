
"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import Link from 'next/link';

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 2a10 10 0 0 0-7.071 2.929" />
        <path d="M12 22a10 10 0 0 1-7.071-17.071" />
        <path d="M2 12h20" />
        <path d="M12 2v20" />
      </svg>
    );
}
  
function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-blue-600"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    );
}

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");
  const { toast } = useToast();

  const handleAuthAction = (action: string) => {
    toast({
      title: "Feature Not Implemented",
      description: `The ${action} functionality requires a backend. This is ready for integration!`,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, action: string) => {
    e.preventDefault();
    handleAuthAction(action);
  };

  return (
    <div className="flex min-h-[calc(100vh-200px)] items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
            <Link href="/" className="inline-block">
                <Image 
                  src="https://placehold.co/250x60.png" 
                  alt="Maher Zarai Markaz" 
                  width={250} 
                  height={60}
                  className="object-contain h-[60px] mx-auto"
                  priority
                  data-ai-hint="logo"
                />
            </Link>
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login" className="py-3 text-base">Login</TabsTrigger>
            <TabsTrigger value="signup" className="py-3 text-base">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card className="rounded-2xl shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold">Welcome Back!</CardTitle>
                <CardDescription>Log in to access your account and continue shopping.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={(e) => handleSubmit(e, 'Login')}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">Email address</Label>
                      <Input id="login-email" type="email" placeholder="you@example.com" required className="h-12 rounded-lg"/>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="login-password">Password</Label>
                        <a href="#" onClick={() => handleAuthAction('Forgot Password')} className="text-sm font-medium text-primary hover:underline">
                          Forgot password?
                        </a>
                      </div>
                      <Input id="login-password" type="password" required className="h-12 rounded-lg"/>
                    </div>
                    <Button type="submit" className="w-full h-12 text-base font-semibold bg-black text-white hover:bg-gray-800 rounded-lg">
                      Log In
                    </Button>
                  </div>
                </form>
                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="h-12 text-base rounded-lg" onClick={() => handleAuthAction('Google Sign-In')}>
                    <GoogleIcon className="mr-2 h-5 w-5" />
                    Google
                  </Button>
                  <Button variant="outline" className="h-12 text-base rounded-lg" onClick={() => handleAuthAction('Facebook Sign-In')}>
                    <FacebookIcon className="mr-2 h-5 w-5" />
                    Facebook
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="signup">
            <Card className="rounded-2xl shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold">Create an Account</CardTitle>
                <CardDescription>Join us and get access to exclusive products and offers.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                 <form onSubmit={(e) => handleSubmit(e, 'Sign Up')}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="signup-name">Full name</Label>
                        <Input id="signup-name" placeholder="John Doe" required className="h-12 rounded-lg"/>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-email">Email address</Label>
                        <Input id="signup-email" type="email" placeholder="you@example.com" required className="h-12 rounded-lg"/>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-password">Password</Label>
                        <Input id="signup-password" type="password" required className="h-12 rounded-lg"/>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-confirm-password">Confirm Password</Label>
                        <Input id="signup-confirm-password" type="password" required className="h-12 rounded-lg"/>
                      </div>
                      <Button type="submit" className="w-full h-12 text-base font-semibold bg-black text-white hover:bg-gray-800 rounded-lg">
                        Create Account
                      </Button>
                    </div>
                 </form>
                 <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-card px-2 text-muted-foreground">Or sign up with</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="h-12 text-base rounded-lg" onClick={() => handleAuthAction('Google Sign-Up')}>
                    <GoogleIcon className="mr-2 h-5 w-5" />
                    Google
                  </Button>
                  <Button variant="outline" className="h-12 text-base rounded-lg" onClick={() => handleAuthAction('Facebook Sign-Up')}>
                    <FacebookIcon className="mr-2 h-5 w-5" />
                    Facebook
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
