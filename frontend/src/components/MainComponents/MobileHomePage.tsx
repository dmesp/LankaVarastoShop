import React from 'react';
import styled from "styled-components";

import CategoriesSlider from "./Carousels/CategoriesSlider"
import BannerSlider from './Carousels/BannerSlider';
import PopoularSlider from './Carousels/PopoularSlider';
import DiscountSlider from './Carousels/DiscountSlider';
import CheckboxFilter from '../HeaderComponents/MobileHeaderComponents/CheckBoxFilters'; 

const StyledWelcome = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh; 
  flex-direction: column; 
`;

const MainPage = styled.div`
  width: 100%;
`;

const BannerWrapper = styled.div`
  grid-area: banners;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductsSliders = styled.div`
  grid-area: slider;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-left: 5px;
`;

const MobileHomePage = () => {
  return (
    <StyledWelcome>
      <MainPage>
        <BannerWrapper>
          <BannerSlider />
        </BannerWrapper>
        <ProductsSliders>
          <CategoriesSlider />
          <PopoularSlider />
          <DiscountSlider />
        </ProductsSliders>
      </MainPage>
    </StyledWelcome>
  );
};

export default MobileHomePage;