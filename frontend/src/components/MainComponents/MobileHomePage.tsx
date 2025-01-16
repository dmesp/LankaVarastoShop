import React from 'react';
import styled from "styled-components";

import BannerSlider from './Carousels/BannerSlider';
import PopoularSlider from './Carousels/PopoularSlider';
import DiscountSlider from './Carousels/DiscountSlider';
import CheckboxFilter from '../HeaderComponents/MobileHeaderComponents/CheckBoxFilters'; // Импорт компонента фильтров

const StyledWelcome = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh; /* Adjusted for flexible height */
  flex-direction: column; /* Stack content vertically */
`;

const WelcomeContent = styled.div`
  width: 100%;
`;

const SliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  grid-area: banners;
`;

const FullWidthSlider = styled.div`

  grid-area: slider;
`;

const MobileHomePage = () => {
  return (
    <StyledWelcome>
      <WelcomeContent>
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

export default MobileHomePage;
