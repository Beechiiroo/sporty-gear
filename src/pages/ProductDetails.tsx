
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ShoppingCart, Star, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import RelatedProducts from '@/components/RelatedProducts';
import ProductReviews from '@/components/ProductReviews';
import { useCart } from '@/stores/CartStore';
import { useFavorites } from '@/stores/FavoritesStore';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { toast } from '@/hooks/use-toast';

const mockReviews = [
  {
    id: 1,
    userId: 1,
    userName: "Sophie Martin",
    rating: 5,
    comment: "Excellent product, exactly what I was looking for!",
    date: "2024-04-15"
  },
  {
    id: 2,
    userId: 2,
    userName: "Lucas Bernard",
    rating: 4,
    comment: "Very good quality, but shipping took a bit longer than expected.",
    date: "2024-04-10"
  }
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const addToCart = useCart(state => state.addItem);
  const { toggleFavorite, isFavorite } = useFavorites();
  const { language, t } = useLanguage();

  const productId = Number(id);
  const product = products.find(p => p.id === productId);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">
          {t('productNotFound')}
        </h1>
        <Button onClick={() => navigate('/')} variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t('returnHome')}
        </Button>
      </div>
    );
  }

  const localizedName = product.name[language as keyof typeof product.name] || product.name.en;
  const isFav = isFavorite(product.id);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: localizedName,
      price: product.price,
      image: product.image,
      quantity: 1
    });
    
    toast({
      title: t('addedToCart'),
      description: `${localizedName} ${t('hasBeenAddedToCart')}`,
      duration: 3000,
    });
  };

  const handleToggleFavorite = () => {
    toggleFavorite({
      id: product.id,
      name: localizedName,
      price: product.price,
      image: product.image,
      category: product.category,
      rating: product.rating
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <Button onClick={() => navigate('/')} variant="outline" className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        {t('returnHome')}
      </Button>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative rounded-lg overflow-hidden border border-gray-200">
          <AspectRatio ratio={1/1} className="bg-gray-100">
            <img
              src={product.image}
              alt={localizedName}
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-sm font-medium text-blue-600">{product.category}</p>
            <h1 className="text-3xl font-bold mt-2">{localizedName}</h1>
          </div>

          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
            <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
          </div>

          <p className="text-3xl font-bold text-blue-600">
            {new Intl.NumberFormat(language === 'fr' ? 'fr-FR' : 'en-US', {
              style: 'currency',
              currency: language === 'fr' ? 'EUR' : 'USD'
            }).format(product.price)}
          </p>

          <div className="space-y-4">
            <h3 className="font-semibold">{t('description')}</h3>
            <p className="text-gray-600">
              {language === 'fr' 
                ? `Ce ${localizedName.toLowerCase()} premium est conçu pour une performance et une durabilité optimales. Parfait pour les athlètes professionnels et les passionnés.` 
                : `This premium ${localizedName.toLowerCase()} is designed for optimal performance and durability. Perfect for both professional athletes and enthusiasts.`}
            </p>
          </div>

          <div className="flex gap-4">
            <Button onClick={handleAddToCart} className="flex-1">
              <ShoppingCart className="mr-2 h-4 w-4" />
              {t('addToCart')}
            </Button>
            <Button 
              variant={isFav ? "destructive" : "outline"} 
              size="icon"
              onClick={handleToggleFavorite}
              title={isFav ? t('removeFromFavorites') : t('addToFavorites')}
            >
              <Heart className={`h-5 w-5 ${isFav ? 'fill-current' : ''}`} />
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        <ProductReviews reviews={mockReviews} />
        <RelatedProducts currentProductId={product.id} category={product.category} />
      </div>
    </div>
  );
};

export default ProductDetails;
