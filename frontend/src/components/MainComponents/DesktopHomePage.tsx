import React from 'react';
import styled from "styled-components";

import BannerSlider from './Carousels/BannerSlider';
import PopoularSlider from './Carousels/PopoularSlider';
import DiscountSlider from './Carousels/DiscountSlider';
import CheckboxFilter from './CheckboxFilter'; // Импорт компонента фильтров

const StyledWelcome = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  height: fit-content;
`;

const WelcomeContent = styled.div`
  height: fit-content;
  display: grid;
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

const SliderWrapper = styled.div`
  grid-area: banners;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
`;

const FullWidthSlider = styled.div`
  grid-area: slider;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
`;

const DesktopHomePage = () => {
  return (
    <StyledWelcome>
      <WelcomeContent>
        {/* Левая колонка с фильтрами */}
        <FilterWrapper>
          <CheckboxFilter />
        </FilterWrapper>

        {/* Центральные слайдеры */}
        <SliderWrapper>
          <BannerSlider />
        </SliderWrapper>

        <FullWidthSlider>
          <PopoularSlider />
          <DiscountSlider />
        </FullWidthSlider>
      </WelcomeContent>
    </StyledWelcome>
  );
};

export default DesktopHomePage;
