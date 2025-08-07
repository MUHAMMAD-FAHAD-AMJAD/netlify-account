"use server"

import { notFound } from "next/navigation";
import { getProducts } from "@/lib/products";
import Breadcrumbs from "@/components/products/Breadcrumbs";
import ProductPageClient from "@/components/products/ProductPageClient";

// This is the main page component, which is a SERVER component.
export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  
  const products = await getProducts();
  const product = products.find((p) => p.id === params.id);

  // If no product is found, render the 404 page.
  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <Breadcrumbs path={[product.category, product.subcategory, product.name]} />
        {/* All interactive logic is now in this Client Component */}
        <ProductPageClient product={product} relatedProducts={relatedProducts} />
      </div>
    </div>
  );
}

// Generate static pages for all products at build time.
// This function MUST be in a Server Component.
export async function generateStaticParams() {
    try {
      const products = await getProducts();
      return products.map(product => ({
        id: product.id,
      }));
    } catch (error) {
       console.error('Error in generateStaticParams for product pages:', error);
       return [];
    }
}
