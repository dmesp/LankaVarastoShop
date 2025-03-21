import React, { useState, memo } from 'react';
import styled from 'styled-components';
import ProductCardImage from './ProductCardImage';

const ProductWrapper = styled.div<{ disableActive: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
 
  margin: 0px 10px;
  margin-left: 0px;
  padding: 10px;

  background: ${({ theme }) => theme.appBgColor50};
  border-radius: 30px;

  transition: transform 0.2s ease-in-out, background 0.05s ease-in-out, box-shadow 0.2s ease-in-out;

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
    &:hover, &:active {
      transform: none;
      box-shadow: none;
      background: ${theme.appBgColor50};
    }

    @media (max-width: ${theme.breakpoints.mobileScreen}) {
      &:hover, &:active {
        transform: none;
        box-shadow: none;
        background: ${theme.appBgColor50};
      }
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
      box-shadow: 0px 0px 10px 0px ${({ theme }) => theme.appBgColor};
      background: ${({ theme }) => theme.appBgColor70};
      transform: scale(1.01);
    }
  }
`;

/////////////////////////////////////////////////////////

const ProductHeader = styled.div`
  display: flex;
 
  width: 100%;
`;

const ProductHeaderPrice = styled.span<{ onDiscount: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 3;
  font-size: 22px;
  font-weight: 300;
  color: ${({ onDiscount }) => (onDiscount ? 'red' : 'inherit')};

  @media (max-width: 830px) {
    font-size: 20px;
  }
`;

/////////////////////////////////////////////////////////

const ProductInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 300;
  border-radius: 30px;
  background: ${({ theme }) => theme.appBgColor70};

`;

/////////////////////////////////////////////////////////
type Category = {
  id: number;
  preview: {
    url: string;
  };
  name: string;
  price: number;
  composition: string;
  thickness: string;
  availability: number;
  liked: boolean; 
};

type ProductProps = {
  category: Category;
  onDiscount: boolean;
  isHeartVisible: boolean;
};


const CategoryCard = (({ category, onDiscount, isHeartVisible}: ProductProps) => {
  const [disableParentActive, setDisableParentActive] = useState(false);

  const imageUrl = category.preview.url 
  ? `http://localhost:1337${category.preview.url}`
  : "";
  console.log("ategory.preview.data")
  console.log(category.preview.url)
  return (
    <ProductWrapper disableActive={disableParentActive}>
      <ProductCardImage
        id={category.id}
        name={category.name}
        imageUrl={imageUrl}
        onDiscount={onDiscount}
        isHeartVisible={isHeartVisible}
        setDisableParentActive={setDisableParentActive}
      />
      <ProductHeader>
        <ProductHeaderPrice onDiscount={false}>
          <p>{category.name}</p>
        </ProductHeaderPrice>
      </ProductHeader>
    </ProductWrapper>
  );
});

export default CategoryCard;
