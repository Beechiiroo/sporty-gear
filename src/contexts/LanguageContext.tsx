
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
