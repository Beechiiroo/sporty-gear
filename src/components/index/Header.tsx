
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Cart from "@/components/Cart";
import { Filter, Heart, Search, Store, Star, ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useFavorites } from "@/stores/FavoritesStore";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string | null;
  setSelectedCategory: (category: string) => void;
  showFavoritesOnly: boolean;
  setShowFavoritesOnly: (show: boolean) => void;
  setSortOption: (option: any) => void;
  activeFilterCount: number;
  setIsFilterDialogOpen: (isOpen: boolean) => void;
  categories: string[];
}

const Header = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  showFavoritesOnly,
  setShowFavoritesOnly,
  setSortOption,
  activeFilterCount,
  setIsFilterDialogOpen,
  categories,
}: HeaderProps) => {
  const { favorites } = useFavorites();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Trophy className="h-8 w-8 text-blue-600 animate-bounce" />
          <h1 className="text-2xl font-bold animate-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent bg-[length:400%] transition-all duration-500 hover:bg-[length:200%] hover:animate-text">
            SportyGear
          </h1>
        </div>
        
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Catégories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {categories.map((category) => (
                      <li key={category} className="row-span-3">
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-left font-normal"
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Boutique</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <div className="rounded-md bg-gradient-to-b from-blue-600 to-purple-600 p-4 text-white">
                      <Store className="h-8 w-8 mb-2" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Notre boutique
                      </div>
                      <p className="text-sm leading-tight text-white/90">
                        Découvrez notre sélection de produits de qualité pour tous les sportifs.
                      </p>
                    </div>
                    <div className="p-4">
                      <Button 
                        variant="outline" 
                        className="w-full justify-start text-left mb-2"
                        onClick={() => setShowFavoritesOnly(true)}
                      >
                        <Heart className="mr-2 h-4 w-4" />
                        Mes favoris
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start text-left mb-2"
                        onClick={() => setSortOption("rating")}
                      >
                        <Star className="mr-2 h-4 w-4" />
                        Meilleures notes
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start text-left"
                        onClick={() => setSortOption("newest")}
                      >
                        <ShoppingBag className="mr-2 h-4 w-4" />
                        Nouveautés
                      </Button>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center border rounded-full px-4 py-2 bg-white flex-grow mx-4 max-w-md">
          <Search className="h-4 w-4 text-gray-500 mr-2" />
          <Input 
            type="text" 
            placeholder="Rechercher des produits..."
            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 px-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="icon"
            className="relative"
            onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
          >
            <Heart className={`h-5 w-5 ${showFavoritesOnly ? 'fill-red-500 text-red-500' : ''}`} />
            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {favorites.length}
              </span>
            )}
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className={`md:hidden relative ${activeFilterCount > 0 ? 'border-blue-500' : ''}`}
            onClick={() => setIsFilterDialogOpen(true)}
          >
            <Filter className={`h-5 w-5 ${activeFilterCount > 0 ? 'text-blue-500' : ''}`} />
            {activeFilterCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </Button>
          
          <Cart />
        </div>
      </div>
    </header>
  );
};

// Need to add Trophy import here
import { Trophy } from "lucide-react";

export default Header;
