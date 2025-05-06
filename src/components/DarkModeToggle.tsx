
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useDarkMode } from '@/contexts/DarkModeContext';
import { useLanguage } from '@/contexts/LanguageContext';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const { t } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Sun className="h-4 w-4" />
      <Switch
        checked={isDarkMode}
        onCheckedChange={toggleDarkMode}
        aria-label={t('toggleDarkMode')}
      />
      <Moon className="h-4 w-4" />
    </div>
  );
};

export default DarkModeToggle;
