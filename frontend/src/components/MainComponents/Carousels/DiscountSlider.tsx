import React, { useRef, useState } from 'react';
import styled from "styled-components";
import 'react-multi-carousel/lib/styles.css';
import { useLanguage } from '../../../contexts/LanguageContext';
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
    breakpoint: { max: 1600, min: 1190 },
    items: 5,
    partialVisible: true,
    partialVisibilityGutter: 10
  },
  tablet: {
    breakpoint: { max: 1190, min: 830 },
    items: 4,
    partialVisible: true,
    partialVisibilityGutter: 10,
  },
  tablet2: {
    breakpoint: { max: 830, min: 680 },
    items: 3,
    partialVisible: true,
    partialVisibilityGutter: 10,
  },
  tablet3: {
    breakpoint: { max: 680, min: 560 },
    items: 2,
    partialVisible: true,
    partialVisibilityGutter: 80,
  },
  mobile: {
    breakpoint: { max: 560, min: 440 },
    items: 2,
    partialVisibilityGutter: 20,
  },
  mobile2: {
    breakpoint: { max: 440, min: 390 },
    items: 1,
    partialVisibilityGutter: 190,
  },
  mobile3: {
    breakpoint: { max: 390, min: 0 },
    items: 1,
    partialVisibilityGutter: 80,
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
  padding-right: 20px;
`;

const RightArrow = styled(Arrow)`
  padding-left: 20px;
`;

const CarouselWrapper = styled.div`
  padding-left: 10px;
  padding-bottom: 0px;
`;

const CarouselHeaderWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 50px;
  font-size: 30px;
  padding-bottom: 10px;
  
  @media (max-width: 830px) {
    justify-content: space-between;
    margin-left: 5px;
    padding-bottom: 0px;
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
  { 
    id: 1, 
    title: "Пряжа 1", 
    price: 10, 
    imageUrl: "https://www.az-v.ru/wa-data/public/shop/products/35/60/6035/images/9053/9053.970.jpg", 
    composition: "Шерсть, Меринос", 
    thickness: "Толстая 600м", 
    availability: 999, 
    liked: false 
  },
  { 
    id: 2, 
    title: "Пряжа 2", 
    price: 15, 
    imageUrl: "https://wss-shop.ru/images/stories/virtuemart/product/0D9A8633.jpg", 
    composition: "Хлопок", 
    thickness: "Средняя 500м", 
    availability: 500, 
    liked: false 
  },
  { 
    id: 3, 
    title: "Пряжа 3", 
    price: 12, 
    imageUrl: "https://ecoyar.ru/UserFiles/Image/20/Nitki/img637_18804.jpg", 
    composition: "Альпака", 
    thickness: "Тонкая 400м", 
    availability: 300, 
    liked: false 
  },
  { 
    id: 4, 
    title: "Пряжа 4", 
    price: 8, 
    imageUrl: "https://images.prom.ua/5741007272_w400_h400_italijska-pryazha-na.jpg", 
    composition: "Шерсть", 
    thickness: "Очень толстая 700м", 
    availability: 100, 
    liked: false 
  },
  { 
    id: 5, 
    title: "Пряжа 5", 
    price: 20, 
    imageUrl: "https://wss-shop.ru/images/stories/virtuemart/product/0D9A8633.jpg", 
    composition: "Шерсть, Кашемир", 
    thickness: "Средняя 550м", 
    availability: 750, 
    liked: false 
  },
  { 
    id: 6, 
    title: "Пряжа 6", 
    price: 25, 
    imageUrl: "https://images.prom.ua/2689134766_plyushevaya-pryazha-alize.jpg", 
    composition: "Полиэстер", 
    thickness: "Тонкая 350м", 
    availability: 200, 
    liked: false 
  },
  { 
    id: 7, 
    title: "Пряжа 7", 
    price: 18, 
    imageUrl: "https://img.fix-price.com/800x800/_marketplace/images/origin/67/67ef821b3da8cd9002c4f41a2d73fd44.jpg", 
    composition: "Шелк", 
    thickness: "Супер тонкая 200м", 
    availability: 80, 
    liked: false 
  },
  { 
    id: 8, 
    title: "Пряжа 8", 
    price: 22, 
    imageUrl: "https://wss-shop.ru/images/stories/virtuemart/product/0D9A8633.jpg", 
    composition: "Шерсть, Лён", 
    thickness: "Средняя 450м", 
    availability: 400, 
    liked: false 
  },
  { 
    id: 9, 
    title: "Пряжа 9", 
    price: 14, 
    imageUrl: "https://ecoyar.ru/UserFiles/Image/20/Nitki/img637_18804.jpg", 
    composition: "Акрил", 
    thickness: "Средняя 480м", 
    availability: 350, 
    liked: false 
  },
  { 
    id: 10, 
    title: "Пряжа 10", 
    price: 9, 
    imageUrl: "https://images.prom.ua/5741007272_w400_h400_italijska-pryazha-na.jpg", 
    composition: "Шерсть, Бамбук", 
    thickness: "Толстая 650м", 
    availability: 120, 
    liked: false 
  },
  { 
    id: 11, 
    title: "Пряжа 11", 
    price: 30, 
    imageUrl: "https://185504.selcdn.ru/static/hurma.reshops.ru/catalog/9657/2010650798663702d243a07_medium.jpg", 
    composition: "Кашемир", 
    thickness: "Супер мягкая 550м", 
    availability: 60, 
    liked: false 
  },
  { 
    id: 12, 
    title: "Пряжа 12", 
    price: 27, 
    imageUrl: "https://arsenal007.ru/upload/iblock/bb8/shpagat-dzhutovyy-officespace-polirovannyy-1200teks-2-niti-830m-1kg-bobina-art-329541.jpg", 
    composition: "Джут", 
    thickness: "Очень толстая 900м", 
    availability: 30, 
    liked: false 
  },
  { 
    id: 13, 
    title: "Пряжа 13", 
    price: 11, 
    imageUrl: "https://wss-shop.ru/images/stories/virtuemart/product/0D9A8633.jpg", 
    composition: "Шерсть, Шелк", 
    thickness: "Средняя 520м", 
    availability: 500, 
    liked: false 
  },
  { 
    id: 14, 
    title: "Пряжа 14", 
    price: 16, 
    imageUrl: "https://images.prom.ua/2689134766_plyushevaya-pryazha-alize.jpg", 
    composition: "Акрил, Полиэстер", 
    thickness: "Тонкая 300м", 
    availability: 400, 
    liked: false 
  },
  { 
    id: 15, 
    title: "Пряжа 15", 
    price: 19, 
    imageUrl: "https://ecoyar.ru/UserFiles/Image/20/Nitki/img637_18804.jpg", 
    composition: "Шерсть, Альпака", 
    thickness: "Средняя 500м", 
    availability: 700, 
    liked: false 
  }
];



const DiscountSlider = () => {
  const { translations } = useLanguage();
  const carouselRef = useRef<Carousel | null>(null); 
  const [onDiscount, setOnDiscount] = useState<boolean>(true); 

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
          {translations.WelcomePage.Sliders.discounts}
        </HeaderText>
        <ArrowWrapper>
          <LeftArrow onClick={handlePrevious}>{'<'}</LeftArrow>
          <RightArrow onClick={handleNext}>{'>'}</RightArrow>
        </ArrowWrapper>
      </CarouselHeaderWrapper>
      <Carousel
        ref={carouselRef}
        responsive={responsive}
        autoPlay={false}
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