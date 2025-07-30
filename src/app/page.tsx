import CategoryGrid from "@/components/home/CategoryGrid";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HeroCarousel from "@/components/home/HeroCarousel";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroCarousel />
      <CategoryGrid />
      <FeaturedProducts />
    </div>
  );
}
