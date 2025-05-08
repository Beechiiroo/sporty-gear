
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Heart } from "lucide-react";
import { useCart } from '@/stores/CartStore';
import { useFavorites } from '@/stores/FavoritesStore';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from "@/hooks/use-toast";
import useSound from '@/hooks/useSound';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ProductCardProps {
  id: number;
  name: {
    en: string;
    fr: string;
  };
  price: number;
  image: string;
  category: string;
  rating?: number;
  featured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, category, rating = 5, featured }) => {
  const addToCart = useCart(state => state.addItem);
  const { toast } = useToast();
  const { toggleFavorite, isFavorite } = useFavorites();
  const { language, t } = useLanguage();
  const isLiked = isFavorite(id);
  const { playAddToCartSound, playFavoriteSound } = useSound();

  const localizedName = name[language as keyof typeof name] || name.en;

  const handleAddToCart = () => {
    addToCart({ id, name: localizedName, price, image, quantity: 1 });
    playAddToCartSound();
    toast({
      title: t('addedToCart'),
      description: `${localizedName} ${t('hasBeenAddedToCart')}`,
    });
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent navigation when clicking the heart icon
    toggleFavorite(id);
    if (!isLiked) {
      playFavoriteSound();
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(language === 'fr' ? 'fr-FR' : 'en-US', {
      style: 'currency',
      currency: language === 'fr' ? 'EUR' : 'USD'
    }).format(price);
  };

  // Calculate filled and empty stars
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl relative">
      {featured && (
        <div className="absolute top-2 right-2 z-10">
          <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-1 text-xs font-medium text-yellow-800">
            {t('featuredProduct')}
          </span>
        </div>
      )}
      <div 
        className="relative aspect-square overflow-hidden cursor-pointer"
        onClick={() => window.location.href = `/product/${id}`}
      >
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={image} 
            alt={localizedName}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
          />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 left-2 bg-white/80 hover:bg-white rounded-full"
                  onClick={handleToggleFavorite}
                  type="button"
                >
                  <Heart className={`h-5 w-5 transform transition-all duration-300 ${isLiked ? 'fill-red-500 text-red-500 scale-110' : 'text-gray-500'}`} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{isLiked ? t('removeFromFavorites') : t('addToFavorites')}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex items-center gap-1 text-yellow-500 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < filledStars ? 'fill-current' : (i === filledStars && hasHalfStar ? 'fill-[50%]' : '')}`} 
            />
          ))}
          <span className="text-xs text-gray-600 ml-1">({rating.toFixed(1)})</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-blue-600">{category}</span>
          <h3 className="font-semibold text-lg mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
            {localizedName}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {formatPrice(price)}
            </span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    onClick={handleAddToCart}
                    variant="default"
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {language === 'fr' ? "Ajouter" : "Add"}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{t('addToCart')}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
