
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import Image from 'next/image';

export default function DashboardPage() {
  const { user, logout } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/auth?redirect=/dashboard');
    }
  }, [user, router]);

  const handleLogout = () => {
    logout();
    router.push('/');
  }

  if (!user) {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
            <p>Loading...</p>
        </div>
    );
  }

  return (
    <div className="bg-gray-50/50">
        <div className="container mx-auto py-16 sm:py-24 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <Link href="/" className="inline-block">
                    <span className="text-3xl font-bold text-primary">MAHER ZARAI MARKAZ</span>
                  </Link>
                </div>
                <Card className="shadow-xl rounded-2xl overflow-hidden border-none">
                    <CardHeader className="p-8 bg-white text-center">
                        <Avatar className="h-32 w-32 mx-auto mb-6 ring-4 ring-primary/20 p-1">
                            <AvatarImage src={`https://i.pravatar.cc/150?u=${user.email}`} alt={user.name} />
                            <AvatarFallback className="text-5xl">{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <CardTitle className="text-4xl font-black tracking-tight">Welcome, {user.name}!</CardTitle>
                        <CardDescription className="text-lg mt-2 text-muted-foreground">This is your personal dashboard. More features coming soon!</CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 text-center space-y-8 bg-gray-50">
                        <div>
                            <h3 className="text-xl font-bold mb-2">Your Information</h3>
                            <p className="text-muted-foreground text-base">Name: {user.name}</p>
                            <p className="text-muted-foreground text-base">Email: {user.email}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button asChild size="lg" className="h-14 px-10 text-lg rounded-full w-full sm:w-auto bg-black text-white hover:bg-gray-800">
                                <Link href="/" passHref>
                                    Continue Shopping
                                </Link>
                            </Button>
                            <Button onClick={handleLogout} variant="outline" size="lg" className="h-14 px-10 text-lg rounded-full w-full sm:w-auto">
                            Logout
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
  );
}
