import React from 'react';
import styled from 'styled-components';
import ProductCardImage from './ProductCardImage';

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  margin: 10px 15px;
  margin-left: 0px;
  padding: 10px;
  background: ${({ theme }) => theme.appBgColor50};
  border-radius: 30px;

  p {
    margin: 0;
  }

  @media (max-width: 768px) {
    margin: 10px 5px;
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
  font-size: 14px;
  font-weight: 300;
`;

const ProductComposition = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgb(82, 82, 82);
`;

const ColorCircles = styled.div`
  display: flex;
  gap: 5px;
`;

const ColorCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

const ProductAviability = styled.div`
  font-size: 15px;
`;

/////////////////////////////////////////////////////////

const Product = ({ slide, onDiscount }: { slide: any; onDiscount: boolean }) => {
  return (
    <ProductWrapper>
      <ProductCardImage
        imglink={slide.imglink}
        title={slide.title}
        onDiscount={onDiscount}
      />
      <ProductHeader>
        <ProductHeaderPrice onDiscount={onDiscount}>
          <p>{slide.price}</p>
          {onDiscount && <DiscountPrice>40€</DiscountPrice>}
        </ProductHeaderPrice>
        <ProductHeaderWeight>100g</ProductHeaderWeight>
      </ProductHeader>
      <ProductInfo>
        <ProductComposition>
          <p> Шерсть, Меринос</p>
          <p> Толстая 600м</p>
          <p>Подробнее...</p>
        </ProductComposition>

        <ProductAviability>
          <p>На складе: 999г</p>
        </ProductAviability>
      </ProductInfo>
    </ProductWrapper>
  );
};

export default Product;
