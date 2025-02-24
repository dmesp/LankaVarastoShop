import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Icon, IconText, CombinedIcon } from'./IconStyles';
import CheckboxFilter from '@/components/MainComponents/Popups/CheckboxFilter';
import useOutsideClick from '@/hooks/useOutsideClick'; 

const HideOnWideScreen = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.wideScreen}) {
    display: none;
  }
`;

const Popup = styled.div<{ isVisible: boolean }>`
  position: absolute;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 1);
  z-index: 10;
  background: white;
  border-radius: 30px;
  overflow-y: auto;
  border: 2px solid ${({ theme }) => theme.appBgColor};
  transition: ${({ theme }) => theme.popupWindowAnimation};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};

  top: 85px; /* Places it below the icon */
  transform: translateX(20%);


  @media (max-width: ${({ theme }) => theme.breakpoints.mobileScreen}) {
    top: -75vh; 
    bottom: 100%; /* Places it above the icon */
    transform: translateY(-10px); /* Optional: adjust based on how far above the icon you want */
  }
`;

const FiltersPopup = styled(Popup)`
  width: 300px;
  height: 75vh;
`;

const LikesPopup = styled(Popup)`
  min-width: 30vw;
  width: fit-content;
  max-width: 50vw;
  height: 70vh;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileScreen}) {
    min-width: 95vw;
    width: 95vw;
    height: 75vh;
  }
`;



const Icons = () => {
  const [isFiltersPopupVisible, setIsFiltersPopupVisible] = useState(false);
  const [isLikedPopupVisible, setIsLikedPopupVisible] = useState(false);

  const filtersRef = useRef<HTMLDivElement>(null);
  const likedRef = useRef<HTMLDivElement>(null);
  const filtersIconRef = useRef<HTMLDivElement>(null); // Новый ref для фильтров
  const likedIconRef = useRef<HTMLDivElement>(null); 

  useOutsideClick(filtersRef, () => setIsFiltersPopupVisible(false), filtersIconRef);
  useOutsideClick(likedRef, () => setIsLikedPopupVisible(false), likedIconRef);

  const openPopup = (popup: 'filters' | 'liked') => {
    if (popup === 'filters' ) {
      setIsFiltersPopupVisible(prev => !prev);
    } else if (popup === 'liked' ) {
      setIsLikedPopupVisible(prev => !prev);
    }
  };

  useEffect(() => {
    const isAnyPopupOpen = isFiltersPopupVisible || isLikedPopupVisible;
    document.body.style.overflow = isAnyPopupOpen ? 'hidden' : ''; 
    return () => {
      document.body.style.overflow = ''; 
    };
  }, [isFiltersPopupVisible, isLikedPopupVisible]);

  return (
    <>
      <HideOnWideScreen>
        <CombinedIcon ref={filtersIconRef} onClick={() => openPopup('filters')}>
          <Icon>menu</Icon>
          <IconText>Menu</IconText>
        </CombinedIcon>
      </HideOnWideScreen>
      <FiltersPopup ref={filtersRef} isVisible={isFiltersPopupVisible}>
        <CheckboxFilter />
      </FiltersPopup>

      <CombinedIcon ref={likedIconRef} onClick={() => openPopup('liked')}>
        <Icon>favorite</Icon>
        <IconText>Liked</IconText>
      </CombinedIcon>
      <LikesPopup ref={likedRef} isVisible={isLikedPopupVisible} />
        <LikedList />
      <CombinedIcon>
        <Icon>shopping_cart</Icon>
        <IconText>Liked</IconText>
      </CombinedIcon>
    </>
    
  );
};

export default Icons;


//      <CombinedIcon>
//         <Icon>account_circle</Icon>
//         <IconText>Log In</IconText>
//       </CombinedIcon>