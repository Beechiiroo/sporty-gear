
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Cart from "@/components/Cart";
import { Filter, Heart, Search, Store, Star, ShoppingBag, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useFavorites } from "@/stores/FavoritesStore";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import DarkModeToggle from "@/components/DarkModeToggle";
import { useLanguage } from "@/contexts/LanguageContext";
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
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700">
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
                <NavigationMenuTrigger className="dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">{t('categories')}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] dark:bg-gray-800">
                    {categories.map((category) => (
                      <li key={category} className="row-span-3">
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-left font-normal dark:text-white dark:hover:bg-gray-700"
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
                <NavigationMenuTrigger className="dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">{t('shop')}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] dark:bg-gray-800">
                    <div className="rounded-md bg-gradient-to-b from-blue-600 to-purple-600 p-4 text-white">
                      <Store className="h-8 w-8 mb-2" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        {t('shop')}
                      </div>
                      <p className="text-sm leading-tight text-white/90">
                        {t('footer.description')}
                      </p>
                    </div>
                    <div className="p-4">
                      <Button 
                        variant="outline" 
                        className="w-full justify-start text-left mb-2 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600"
                        onClick={() => setShowFavoritesOnly(true)}
                      >
                        <Heart className="mr-2 h-4 w-4" />
                        {t('favorites')}
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start text-left mb-2 dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600"
                        onClick={() => setSortOption("rating")}
                      >
                        <Star className="mr-2 h-4 w-4" />
                        {t('bestRated')}
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start text-left dark:text-white dark:bg-gray-700 dark:hover:bg-gray-600"
                        onClick={() => setSortOption("newest")}
                      >
                        <ShoppingBag className="mr-2 h-4 w-4" />
                        {t('newItems')}
                      </Button>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center border rounded-full px-4 py-2 bg-white dark:bg-gray-800 dark:border-gray-600 flex-grow mx-4 max-w-md">
          <Search className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-2" />
          <Input 
            type="text" 
            placeholder={t('search')}
            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 px-0 dark:bg-gray-800 dark:text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-2">
          <DarkModeToggle />
          <LanguageSwitcher />
          
          <Button 
            variant="outline" 
            size="icon"
            className="relative dark:bg-gray-800 dark:border-gray-600 dark:text-white"
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
            className={`md:hidden relative ${activeFilterCount > 0 ? 'border-blue-500' : ''} dark:bg-gray-800 dark:border-gray-600 dark:text-white`}
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

export default Header;
