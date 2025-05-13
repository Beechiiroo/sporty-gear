
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { toast } from "@/hooks/use-toast";
import { Product } from '@/types/product';

interface FavoritesState {
  favorites: Product[];
  addFavorite: (product: Product) => void;
  removeFavorite: (id: number) => void;
  toggleFavorite: (product: Product) => void;
  isFavorite: (id: number) => boolean;
  clearFavorites: () => void;
  getFavoritesCount: () => number;
}

export const useFavorites = create<FavoritesState>()(
  persist(
    (set, get) => {
      return {
        favorites: [],
        
        addFavorite: (product) => {
          set((state) => ({
            favorites: [...state.favorites, product]
          }));
          
          // Get the user's language from localStorage
          const language = localStorage.getItem('language') || 'en';
          
          if (language === 'fr') {
            toast({
              title: "Ajouté aux favoris",
              description: "Le produit a été ajouté à vos favoris"
            });
          } else if (language === 'ar') {
            toast({
              title: "تمت الإضافة إلى المفضلة",
              description: "تمت إضافة المنتج إلى قائمة المفضلة لديك"
            });
          } else {
            toast({
              title: "Added to favorites",
              description: "The product has been added to your favorites"
            });
          }
        },
        
        removeFavorite: (id) => {
          set((state) => ({
            favorites: state.favorites.filter(product => product.id !== id)
          }));
          
          // Get the user's language from localStorage
          const language = localStorage.getItem('language') || 'en';
          
          if (language === 'fr') {
            toast({
              title: "Retiré des favoris",
              description: "Le produit a été retiré de vos favoris",
              variant: "destructive"
            });
          } else if (language === 'ar') {
            toast({
              title: "تمت الإزالة من المفضلة",
              description: "تمت إزالة المنتج من قائمة المفضلة لديك",
              variant: "destructive"
            });
          } else {
            toast({
              title: "Removed from favorites",
              description: "The product has been removed from your favorites",
              variant: "destructive"
            });
          }
        },
        
        toggleFavorite: (product) => {
          const isFavorite = get().isFavorite(product.id);
          if (isFavorite) {
            get().removeFavorite(product.id);
          } else {
            get().addFavorite(product);
          }
        },
        
        isFavorite: (id) => get().favorites.some(product => product.id === id),
        
        clearFavorites: () => {
          set({ favorites: [] });
          
          // Get the user's language from localStorage
          const language = localStorage.getItem('language') || 'en';
          
          if (language === 'fr') {
            toast({
              title: "Favoris effacés",
              description: "Tous les favoris ont été supprimés",
              variant: "destructive"
            });
          } else if (language === 'ar') {
            toast({
              title: "تم مسح المفضلة",
              description: "تم حذف جميع العناصر المفضلة",
              variant: "destructive"
            });
          } else {
            toast({
              title: "Favorites cleared",
              description: "All favorites have been removed",
              variant: "destructive"
            });
          }
        },
        
        getFavoritesCount: () => get().favorites.length
      };
    },
    {
      name: 'favorites-storage',
    }
  )
);
