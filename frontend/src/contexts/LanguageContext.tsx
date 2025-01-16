import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type LanguageContextType = {
  language: string;
  translations: any;
  changeLanguage: (language: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

type LanguageProviderProps = {
  children: ReactNode;
};

const translations = {
  EN: require('../locales/en.json'),
  FI: require('../locales/fi.json'),
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState('EN');
  const [translationsData, setTranslationsData] = useState(translations[language]);

  useEffect(() => {
    setTranslationsData(translations[language]);
    localStorage.setItem('language', language);
  }, [language]);

  const changeLanguage = (language: string) => {
    setLanguage(language);
  };

  return (
    <LanguageContext.Provider value={{ language, translations: translationsData, changeLanguage }}>
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
