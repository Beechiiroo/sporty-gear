
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { toast } from "@/components/ui/use-toast";
import useSound from '@/hooks/useSound';

interface FavoritesState {
  favorites: number[];
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
  toggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
  clearFavorites: () => void;
  getFavoritesCount: () => number;
}

export const useFavorites = create<FavoritesState>()(
  persist(
    (set, get) => {
      // Initialize sound outside of the component to avoid React hooks rules violations
      const { playFavoriteSound } = useSound();
      
      return {
        favorites: [],
        
        addFavorite: (id) => {
          set((state) => ({
            favorites: [...state.favorites, id]
          }));
          playFavoriteSound();
          toast({
            title: "Ajouté aux favoris",
            description: "Le produit a été ajouté à vos favoris"
          });
        },
        
        removeFavorite: (id) => {
          set((state) => ({
            favorites: state.favorites.filter(favId => favId !== id)
          }));
          toast({
            title: "Retiré des favoris",
            description: "Le produit a été retiré de vos favoris",
            variant: "destructive"
          });
        },
        
        toggleFavorite: (id) => {
          const isFavorite = get().isFavorite(id);
          if (isFavorite) {
            get().removeFavorite(id);
          } else {
            get().addFavorite(id);
          }
        },
        
        isFavorite: (id) => get().favorites.includes(id),
        
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
