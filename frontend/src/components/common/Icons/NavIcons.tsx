import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Icon, IconText, CombinedIcon } from'./IconStyles';
import CheckboxFilter from '@/components/MainComponents/CheckboxFilter';
import useOutsideClick from '@/hooks/useOutsideClick'; 

const HideOnWideScreen = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.wideScreen}) {
    display: none;
  }
`;

const Popup = styled.div< {isVisible : boolean} >`
  position: absolute;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
  z-index: 10;
  background: white;

  border-radius: 30px;

  overflow-y: auto;
  border: 2px solid ${({ theme }) => theme.appBgColor};
  transition: ${({ theme }) => theme.popupWindowAnimation};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};

  @media (min-width: ${({ theme }) => theme.breakpoints.wideScreen}) {
    top: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileScreen}) {
    bottom: 100%;
  }
`;

const FiltersPopup = styled(Popup)`
  transform: translateX(-20%);
  width: 300px;  
  height: 75vh;  
`;

const LikesPopup = styled(Popup)`
  transform: translateX(-0%);
  width: 90vw;
  height: 80vh;  
`;

type PopupsState = {
  isFiltersPopupVisible: boolean;
  isLikedPopupVisible: boolean;
};



const Icons: React.FC = () => {
  const [popupsState, setPopupsState] = useState<PopupsState>({
    isFiltersPopupVisible: false,
    isLikedPopupVisible: false
  });
  
  const menuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(menuRef, () => {
    setPopupsState((prevState) => ({
      ...prevState,
      isFiltersPopupVisible: false,
      isLikedPopupVisible: false,
    }));
  });

  const togglePopup = (popup: 'isFiltersPopupVisible' | 'isLikedPopupVisible') => {
    setPopupsState((prevState) => 
      Object.fromEntries(
        Object.keys(prevState).map((key) => [key, key === popup ? !prevState[popup] : false])
      ) as PopupsState
    );
    
  };

  useEffect(() => {
    const isAnyPopupOpen = Object.values(popupsState).some((state) => state);
    document.body.style.overflow = isAnyPopupOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = ''; 
    };
  }, [popupsState]);
  
  return (
    <>
      <HideOnWideScreen ref={menuRef}>
        <CombinedIcon onClick={() => togglePopup('isFiltersPopupVisible')}>
          <Icon>menu</Icon>
          <IconText>Menu</IconText>
        </CombinedIcon>
        <FiltersPopup isVisible={popupsState.isFiltersPopupVisible}>
          <CheckboxFilter />
        </FiltersPopup>
      </HideOnWideScreen>

      <CombinedIcon onClick={() => togglePopup('isLikedPopupVisible')}>
        <Icon>favorite</Icon>
        <IconText>Liked</IconText>
      </CombinedIcon>
      <LikesPopup isVisible={popupsState.isLikedPopupVisible}>

      </LikesPopup>
      <CombinedIcon>
        <Icon>shopping_cart</Icon>
        <IconText>Cart</IconText>
      </CombinedIcon>
    </>
  );
};

export default Icons;


//      <CombinedIcon>
//         <Icon>account_circle</Icon>
//         <IconText>Log In</IconText>
//       </CombinedIcon>