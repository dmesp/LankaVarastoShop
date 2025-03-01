import React from 'react';
import styled from "styled-components";

import BannerSlider from './Carousels/BannerSlider';
import PopoularSlider from './Carousels/PopoularSlider';
import DiscountSlider from './Carousels/DiscountSlider';
import CheckboxFilter from './Popups/CheckboxFilter'; 

const StyledWelcome = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  height: fit-content;
`;

const MainPage = styled.div`
  height: fit-content;
  display: grid;
  row-gap: 30px;
  grid-template-columns: 400px 1fr 1fr; 
  grid-template-rows: auto auto auto;
  grid-template-areas: 
    "banners banners banners"
    "filterbar slider slider"
    "filterbar slider slider";
`;

const FilterWrapper = styled.div`
  grid-area: filterbar;
  margin-right: 80px;
  margin-top: -470px;
  z-index: 10;
`;

const BannerWrapper = styled.div`
  grid-area: banners;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const ProductsSliders = styled.div`
  grid-area: slider;
  display: flex;
  flex-direction: column;
  row-gap: 30px;

`;

const DesktopHomePage = () => {
  return (
    <StyledWelcome>
      <MainPage>
        <FilterWrapper>
          <CheckboxFilter />
        </FilterWrapper>
        <BannerWrapper>
          <BannerSlider />
        </BannerWrapper>
        <ProductsSliders>
          <PopoularSlider />
          <DiscountSlider />
        </ProductsSliders>
      </MainPage>
    </StyledWelcome>
  );
};

export default DesktopHomePage;
