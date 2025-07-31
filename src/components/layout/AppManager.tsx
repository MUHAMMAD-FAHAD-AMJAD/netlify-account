'use client';

import { useAppContext } from '@/context/AppContext';
import { cn } from '@/lib/utils';
import Footer from './Footer';
import Header from './Header';
import ChatWidget from '../chat/ChatWidget';

export default function AppManager({
    children
}: {
    children: React.ReactNode;
}) {
    const { isCartOpen } = useAppContext();
    return (
        <div
            className={cn(
                'min-h-screen bg-background font-body antialiased',
            )}
        >
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ChatWidget />
        </div>
    )
}
