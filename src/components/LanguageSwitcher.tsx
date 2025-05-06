
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const { toast } = useToast();

  const toggleLanguage = () => {
    const newLang = language === 'fr' ? 'en' : 'fr';
    setLanguage(newLang);
    
    toast({
      title: newLang === 'fr' ? 'Langue changée' : 'Language changed',
      description: newLang === 'fr' ? 'Français sélectionné' : 'English selected',
      duration: 3000,
    });
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="px-2 hover:bg-gray-100 dark:hover:bg-gray-800 border-gray-300"
    >
      {language === 'fr' ? 'EN' : 'FR'}
    </Button>
  );
};

export default LanguageSwitcher;
