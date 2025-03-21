import React from 'react';
import styled from 'styled-components';
import { useLikeToggle } from "@/hooks/useLikeToggler"; // Импортируем хук

// Стили для компонента
const ProductImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 20px;
  background-color: rgb(255, 255, 255);
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  pointer-events: none;
`;

const HeartIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5px;
  right: 5px;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  background-color: rgba(255, 255, 255, 0.34);
  cursor: pointer;

  z-index: 2;
  pointer-events: auto;
`;

const HeartIcon = styled.span`
  font-family: 'Material Symbols Outlined';
  font-variation-settings: 'FILL' 0, 'wght' 250, 'GRAD' 200, 'opsz' 50;
  font-size: 30px;
  cursor: pointer;

  transition: all 0.08s ease-in-out;

  &:hover {
    color: red;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileScreen}) {
  &:hover {
    color: black;
    transform: scale(1.05);
  }
  }
`;

const ActiveHeartIcon = styled.span`
  font-family: 'Material Symbols Outlined';
  font-variation-settings: 'FILL' 1, 'wght' 250, 'GRAD' 200, 'opsz' 50;
  font-size: 30px;
  cursor: pointer;
  color: red;

  transition: all 0.08s linear;

  &:active {
    transform: scale(1.1);
  }

`;

const DiscountPercent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 6px;
  bottom: 6px;
  border-radius: 10px;
  background-color: rgba(250, 98, 98, 0.8);
  padding: 2px 8px;
  font-size: 14px;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

type ProductImageWrapperProps = {
  id: number;
  name: string;
  imageUrl: string;
  onDiscount: boolean;
  isHeartVisible: boolean;
  setDisableParentActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductCardImage = ({ id, name, imageUrl, onDiscount, isHeartVisible, setDisableParentActive }: ProductImageWrapperProps) => {
  const { likedProducts, handleLikeToggle } = useLikeToggle();
  return (
    <ProductImageWrapper>
      <ProductImage src={imageUrl} alt={name} />
      {onDiscount && <DiscountPercent>-20%</DiscountPercent>}
      {isHeartVisible && <HeartIconContainer 
        onClick={() => handleLikeToggle(id)}
        onMouseEnter={() => setDisableParentActive(true)}
        onMouseLeave={() => setDisableParentActive(false)}
        onTouchStart={() => setDisableParentActive(true)}
        onTouchEnd={() => setDisableParentActive(false)}
        >
        {likedProducts.includes(id) ? (
          <ActiveHeartIcon>favorite</ActiveHeartIcon>
        ) : (
          <HeartIcon>favorite</HeartIcon>
        )}
      </HeartIconContainer>
      }
    </ProductImageWrapper>
  );
};

export default ProductCardImage;
