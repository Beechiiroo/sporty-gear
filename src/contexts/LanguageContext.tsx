
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// You need to add the dark mode translation to your existing translations
interface TranslationValues {
  categories: string;
  shop: string;
  search: string;
  favorites: string;
  bestRated: string;
  newItems: string;
  about: string;
  ourStory: string;
  contact: string;
  blog: string;
  faq: string;
  portfolio: string;
  chat: string;
  chatPlaceholder: string;
  chatbotGreeting: string;
  toggleDarkMode: string;
  footer: FooterTranslations;
  relatedProducts: string;
  productNotFound: string;
  returnHome: string;
  description: string;
  addToCart: string;
  noProductsFound: string;
  adjustFilters: string;
  resetFilters: string;
  addedToCart: string;
  hasBeenAddedToCart: string;
  featuredProduct: string;
  removeFromFavorites: string;
  addToFavorites: string;
  languageChanged: string;
  selected: string;
  heroTitle: string;
  heroDescription: string;
  shopNow: string;
  discoverOurStory: string;
}

interface FooterTranslations {
  description: string;
  categories: string;
  about: string;
  developer: string;
  rights: string;
  privacy: string;
  terms: string;
  shipping: string;
  returns: string;
}

interface LanguageContextProps {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

const translations = {
  en: {
    categories: "Categories",
    shop: "Shop",
    search: "Search for products...",
    favorites: "Favorites",
    bestRated: "Best Rated",
    newItems: "New Items",
    about: "About",
    ourStory: "Our Story",
    contact: "Contact",
    blog: "Blog",
    faq: "FAQ",
    portfolio: "Portfolio",
    chat: "Chat with us",
    chatPlaceholder: "Type your message...",
    chatbotGreeting: "Hello! How can I help you today?",
    toggleDarkMode: "Toggle Dark Mode",
    relatedProducts: "Related Products",
    productNotFound: "Product not found",
    returnHome: "Return to Home",
    description: "Description",
    addToCart: "Add to Cart",
    noProductsFound: "No products found",
    adjustFilters: "Try adjusting your filters or search query.",
    resetFilters: "Reset filters",
    addedToCart: "Added to cart",
    hasBeenAddedToCart: "has been added to your cart",
    featuredProduct: "Featured Product",
    removeFromFavorites: "Remove from favorites",
    addToFavorites: "Add to favorites",
    languageChanged: "Language changed",
    selected: "selected",
    heroTitle: "Elevate Your Game",
    heroDescription: "Premium sports equipment for champions. Discover our professional quality gear with exceptional discounts.",
    shopNow: "Shop Now",
    discoverOurStory: "Discover Our Story",
    footer: {
      description: "Professional sports equipment with the best quality and price guarantee.",
      categories: "Categories",
      about: "About Us",
      developer: "Developed by SportyGear Team",
      rights: "© 2025 SportyGear. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      shipping: "Shipping Policy",
      returns: "Returns Policy"
    }
  },
  fr: {
    categories: "Catégories",
    shop: "Boutique",
    search: "Rechercher des produits...",
    favorites: "Favoris",
    bestRated: "Les Mieux Notés",
    newItems: "Nouveautés",
    about: "À Propos",
    ourStory: "Notre Histoire",
    contact: "Contact",
    blog: "Blog",
    faq: "FAQ",
    portfolio: "Portfolio",
    chat: "Discuter avec nous",
    chatPlaceholder: "Tapez votre message...",
    chatbotGreeting: "Bonjour ! Comment puis-je vous aider aujourd'hui ?",
    toggleDarkMode: "Mode Sombre",
    relatedProducts: "Produits Similaires",
    productNotFound: "Produit non trouvé",
    returnHome: "Retour à l'accueil",
    description: "Description",
    addToCart: "Ajouter au panier",
    noProductsFound: "Aucun produit trouvé",
    adjustFilters: "Essayez d'ajuster vos filtres ou votre recherche.",
    resetFilters: "Réinitialiser les filtres",
    addedToCart: "Ajouté au panier",
    hasBeenAddedToCart: "a été ajouté à votre panier",
    featuredProduct: "Produit Vedette",
    removeFromFavorites: "Retirer des favoris",
    addToFavorites: "Ajouter aux favoris",
    languageChanged: "Langue changée",
    selected: "sélectionné",
    heroTitle: "Élevez Votre Jeu",
    heroDescription: "Équipement sportif premium pour les champions. Découvrez notre matériel de qualité professionnelle avec des remises exceptionnelles.",
    shopNow: "Acheter Maintenant",
    discoverOurStory: "Découvrir Notre Histoire",
    footer: {
      description: "Équipement sportif professionnel avec la meilleure qualité et garantie de prix.",
      categories: "Catégories",
      about: "À Propos de Nous",
      developer: "Développé par l'équipe SportyGear",
      rights: "© 2025 SportyGear. Tous droits réservés.",
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation",
      shipping: "Politique d'Expédition",
      returns: "Politique de Retours"
    }
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    // Force a render on language change
    const event = new Event('language-changed');
    window.dispatchEvent(event);
  }, [language]);

  // Type-safe translation function
  const t = (key: string): string => {
    try {
      // Handle nested keys like 'footer.description'
      if (key.includes('.')) {
        const [section, nestedKey] = key.split('.');
        const translationObj = translations[language as keyof typeof translations];
        const sectionContent = translationObj[section as keyof TranslationValues];
        
        if (sectionContent && typeof sectionContent === 'object') {
          const nestedValue = (sectionContent as Record<string, string>)[nestedKey];
          return typeof nestedValue === 'string' ? nestedValue : key;
        }
        return key;
      }
      
      // Handle regular keys
      const translationObj = translations[language as keyof typeof translations];
      const translation = translationObj[key as keyof TranslationValues];
      return typeof translation === 'string' ? translation : key;
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error);
      return key; // Fallback to the key itself
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
