import React, { useState } from 'react';
import styled from 'styled-components';
import Product from '@/components/common/ProductCardComponents/ProductCard';

type ProductType = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  composition: string;
  thickness: string;
  availability: number;
  liked: boolean;
};

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

const LikesContent = styled.div`

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px 10px; 
  gap: 10px;
  width: fit-content;
  overflow-y: auto;

  > div { /* или другой селектор для элементов внутри */
    min-width: 170px;
    max-width: 250px;
    flex: 1 1 30%; /* Элементы будут иметь базовую ширину 30% и не растягиваться */
    box-sizing: border-box;
    margin: 0px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileScreen}) {
  
  }


  > div:last-child {
    flex-grow: 0; /* Убедимся, что последний элемент не будет растягиваться */
  } 
`;



const LikedProduct = styled(Product)`
  margin: 0px;
`;


const LikedList = () => {
  return (
    <LikesContent>
      {slidesData.map((slide) => (
        <LikedProduct key={slide.id} slide={slide} onDiscount={true} />
      ))}
    </LikesContent>
  );
};

export default LikedList;
