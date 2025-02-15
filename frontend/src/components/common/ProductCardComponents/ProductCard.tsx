import React, { useState } from 'react';
import styled from 'styled-components';
import ProductCardImage from './ProductCardImage';

const ProductWrapper = styled.div<{ disableActive: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  margin: 10px 15px;
  margin-left: 0px;
  padding: 10px;
  background: ${({ theme }) => theme.appBgColor50};
  border-radius: 30px;

  transition: ${({ theme }) => theme.colorChangeAnimation};
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.005);
    box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.appBgColor60};
    background: ${({ theme }) => theme.appBgColor60};
  }

  &:active {
    transform: scale(1.005);
    box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.appBgColor};
    background: ${({ theme }) => theme.appBgColor70};
  }

  /* Условие для отключения стилей при disableParentActive */
  ${({ disableActive, theme }) => disableActive && `
      
    &:hover {
      transform: none;
      box-shadow: none;
      background: ${theme.appBgColor50};
    }

    &:active {
      transform: none;
      box-shadow: none;
      background: ${theme.appBgColor50};
    }
  `}

  p {
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileScreen}) {
    margin: 10px 5px;

    &:hover {
      transform: none;
      box-shadow: none;
      background: ${({ theme }) => theme.appBgColor50};
    }

    &:active {
      background: ${({ theme }) => theme.appBgColor70};
      transform: scale(1.01);
    }
  }
`;

/////////////////////////////////////////////////////////

const ProductHeader = styled.div`
  display: flex;
  border-bottom: solid 2px ${({ theme }) => theme.appBgColor};
  width: 100%;
`;

const ProductHeaderPrice = styled.span<{ onDiscount: boolean }>`
  display: flex;
  gap: 8px;
  padding-left: 10px;
  flex-grow: 3;
  font-size: 22px;
  font-weight: 500;
  color: ${({ onDiscount }) => (onDiscount ? 'red' : 'inherit')};

  @media (max-width: 830px) {
    font-size: 20px;
  }
`;

const ProductHeaderWeight = styled.span`
  display: flex;
  justify-content: flex-end; 
  align-self: flex-end;
  flex-grow: 1; 
  padding-right: 10px;
  font-size: 16px; 

  @media (max-width: 830px) {
    font-size: 13px;
  }
`;

const DiscountPrice = styled.p`
  justify-content: flex-end; 
  align-self: flex-end;
  text-decoration: line-through;
  font-size: 18px;
  color: black;
  
  @media (max-width: 830px) {
    font-size: 17px;
  }
`;

/////////////////////////////////////////////////////////

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 10px 10px;
  font-size: 15px;
  font-weight: 300;
`;

const ProductComposition = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgb(82, 82, 82);
`;

const ProductAviability = styled.div`
  font-size: 16px;
`;

/////////////////////////////////////////////////////////
type Slide = {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
  composition: string;
  thickness: string;
  availability: number;
  liked: boolean; 
};

type ProductProps = {
  slide: Slide;
  onDiscount: boolean;
};

const Product = ({ slide, onDiscount }: ProductProps) => {
  const [disableParentActive, setDisableParentActive] = useState(false);
  return (
    <ProductWrapper disableActive={disableParentActive}>
      <ProductCardImage
        id={slide.id}
        imageUrl={slide.imageUrl}
        title={slide.title}
        onDiscount={onDiscount}
        setDisableParentActive={setDisableParentActive}
      />
      <ProductHeader>
        <ProductHeaderPrice onDiscount={onDiscount}>
          <p>{slide.price}€</p>
          {onDiscount && <DiscountPrice>40€</DiscountPrice>}
        </ProductHeaderPrice>
        <ProductHeaderWeight>100g</ProductHeaderWeight>
      </ProductHeader>
      <ProductInfo>
        <ProductComposition>
          <p>{slide.composition}</p>
          <p>{slide.thickness}</p>
          <p>Подробнее...</p>
        </ProductComposition>

        <ProductAviability>
          <p>На складе: {slide.availability}г</p>
        </ProductAviability>
      </ProductInfo>
    </ProductWrapper>
  );
};

export default Product;
