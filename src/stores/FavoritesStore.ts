
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
          toast({
            title: "Ajouté aux favoris",
            description: "Le produit a été ajouté à vos favoris"
          });
        },
        
        removeFavorite: (id) => {
          set((state) => ({
            favorites: state.favorites.filter(product => product.id !== id)
          }));
          toast({
            title: "Retiré des favoris",
            description: "Le produit a été retiré de vos favoris",
            variant: "destructive"
          });
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
          toast({
            title: "Favoris effacés",
            description: "Tous les favoris ont été supprimés",
            variant: "destructive"
          });
        },
        
        getFavoritesCount: () => get().favorites.length
      };
    },
    {
      name: 'favorites-storage',
    }
  )
);
