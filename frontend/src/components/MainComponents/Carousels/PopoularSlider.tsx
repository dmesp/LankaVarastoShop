import React, { useRef, useState } from 'react';
import styled from "styled-components";
import 'react-multi-carousel/lib/styles.css';
import { useLanguage } from "../../../contexts/LanguageContext"
import Carousel from 'react-multi-carousel';
import Product from '../../common/ProductCardComponents/ProductCard';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
    partialVisibilityGutter: 15
  },
  desktop: {
    breakpoint: { max: 3000, min: 2000 },
    items: 7,
    partialVisible: true,
    partialVisibilityGutter: 15
  },
  desktop2: {
    breakpoint: { max: 2000, min: 1800 },
    items: 6,
    partialVisible: true,
    partialVisibilityGutter: 15
  },
  desktop3: {
    breakpoint: { max: 1800, min: 1600 },
    items: 5,
    partialVisible: true,
    partialVisibilityGutter: 15
  },
  desktop4: {
    breakpoint: { max: 1600, min: 1250 },
    items: 5,
    partialVisible: true,
    partialVisibilityGutter: 10
  },
  desktop5: {
    breakpoint: { max: 1250, min: 1023 },
    items: 5,
    partialVisible: true,
    partialVisibilityGutter: 10
  },
  tablet: {
    breakpoint: { max: 1023, min: 830 },
    items: 4,
    partialVisible: true,
    partialVisibilityGutter: 10,
  },
  tablet2: {
    breakpoint: { max: 830, min: 590 },
    items: 3,
    partialVisible: true,
    partialVisibilityGutter: 10,
  },
  mobile: {
    breakpoint: { max: 590, min: 390 },
    items: 2,
    partialVisibilityGutter: 20,
  },
  mobile2: {
    breakpoint: { max: 390, min: 0 },
    items: 1,
    partialVisibilityGutter: 100,
  }
};

const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-right: 30px;

  color: ${({ theme }) => theme.appTextColor}; 

  cursor: pointer;
  transition: color 0.2s;

  &:active, &:hover {
    color: ${({ theme }) => theme.appBgColor}; 
  }
`;

const LeftArrow = styled(Arrow)`

`;

const RightArrow = styled(Arrow)`

`;

const CarouselWrapper = styled.div`
  width: 100%;
  padding: 0 5px;
`;

const CarouselHeaderWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 50px;
  font-size: 30px;

  @media (max-width: 830px) {
    justify-content: space-between;
    margin-left: 5px;
    border-bottom: solid 2px black;
  }
`;

const HeaderText = styled.div`
  min-width: 150px;
  width: fit-content;
`;

const ArrowWrapper = styled.div`
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const slidesData = [
  { id: 1, title: 'Пряжа 1', price: '10€', imglink: "https://www.az-v.ru/wa-data/public/shop/products/35/60/6035/images/9053/9053.970.jpg", colors: ['#FF0000', '#00FF00', '#0000FF'] },
  { id: 2, title: 'Пряжа 2', price: '15€', imglink: "https://wss-shop.ru/images/stories/virtuemart/product/0D9A8633.jpg", colors: ['rgba(142, 53, 184, 0.43)', '#FFA500'] },
  { id: 3, title: 'Пряжа 3', price: '12€', imglink: "https://ecoyar.ru/UserFiles/Image/20/Nitki/img637_18804.jpg", colors: ['#FFFFFF', '#000000'] },
  { id: 4, title: 'Пряжа 4', price: '8€', imglink: "https://images.prom.ua/5741007272_w400_h400_italijska-pryazha-na.jpg", colors: ['#FFC0CB', '#800080'] },
  { id: 5, title: 'Пряжа 5', price: '20€', imglink: "https://wss-shop.ru/images/stories/virtuemart/product/0D9A8633.jpg", colors: ['#008080', '#FFD700'] },
  { id: 6, title: 'Пряжа 6', price: '25€', imglink: "https://images.prom.ua/2689134766_plyushevaya-pryazha-alize.jpg", colors: ['#A52A2A', '#5F9EA0', '#7FFF00'] },
  { id: 7, title: 'Пряжа 1', price: '10€', imglink: "https://img.fix-price.com/800x800/_marketplace/images/origin/67/67ef821b3da8cd9002c4f41a2d73fd44.jpg", colors: ['#FF0000', '#00FF00', '#0000FF'] },
  { id: 8, title: 'Пряжа 2', price: '15€', imglink: "https://wss-shop.ru/images/stories/virtuemart/product/0D9A8633.jpg", colors: ['rgba(142, 53, 184, 0.43)', '#FFA500'] },
  { id: 9, title: 'Пряжа 3', price: '12€', imglink: "https://ecoyar.ru/UserFiles/Image/20/Nitki/img637_18804.jpg", colors: ['#FFFFFF', '#000000'] },
  { id: 10, title: 'Пряжа 4', price: '8€', imglink: "https://images.prom.ua/5741007272_w400_h400_italijska-pryazha-na.jpg", colors: ['#FFC0CB', '#800080'] },
  { id: 11, title: 'Пряжа 5', price: '20€', imglink: "https://185504.selcdn.ru/static/hurma.reshops.ru/catalog/9657/2010650798663702d243a07_medium.jpg", colors: ['#008080', '#FFD700'] },
  { id: 12, title: 'Пряжа 6', price: '25€', imglink: "https://arsenal007.ru/upload/iblock/bb8/shpagat-dzhutovyy-officespace-polirovannyy-1200teks-2-niti-830m-1kg-bobina-art-329541.jpg", colors: ['#A52A2A', '#5F9EA0', '#7FFF00'] },
];


const DiscountSlider = () => {
  const { translations } = useLanguage();
  const carouselRef = useRef<Carousel | null>(null);
  const [onDiscount, setOnDiscount] = useState<boolean>(false);

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const handlePrevious = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  return (   
    <CarouselWrapper >
      <CarouselHeaderWrapper>
        <HeaderText>
          {translations.WelcomePage.Sliders.popular}
        </HeaderText>
        <ArrowWrapper>
          <LeftArrow onClick={handlePrevious}>{'<'}</LeftArrow>
          <RightArrow onClick={handleNext}>{'>'}</RightArrow>
        </ArrowWrapper>
      </CarouselHeaderWrapper>
      <Carousel
        ref={carouselRef}
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={8000}
        infinite={true}
        showDots={false}
        arrows={false}
        partialVisible={true}
        customTransition="transform 800ms ease-in-out"
      >
        {slidesData.map((slide) => (
          <Product key={slide.id} slide={slide} onDiscount={onDiscount} />
        ))}
      </Carousel>
    </CarouselWrapper >
  );
};

export default DiscountSlider;
