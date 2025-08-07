import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { AppProvider } from '@/context/AppContext';
import AppManager from '@/components/layout/AppManager';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Maher Zarai Markaz',
  description: 'Your one-stop shop for premium pesticides and agricultural products.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.variable}>
        <AppProvider>
          <AppManager>
            {children}
          </AppManager>
          <Toaster />
        </AppProvider>
      </body>
    </html>
  );
}
