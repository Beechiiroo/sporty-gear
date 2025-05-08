
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();
  const { toast } = useToast();

  const toggleLanguage = () => {
    const newLang = language === 'fr' ? 'en' : 'fr';
    setLanguage(newLang);
    
    toast({
      title: t('languageChanged'),
      description: `${newLang === 'fr' ? 'Français' : 'English'} ${t('selected')}`,
      duration: 3000,
    });

    // Log the language change to help with debugging
    console.log(`Language changed to: ${newLang}`);
    
    // Force refresh the UI to ensure all translations are applied
    window.dispatchEvent(new Event('language-changed'));
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="px-2 hover:bg-gray-100 dark:hover:bg-gray-800 border-gray-300 flex items-center gap-1"
      title={language === 'fr' ? 'Switch to English' : 'Passer au Français'}
    >
      <Globe className="h-4 w-4" />
      {language === 'fr' ? 'EN' : 'FR'}
    </Button>
  );
};

export default LanguageSwitcher;
