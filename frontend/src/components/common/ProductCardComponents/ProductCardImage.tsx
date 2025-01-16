import React from 'react';
import styled from 'styled-components';

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
  top: 2px;
  right: 2px;
  border-radius: 50%;
  height: 32px;
  width: 32px;
  background-color: rgba(255, 255, 255, 0.34);
  cursor: pointer;
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

const HeartIcon = styled.span`
  font-family: 'Material Symbols Outlined';
  font-variation-settings: 'FILL' 0, 'wght' 250, 'GRAD' 200, 'opsz' 48;
  font-size: 28px;
  cursor: pointer;

  &:active {
    color: red;
  }
`;

// Пропсы компонента
interface ProductImageWrapperProps {
  imglink: string;
  title: string;
  onDiscount: boolean;
}

// Компонент
const ProductCardImage: React.FC<ProductImageWrapperProps> = ({
  imglink,
  title,
  onDiscount,
}) => (
  <ProductImageWrapper>
    <ProductImage src={imglink} alt={title} />
    {onDiscount && <DiscountPercent>-20%</DiscountPercent>}
    <HeartIconContainer>
      <HeartIcon>favorite</HeartIcon>
    </HeartIconContainer>
  </ProductImageWrapper>
);

export default ProductCardImage;
