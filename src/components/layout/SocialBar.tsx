import { Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";
import Link from 'next/link';

export default function SocialBar() {
  return (
    <div className="bg-[#1A1A1A] text-white">
      <div className="container mx-auto px-4 h-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="Facebook">
            <Facebook className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
          </Link>
          <Link href="#" aria-label="Instagram">
            <Instagram className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
          </Link>
          <Link href="#" aria-label="YouTube">
            <Youtube className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
          </Link>
          <Link href="#" aria-label="TikTok">
            <MessageCircle className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
          </Link>
        </div>
        <div>
          {/* Can add other elements here if needed */}
        </div>
      </div>
    </div>
  );
}
