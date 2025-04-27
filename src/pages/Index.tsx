import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Cart from "@/components/Cart";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import PriceFilter from "@/components/PriceFilter";
import RatingFilter from "@/components/RatingFilter";
import SortOptions, { SortOption } from "@/components/SortOptions";
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
import { ShoppingBag, Trophy, Heart, Filter, Search, Store, Star } from "lucide-react";
import { useState, useMemo } from "react";
import { useFavorites } from "@/stores/FavoritesStore";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  // Filters state
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [minRating, setMinRating] = useState(0);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState<SortOption>("newest");
  const [isFilterDialogOpen, setIsFilterDialogOpen] = useState(false);
  const { favorites, isFavorite } = useFavorites();
  
  const categories = useMemo(() => 
    ["All", ...new Set(products.map(p => p.category))], 
    []
  );
  
  // Calculate min and max prices
  const minPrice = Math.min(...products.map(p => p.price));
  const maxPrice = Math.max(...products.map(p => p.price));

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategory(null);
    setPriceRange([minPrice, maxPrice]);
    setMinRating(0);
    setShowFavoritesOnly(false);
    setSearchQuery("");
    setSortOption("newest");
  };
  
  // Filter products based on all criteria
  const filteredProducts = useMemo(() => {
    let result = products.filter(product => {
      // Category filter
      const passesCategory = selectedCategory && selectedCategory !== "All" 
        ? product.category === selectedCategory 
        : true;
      
      // Price filter
      const passesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      // Rating filter
      const passesRating = (product.rating || 0) >= minRating;
      
      // Favorites filter
      const passesFavorites = showFavoritesOnly ? isFavorite(product.id) : true;
      
      // Search filter
      const passesSearch = searchQuery
        ? product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
  
      return passesCategory && passesPrice && passesRating && passesFavorites && passesSearch;
    });
    
    // Sort products
    switch (sortOption) {
      case "price-low":
        return result.sort((a, b) => a.price - b.price);
      case "price-high":
        return result.sort((a, b) => b.price - a.price);
      case "rating":
        return result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      case "newest":
      default:
        // Using id as proxy for newest since higher id = newer
        return result.sort((a, b) => b.id - a.id);
    }
  }, [products, selectedCategory, priceRange, minRating, showFavoritesOnly, searchQuery, sortOption, isFavorite]);

  // Active filter count
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (selectedCategory && selectedCategory !== "All") count++;
    if (priceRange[0] > minPrice || priceRange[1] < maxPrice) count++;
    if (minRating > 0) count++;
    if (showFavoritesOnly) count++;
    if (searchQuery) count++;
    return count;
  }, [selectedCategory, priceRange, minRating, showFavoritesOnly, searchQuery, minPrice, maxPrice]);

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
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

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1800')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100">
              Elevate Your Game
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 animate-fade-in delay-100">
              Premium sports equipment for champions. Discover our professional-grade gear.
            </p>
            <Button 
              size="lg" 
              className="animate-fade-in delay-200 bg-blue-600 hover:bg-blue-700"
              onClick={scrollToProducts}
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Shop Now
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Products Carousel */}
      <FeaturedCarousel />

      {/* Products Grid */}
      <div id="products-section" className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-0">
            {showFavoritesOnly ? "Mes Favoris" : (selectedCategory || "Tous les Produits")}
          </h2>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="md:hidden w-full">
              <Input 
                type="text" 
                placeholder="Rechercher..." 
                className="w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2">
              <SortOptions value={sortOption} onChange={setSortOption} />
              
              {activeFilterCount > 0 && (
                <Button 
                  variant="outline"
                  size="sm"
                  onClick={resetFilters}
                  className="hidden md:flex items-center"
                >
                  Réinitialiser
                  <Badge className="ml-2 bg-blue-100 text-blue-800 hover:bg-blue-200">{activeFilterCount}</Badge>
                </Button>
              )}
            </div>
            
            <div className="hidden md:flex flex-wrap gap-2">
              {categories.slice(0, 6).map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="animate-fade-in"
                  size="sm"
                >
                  {category}
                </Button>
              ))}
              {categories.length > 6 && (
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="h-9 px-3 text-sm">Plus</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-1 p-2">
                          {categories.slice(6).map((category) => (
                            <li key={category}>
                              <Button
                                variant={selectedCategory === category ? "default" : "ghost"}
                                className="w-full justify-start text-left"
                                size="sm"
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
              )}
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
            
            <RatingFilter
              minRating={minRating}
              onChange={setMinRating}
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
              
              {activeFilterCount > 0 && (
                <Button 
                  variant="outline"
                  className="w-full mt-4"
                  onClick={resetFilters}
                >
                  Réinitialiser les filtres
                </Button>
              )}
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
                  onClick={resetFilters}
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
            
            <RatingFilter
              minRating={minRating}
              onChange={setMinRating}
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
              onClick={resetFilters}
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
