import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type Language = 'EN' | 'FI';

type Translations = Record<Language, Record<string, string>>;

type LanguageContextType = {
  language: Language;
  translations: Record<string, string>;
  changeLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

type LanguageProviderProps = {
  children: ReactNode;
};

const translations: Translations = {
  EN: require('../locales/en.json'),
  FI: require('../locales/fi.json'),
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem('language') as Language) || 'EN';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, translations: translations[language], changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
