import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Icon, IconText, CombinedIcon } from'./IconStyles';
import CheckboxFilter from '@/components/MainComponents/CheckboxFilter';

const HideOnWideScreen = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.wideScreen}) {
    display: none;
  }
`;

const DropdownList = styled.div<{ isOpen: boolean }>`
  position: absolute;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  background: white;

  transform: translateX(-30%);
  border-radius: 30px;

  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s, visibility 0.3s;

  @media (min-width: ${({ theme }) => theme.breakpoints.wideScreen}) {
    top: 100%;   // Position below icons Icons div on mobile screens
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileScreen}) {
    bottom: 100%;  // Position above icons Icons div on mobile screens
  }
`;

const Icons: React.FC = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleFilters = () => setIsFiltersOpen((prev) => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsFiltersOpen(false);
    }
  };


  useEffect(() => {
    if (isFiltersOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFiltersOpen]);

  return (
    <>
      <HideOnWideScreen>
        <div
          ref={dropdownRef}
          tabIndex={0}
        >
          <CombinedIcon onClick={toggleFilters}>
            <Icon>menu</Icon>
            <IconText>Menu</IconText>
          </CombinedIcon>
          <DropdownList isOpen={isFiltersOpen}>
            <CheckboxFilter />
          </DropdownList>
        </div>
      </HideOnWideScreen>
      <CombinedIcon>
        <Icon>account_circle</Icon>
        <IconText>Log In</IconText>
      </CombinedIcon>
      <CombinedIcon>
        <Icon>favorite</Icon>
        <IconText>Liked</IconText>
      </CombinedIcon>
      <CombinedIcon>
        <Icon>shopping_cart</Icon>
        <IconText>Cart</IconText>
      </CombinedIcon>
    </>
  );
};

export default Icons;
