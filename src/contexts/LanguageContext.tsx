
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define available languages
export type Language = 'fr' | 'en';

// Define translations structure
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
  send: string;
  chatbotGreeting: string;
  footer: FooterTranslations;
}

// Define the translations object type
type TranslationsType = {
  [key in Language]: TranslationValues;
};

// Define translations
export const translations: TranslationsType = {
  fr: {
    categories: 'Catégories',
    shop: 'Boutique',
    search: 'Rechercher des produits...',
    favorites: 'Mes favoris',
    bestRated: 'Meilleures notes',
    newItems: 'Nouveautés',
    about: 'À Propos',
    ourStory: 'Notre Histoire',
    contact: 'Contact',
    blog: 'Blog',
    faq: 'FAQ',
    portfolio: 'Portfolio',
    chat: 'Discuter',
    chatPlaceholder: 'Posez-nous une question...',
    send: 'Envoyer',
    chatbotGreeting: 'Bonjour! Comment puis-je vous aider aujourd\'hui?',
    footer: {
      description: 'Votre boutique en ligne pour tout équipement sportif de qualité professionnelle.',
      categories: 'Catégories',
      about: 'À Propos',
      developer: 'Développeur',
      rights: 'Tous droits réservés.',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions d\'utilisation',
      shipping: 'Livraisons',
      returns: 'Retours'
    }
  },
  en: {
    categories: 'Categories',
    shop: 'Shop',
    search: 'Search for products...',
    favorites: 'My favorites',
    bestRated: 'Best rated',
    newItems: 'New arrivals',
    about: 'About',
    ourStory: 'Our Story',
    contact: 'Contact',
    blog: 'Blog',
    faq: 'FAQ',
    portfolio: 'Portfolio',
    chat: 'Chat',
    chatPlaceholder: 'Ask us a question...',
    send: 'Send',
    chatbotGreeting: 'Hello! How can I help you today?',
    footer: {
      description: 'Your online store for all professional quality sports equipment.',
      categories: 'Categories',
      about: 'About',
      developer: 'Developer',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      shipping: 'Shipping',
      returns: 'Returns'
    }
  }
};

// Create the context
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, section?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Create a provider component
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('fr');

  // Helper function to get translations
  const t = (key: string, section?: string): string => {
    if (section) {
      // Type assertion to handle nested properties safely
      const sectionObj = translations[language][section as keyof TranslationValues];
      if (sectionObj && typeof sectionObj === 'object' && key in sectionObj) {
        return (sectionObj as Record<string, string>)[key] || key;
      }
      return key;
    }
    // Direct access to top-level translations
    return (translations[language][key as keyof TranslationValues] as string) || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Create a custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
