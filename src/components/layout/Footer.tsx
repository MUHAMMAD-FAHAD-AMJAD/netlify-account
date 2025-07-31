
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <Link href="/" className="mb-4 inline-block">
              <Image 
                src="https://placehold.co/200x50.png"
                alt="Maher Zarai Markaz"
                width={200}
                height={50}
                className="object-contain h-[50px]"
              />
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
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Insecticides</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Herbicides</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Fungicides</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Fertilizers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Seeds</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQs</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Returns & Exchanges</a></li>
            </ul>
          </div>
          
          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Your email address" className="rounded-full h-12" />
              <Button type="submit" className="rounded-full h-12 bg-black text-white hover:bg-gray-800">Subscribe</Button>
            </div>
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
