import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { USAFlag, FinlandFlag } from '../common/Icons/Flags';
import { useLanguage } from '../../contexts/LanguageContext';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.div`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const DropdownList = styled.div`
  color: ${({ theme }) => theme.appTextColor};
  font-size: 20px;
  position: absolute;
  background-color: ${({ theme }) => theme.appBgColor};
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
  margin-top: 5px;
  max-width: fit-content;
  left: 50%;
  transform: translateX(-50%);
`;

const DropdownItem = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? '#d3f9d8' : 'transparent')};
  &:hover {
    background-color: #f1f1f1;
  }
`;

const LanguageDropDown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, changeLanguage, translations } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  // Используем useEffect только для первоначальной загрузки языка, если это необходимо
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    const browserLanguage = navigator.language.startsWith('fi') ? 'FI' : 'EN';
    
    // Если язык не был найден в localStorage, устанавливаем язык по умолчанию
    if (!storedLanguage) {
      changeLanguage(browserLanguage);
    }
  }, [changeLanguage]); // Этот useEffect сработает только один раз при монтировании компонента

  const handleToggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelectLanguage = (selectedLanguage: string) => {
    changeLanguage(selectedLanguage);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={handleToggleDropdown}>
        {language === 'FI' ? <FinlandFlag /> : <USAFlag />}
      </DropdownButton>
      {isOpen && (
        <DropdownList>
          <DropdownItem
            onClick={() => handleSelectLanguage('FI')}
            isSelected={language === 'FI'}
          >
            <FinlandFlag />
          </DropdownItem>
          <DropdownItem
            onClick={() => handleSelectLanguage('EN')}
            isSelected={language === 'EN'}
          >
            <USAFlag />
          </DropdownItem>
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default LanguageDropDown;
