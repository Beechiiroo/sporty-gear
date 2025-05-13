
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
  ourStoryTitle: string;
  ourStoryContent: string;
  ourMission: string;
  ourVision: string;
  ourTeam: string;
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
    chatbotGreeting: "Hello! I'm SportyGear's virtual assistant. How may I help you today?",
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
    ourStoryTitle: "Our Story",
    ourStoryContent: "Founded in 2010, SportyGear began with a simple mission: to provide high-quality sports equipment accessible to everyone. What started as a small shop in downtown has grown into a global brand trusted by amateur enthusiasts and professional athletes alike.",
    ourMission: "Our mission is to empower athletes of all levels by providing them with the highest quality equipment that enhances their performance and enjoyment of sports.",
    ourVision: "To be the world's most trusted sports equipment provider, known for innovation, quality, and customer satisfaction.",
    ourTeam: "Our Team",
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
    chatbotGreeting: "Bonjour ! Je suis l'assistant virtuel de SportyGear. Comment puis-je vous aider aujourd'hui ?",
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
    ourStoryTitle: "Notre Histoire",
    ourStoryContent: "Fondée en 2010, SportyGear a débuté avec une mission simple : fournir des équipements sportifs de haute qualité accessibles à tous. Ce qui a commencé comme une petite boutique au centre-ville est devenu une marque mondiale reconnue tant par les amateurs que par les athlètes professionnels.",
    ourMission: "Notre mission est de permettre aux athlètes de tous niveaux de se dépasser en leur fournissant des équipements de la plus haute qualité qui améliorent leurs performances et leur plaisir de la pratique sportive.",
    ourVision: "Devenir le fournisseur d'équipements sportifs le plus fiable au monde, reconnu pour son innovation, sa qualité et la satisfaction de ses clients.",
    ourTeam: "Notre Équipe",
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
  },
  ar: {
    categories: "فئات",
    shop: "تسوق",
    search: "ابحث عن منتجات...",
    favorites: "المفضلة",
    bestRated: "الأعلى تقييمًا",
    newItems: "منتجات جديدة",
    about: "حول",
    ourStory: "قصتنا",
    contact: "اتصل بنا",
    blog: "المدونة",
    faq: "الأسئلة الشائعة",
    portfolio: "معرض الأعمال",
    chat: "تحدث معنا",
    chatPlaceholder: "اكتب رسالتك...",
    chatbotGreeting: "مرحبًا! أنا المساعد الافتراضي لـ SportyGear. كيف يمكنني مساعدتك اليوم؟",
    toggleDarkMode: "تبديل الوضع المظلم",
    relatedProducts: "منتجات ذات صلة",
    productNotFound: "المنتج غير موجود",
    returnHome: "العودة إلى الصفحة الرئيسية",
    description: "الوصف",
    addToCart: "أضف إلى السلة",
    noProductsFound: "لم يتم العثور على منتجات",
    adjustFilters: "حاول ضبط عوامل التصفية أو استعلام البحث الخاص بك.",
    resetFilters: "إعادة ضبط الفلاتر",
    addedToCart: "تمت الإضافة إلى السلة",
    hasBeenAddedToCart: "تمت إضافته إلى سلة التسوق الخاصة بك",
    featuredProduct: "منتج مميز",
    removeFromFavorites: "إزالة من المفضلة",
    addToFavorites: "أضف إلى المفضلة",
    languageChanged: "تم تغيير اللغة",
    selected: "تم اختيار",
    heroTitle: "ارتقِ بلعبتك",
    heroDescription: "معدات رياضية فاخرة للأبطال. اكتشف معداتنا ذات الجودة الاحترافية مع خصومات استثنائية.",
    shopNow: "تسوق الآن",
    discoverOurStory: "اكتشف قصتنا",
    ourStoryTitle: "قصتنا",
    ourStoryContent: "تأسست SportyGear في عام 2010 بمهمة بسيطة: توفير معدات رياضية عالية الجودة يمكن للجميع الوصول إليها. ما بدأ كمتجر صغير في وسط المدينة تحول إلى علامة تجارية عالمية يثق بها الهواة والرياضيون المحترفون على حد سواء.",
    ourMission: "مهمتنا هي تمكين الرياضيين من جميع المستويات من خلال تزويدهم بأعلى جودة من المعدات التي تعزز أدائهم واستمتاعهم بالرياضة.",
    ourVision: "أن نكون مزود المعدات الرياضية الأكثر ثقة في العالم، المعروف بالابتكار والجودة ورضا العملاء.",
    ourTeam: "فريقنا",
    footer: {
      description: "معدات رياضية احترافية بأفضل جودة وضمان السعر.",
      categories: "فئات",
      about: "من نحن",
      developer: "طوّر بواسطة فريق SportyGear",
      rights: "© 2025 SportyGear. جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      shipping: "سياسة الشحن",
      returns: "سياسة الإرجاع"
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
