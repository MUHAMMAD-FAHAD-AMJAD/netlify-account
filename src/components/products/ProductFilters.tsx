
"use client";

import { useState } from "react";
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { mockProducts } from "@/lib/products";

const categories = [
    { name: 'Insecticides', id: '1' },
    { name: 'Weedicides', id: '2' },
    { name: 'Fungicides', id: '3' },
    { name: 'Micro Nutrients', id: '4' },
    { name: 'Granules', id: '5' },
    { name: 'Fertilizers', id: '6' },
    { name: 'Seeds', id: '7' },
];

// Dynamically generate packing options from products
const allPackingOptions = Array.from(new Set(mockProducts.flatMap(p => p.description.match(/Packing - (.+)/)?.[1].split(' , ') || [])));


export default function ProductFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleFilterChange = (type: string, value: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    
    if (type === 'category') {
        // For category, we want to navigate to a new path
        const newPath = `/products/${value.toLowerCase().replace(/ /g, '-')}`;
        router.push(newPath);
    } else {
        // For other filters like search, update query params
        if (value) {
            current.set(type, value);
        } else {
            current.delete(type);
        }
        const search = current.toString();
        const query = search ? `?${search}` : "";
        router.push(`${pathname}${query}`);
    }
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchValue = e.currentTarget.s.value;
    handleFilterChange('s', searchValue);
  }

  return (
    <div className="sticky top-24">
       <form method="get" onSubmit={handleSearch}>
            <Input type="text" className="form-control mb-4 h-12 rounded-lg" placeholder="Search..." name="s" defaultValue={searchParams.get('s') || ''}/>
        </form>
        <div className="shop-filters">
            <Accordion type="multiple" defaultValue={['category', 'packing']} className="w-full">
                <AccordionItem value="category" className="border rounded-xl mb-4 shadow-sm">
                    <AccordionTrigger className="px-4 py-3 text-lg font-semibold hover:no-underline">
                        Category
                    </AccordionTrigger>
                    <AccordionContent>
                       <div className="card-body card-shop-filters p-0">
                           <div className="flex flex-col p-2">
                               {categories.map(category => (
                                   <button 
                                        key={category.id} 
                                        onClick={() => handleFilterChange('category', category.name)}
                                        className="text-left p-2 rounded-md hover:bg-accent text-base"
                                    >
                                       {category.name}
                                   </button>
                               ))}
                           </div>
                       </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="packing" className="border rounded-xl shadow-sm">
                   <AccordionTrigger className="px-4 py-3 text-lg font-semibold hover:no-underline">
                        Packing
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="card-body card-shop-filters p-0">
                            <div className="flex flex-col p-2 max-h-60 overflow-y-auto">
                               {allPackingOptions.map(packing => (
                                    <button 
                                        key={packing} 
                                        onClick={() => handleFilterChange('packing_id', packing)}
                                        className="text-left p-2 rounded-md hover:bg-accent text-base"
                                    >
                                       {packing}
                                   </button>
                               ))}
                           </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    </div>
  );
}
