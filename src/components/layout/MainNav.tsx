"use client";

import * as React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { usePathname } from "next/navigation";
import { getProducts } from "@/lib/products";
import type { Product } from "@/lib/types";

interface NavLink {
    name: string;
    href: string;
    subLinks?: { title: string, href: string }[];
}

interface NavItemProps {
  link: NavLink;
  closeMobileMenu: () => void;
  isActive: boolean;
}

const NavItem = ({ link, closeMobileMenu, isActive }: NavItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={link.href}
        className={cn(
          "flex items-center gap-1 text-base font-medium transition-colors duration-300 px-4 py-2",
          isActive ? "text-primary" : "text-black hover:text-black/70"
        )}
      >
        {link.name}
      </Link>
      <AnimatePresence>
        {isHovered && link.subLinks && link.subLinks.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 bg-white rounded-xl shadow-[0_8px_25px_rgba(0,0,0,0.1)] p-2 z-20 border"
          >
            <ul className="flex flex-col gap-1">
              {link.subLinks.map((sub) => (
                <li key={sub.title}>
                   <Link href={sub.href} className="block w-full text-left px-3 py-2 text-sm text-black hover:bg-gray-100 rounded-md" onClick={closeMobileMenu}>
                      {sub.title}
                   </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface MainNavProps {
  isMobile?: boolean;
  closeMobileMenu: () => void;
}

export default function MainNav({ isMobile = false, closeMobileMenu }: MainNavProps) {
    const pathname = usePathname();
    const [navLinks, setNavLinks] = useState<NavLink[]>([]);

    useEffect(() => {
        async function fetchNavLinks() {
            const products = await getProducts();
            const uniqueCategories = Array.from(new Set(products.map(p => p.category)));
            const links = uniqueCategories.map(categoryName => ({
                name: categoryName,
                href: `/products/${categoryName.toLowerCase().replace(/\s/g, '-')}`,
            }));
            setNavLinks(links);
        }
        fetchNavLinks();
    }, []);

  if (isMobile) {
    return (
      <div className="flex flex-col gap-4">
        {navLinks.map((link) => (
          <Accordion type="single" collapsible className="w-full" key={link.name}>
            <AccordionItem value={link.name} className="border-b-0">
              <AccordionTrigger className="text-lg font-medium py-3 hover:no-underline">
                <Link href={link.href} onClick={closeMobileMenu}>{link.name}</Link>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="pl-4 space-y-2">
                  {link.subLinks && link.subLinks.map((sub) => (
                    <li key={sub.title}>
                      <Link href={sub.href} className="block py-2 text-muted-foreground hover:text-primary" onClick={closeMobileMenu}>{sub.title}</Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    );
  }

  return (
     <nav className="flex gap-2">
      {navLinks.map((link) => (
        <NavItem 
            key={link.name} 
            link={link} 
            closeMobileMenu={closeMobileMenu}
            isActive={pathname.startsWith(link.href)}
        />
      ))}
    </nav>
  );
}
