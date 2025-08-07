
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    if (email) {
      toast({
        title: "Subscribed!",
        description: `Thank you, ${email} has been added to our mailing list.`,
      });
      e.currentTarget.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter a valid email address.",
      });
    }
  };

  const handleNotImplemented = (feature: string) => {
    toast({
        title: "Coming Soon!",
        description: `The ${feature} page is currently under construction.`,
    })
  }

  return (
    <footer className="bg-gray-100 text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <Link href="/" className="mb-4 inline-block">
              <span className="text-xl font-bold text-primary">MAHER ZARAI MARKAZ</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Your trusted partner in agriculture, providing top-quality products for a bountiful harvest since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Youtube /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><MessageCircle /></a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/products/insecticides" className="text-muted-foreground hover:text-primary transition-colors">Insecticides</Link></li>
              <li><Link href="/products/weedicides" className="text-muted-foreground hover:text-primary transition-colors">Weedicides</Link></li>
              <li><Link href="/products/fungicides" className="text-muted-foreground hover:text-primary transition-colors">Fungicides</Link></li>
              <li><Link href="/products/fertilizers" className="text-muted-foreground hover:text-primary transition-colors">Fertilizers</Link></li>
              <li><Link href="/products/seeds" className="text-muted-foreground hover:text-primary transition-colors">Seeds</Link></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              <li><button onClick={() => handleNotImplemented('FAQ')} className="text-muted-foreground hover:text-primary transition-colors text-left w-full">FAQs</button></li>
              <li><button onClick={() => handleNotImplemented('Shipping Policy')} className="text-muted-foreground hover:text-primary transition-colors text-left w-full">Shipping Policy</button></li>
              <li><button onClick={() => handleNotImplemented('Returns & Exchanges')} className="text-muted-foreground hover:text-primary transition-colors text-left w-full">Returns & Exchanges</button></li>
            </ul>
          </div>
          
          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="flex w-full max-w-sm items-center space-x-2" onSubmit={handleSubscribe}>
              <Input name="email" type="email" placeholder="Your email address" className="rounded-full h-12" />
              <Button type="submit" className="rounded-full h-12 bg-black text-white hover:bg-gray-800">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Maher Zarai Markaz. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
