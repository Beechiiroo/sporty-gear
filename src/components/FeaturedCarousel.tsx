
import React, { useMemo } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { products } from '@/data/products';
import ProductCard from './ProductCard';
import { Trophy } from 'lucide-react';

const FeaturedCarousel = () => {
  const featuredProducts = useMemo(() => {
    return [...products]
      .sort((a, b) => (b.rating || 0) - (a.rating || 0))
      .slice(0, 6);
  }, []);

  return (
    <div className="py-16 container mx-auto relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl blur-3xl -z-10" />
      
      <div className="relative mb-12">
        <div className="flex items-center gap-4 justify-center mb-4">
          <Trophy className="h-10 w-10 text-blue-500" />
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Produits Vedettes
          </h2>
        </div>
        <p className="text-center text-gray-500 max-w-xl mx-auto">
          Découvrez notre sélection exclusive de produits haut de gamme, choisis pour leur qualité exceptionnelle et leurs performances.
        </p>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-8 h-8 bg-blue-500/30 rounded-full blur-sm -z-10"></div>
        <div className="absolute bottom-0 right-1/3 w-6 h-6 bg-purple-500/20 rounded-full blur-sm -z-10"></div>
      </div>
      
      <Carousel 
        className="w-full max-w-6xl mx-auto"
        opts={{
          loop: true,
          align: "start"
        }}
      >
        <CarouselContent>
          {featuredProducts.map((product) => (
            <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
              <div className="p-1 h-full transform transition-all duration-300 hover:scale-[1.03]">
                <ProductCard {...product} featured />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-4 bg-white/80 hover:bg-white shadow-lg" />
        <CarouselNext className="hidden md:flex -right-4 bg-white/80 hover:bg-white shadow-lg" />
      </Carousel>
      
      {/* Decorative dots pattern */}
      <div className="hidden md:block absolute right-10 bottom-10 w-24 h-24">
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div 
              key={i} 
              className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-70"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCarousel;
