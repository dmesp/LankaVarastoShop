import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Icons from '../common/Icons/NavIcons';
import SearchField from './SearchField';
import LanguageDropDown from './LanguageDropDown'; 
import { Icon, IconText, CombinedIcon } from '../common/Icons/IconStyles';

const flexCenter = `
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledHeader = styled.header`
  ${flexCenter}
  margin-bottom: 50px;
  background: ${({ theme }) => theme.appBgColor};
`;

const HeaderTop = styled.div`
  ${flexCenter}
  column-gap: 20px;
  height: 70px;
  width: 100%;
  max-width: 1500px;
  padding: 5px 20px;
  font-size: 30px;

  @media (max-width: 950px) {
    font-size: 25px;
  }
`;

const HeaderLeft = styled.div`
  ${flexCenter}
  flex: 1;
  height: 100%;

`;

const HeaderCenter = styled.div`
  ${flexCenter}
  flex: 1;
  height: 100%;
  width: fit-content;
`;

const LogoWrapper = styled.div`
  ${flexCenter}
  width: fit-content;
  height: 100%;
  font-family: "Updock", serif;
  font-size: 55px;

  @media (max-width: 950px) {
    font-size: 50px;
  }
`;

const HeaderRight = styled.div`
  ${flexCenter}
  flex: 1;
  gap: clamp(20px, 2vw, 30px);
  height: 100%;
`;

const LanguageChange = styled.div`
  ${flexCenter}
`;

const IconsWrapper = styled.div`
  ${flexCenter}
  gap: clamp(25px, 2vw, 30px);
`;

const DesktopHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('FI');
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleToggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelectLanguage = (language: string) => {
    setSelectedLanguage(language);
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
    <StyledHeader>
      <HeaderTop>
        <HeaderLeft>
          <IconsWrapper>
            <Icons />
          </IconsWrapper>
        </HeaderLeft>
        <HeaderCenter>
          <LogoWrapper>
            <p>LankaVarasto</p>
          </LogoWrapper>
        </HeaderCenter>

        <HeaderRight>
          <SearchField />
          <LanguageDropDown/>
        </HeaderRight>
      </HeaderTop>
    </StyledHeader>
  );
};

export default DesktopHeader;
