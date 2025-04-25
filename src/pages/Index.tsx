
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Cart from "@/components/Cart";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import PriceFilter from "@/components/PriceFilter";
import Footer from "@/components/Footer";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Trophy, Heart, Filter, Search } from "lucide-react";
import { useState } from "react";
import { useFavorites } from "@/stores/FavoritesStore";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterDialogOpen, setIsFilterDialogOpen] = useState(false);
  const { favorites, isFavorite } = useFavorites();
  
  const categories = ["All", ...new Set(products.map(p => p.category))];
  
  // Calculate min and max prices
  const minPrice = Math.min(...products.map(p => p.price));
  const maxPrice = Math.max(...products.map(p => p.price));

  // Filter products based on all criteria
  const filteredProducts = products.filter(product => {
    // Category filter
    const passesCategory = selectedCategory && selectedCategory !== "All" 
      ? product.category === selectedCategory 
      : true;
    
    // Price filter
    const passesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    // Favorites filter
    const passesFavorites = showFavoritesOnly ? isFavorite(product.id) : true;
    
    // Search filter
    const passesSearch = searchQuery
      ? product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    return passesCategory && passesPrice && passesFavorites && passesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Trophy className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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
              className="md:hidden"
              onClick={() => setIsFilterDialogOpen(true)}
            >
              <Filter className="h-5 w-5" />
            </Button>
            
            <Cart />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1800')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold animate-fade-in">
              Elevate Your Game
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 animate-fade-in delay-100">
              Premium sports equipment for champions. Discover our professional-grade gear.
            </p>
            <Button size="lg" className="animate-fade-in delay-200">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Shop Now
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Products Carousel */}
      <FeaturedCarousel />

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-0">
            {showFavoritesOnly ? "Mes Favoris" : (selectedCategory || "Tous les Produits")}
          </h2>
          
          <div className="flex items-center gap-4">
            <div className="md:hidden w-full">
              <Input 
                type="text" 
                placeholder="Rechercher..." 
                className="w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="hidden md:flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="animate-fade-in"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters - Desktop */}
          <div className="hidden lg:block space-y-6">
            <PriceFilter
              minPrice={minPrice}
              maxPrice={maxPrice}
              currentMin={priceRange[0]}
              currentMax={priceRange[1]}
              onChange={setPriceRange}
            />
            
            <div className="p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-md border border-gray-100">
              <h3 className="font-semibold mb-4">Filtres</h3>
              
              <div className="flex items-center justify-between">
                <span>Favoris uniquement</span>
                <Switch 
                  checked={showFavoritesOnly} 
                  onCheckedChange={setShowFavoritesOnly} 
                />
              </div>
            </div>
          </div>
          
          {/* Products */}
          <div className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12 bg-white/80 rounded-lg">
                <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium">Aucun produit trouvé</h3>
                <p className="text-gray-500">Essayez d'ajuster vos filtres ou votre recherche.</p>
                <Button 
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSelectedCategory(null);
                    setPriceRange([minPrice, maxPrice]);
                    setShowFavoritesOnly(false);
                    setSearchQuery("");
                  }}
                >
                  Réinitialiser les filtres
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="animate-fade-in">
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Filter Dialog for Mobile */}
      <Dialog open={isFilterDialogOpen} onOpenChange={setIsFilterDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Filtres</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-medium">Catégories</h3>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      setSelectedCategory(category);
                    }}
                    className="text-sm h-8"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            
            <PriceFilter
              minPrice={minPrice}
              maxPrice={maxPrice}
              currentMin={priceRange[0]}
              currentMax={priceRange[1]}
              onChange={setPriceRange}
            />
            
            <div className="flex items-center justify-between">
              <span>Favoris uniquement</span>
              <Switch 
                checked={showFavoritesOnly} 
                onCheckedChange={setShowFavoritesOnly} 
              />
            </div>
            
            <Button className="w-full" onClick={() => setIsFilterDialogOpen(false)}>
              Appliquer les filtres
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => {
                setSelectedCategory(null);
                setPriceRange([minPrice, maxPrice]);
                setShowFavoritesOnly(false);
                setSearchQuery("");
              }}
            >
              Réinitialiser
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
