
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

export default function DashboardPage() {
  const { user, logout } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    // If there's no user, redirect to auth page
    if (!user) {
      router.push('/auth?redirect=/dashboard');
    }
  }, [user, router]);

  const handleLogout = () => {
    logout();
    router.push('/');
  }

  // Render a loading state or null while waiting for the redirect
  if (!user) {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <p>Loading...</p>
        </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <Avatar className="h-24 w-24 mx-auto mb-4">
            <AvatarImage src={`https://i.pravatar.cc/150?u=${user.email}`} alt={user.name} />
            <AvatarFallback className="text-4xl">{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <CardTitle className="text-3xl">Welcome, {user.name}!</CardTitle>
          <CardDescription>This is your personal dashboard. More features coming soon!</CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-6">
            <div>
                <h3 className="font-semibold">Your Information</h3>
                <p className="text-muted-foreground">Name: {user.name}</p>
                <p className="text-muted-foreground">Email: {user.email}</p>
            </div>
          <div className="flex justify-center gap-4">
             <Link href="/" passHref>
                <Button asChild className="h-12 px-8 text-base">
                    <span>Continue Shopping</span>
                </Button>
            </Link>
            <Button onClick={handleLogout} variant="outline" className="h-12 px-8 text-base">
              Logout
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
