import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

type LanguageSelectorProps = {
  selectedLanguages: string[];
  setSelectedLanguages: React.Dispatch<React.SetStateAction<string[]>>;
};

const LanguageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const LanguageSelector = ({ selectedLanguages, setSelectedLanguages }: LanguageSelectorProps) => {
  const [languages, setLanguages] = useState<any[]>([]);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/i18n/locales');
        const data = await response.json();
        setLanguages(data);

        // Устанавливаем все доступные языки активными по умолчанию
        const defaultLangs = data.map((lang: any) => lang.code);
        setSelectedLanguages(defaultLangs);
      } catch (error) {
        console.error('Error fetching languages:', error);
      }
    };

    fetchLanguages();
  }, [setSelectedLanguages]); // Добавил setSelectedLanguages в зависимости

  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedLanguages((prev) =>
      prev.includes(value) ? prev.filter((lang) => lang !== value) : [...prev, value]
    );
  };

  return (
    <LanguageList>
      {languages.map((language: any) => (
        <Label key={language.code}>
          <input
            type="checkbox"
            value={language.code}
            checked={selectedLanguages.includes(language.code)}
            onChange={handleLanguageChange}
          />
          {language.name}
        </Label>
      ))}
    </LanguageList>
  );
};

export default LanguageSelector;
