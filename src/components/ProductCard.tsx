
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Heart } from "lucide-react";
import { useCart } from '@/stores/CartStore';
import { useFavorites } from '@/stores/FavoritesStore';
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
  name: string;
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
  const isLiked = isFavorite(id);
  const { playAddToCartSound } = useSound();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image, quantity: 1 });
    playAddToCartSound();
    toast({
      title: "Ajouté au panier",
      description: `${name} a été ajouté à votre panier`,
    });
  };

  const handleToggleFavorite = () => {
    toggleFavorite(id);
    toast({
      title: isLiked ? "Retiré des favoris" : "Ajouté aux favoris",
      description: `${name} a été ${isLiked ? "retiré de" : "ajouté à"} votre liste de favoris`,
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  };

  // Calculate filled and empty stars
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 relative bg-black/50 border-blue-500/20">
      {featured && (
        <div className="absolute top-2 right-2 z-10">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-800">
            Produit Vedette
          </span>
        </div>
      )}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 left-2 bg-black/80 hover:bg-black rounded-full"
          onClick={handleToggleFavorite}
        >
          <Heart className={`h-5 w-5 ${isLiked ? 'fill-blue-500 text-blue-500' : 'text-white'}`} />
        </Button>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-4">
        <div className="flex items-center gap-1 text-blue-500 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < filledStars ? 'fill-current' : (i === filledStars && hasHalfStar ? 'fill-[50%]' : '')}`} 
            />
          ))}
          <span className="text-xs text-blue-200/80 ml-1">({rating.toFixed(1)})</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-blue-500">{category}</span>
          <h3 className="font-semibold text-lg mb-2 text-white group-hover:text-blue-400 transition-colors">
            {name}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              {formatPrice(price)}
            </span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    onClick={handleAddToCart}
                    variant="default"
                    size="sm"
                    className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 text-white"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Ajouter
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Ajouter au panier</p>
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
