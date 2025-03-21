import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import { useLanguage } from '@/contexts/LanguageContext';
import makeRequest from '@/utils/requestHandler'; 
import responsive from "./Responsive"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CategoryCard from '@/components/common/ProductCardComponents/CategoryCard';

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


const CarouselWrapper = styled.div`

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


const CategoriesSlider = () => {
  const { language } = useLanguage(); 
  const [categories, setCategories] = useState<any[]>([]); 
  const carouselRef = useRef<Carousel | null>(null); 
  const [onDiscount, setOnDiscount] = useState<boolean>(false); 
  const [isHeartVisible, setIsHeartVisible] = useState<boolean>(false); 

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await makeRequest<{ data: any[] }>(
          `categories?locale=${language.toLowerCase()}&populate=preview`, 
          'GET'
        );
        
        if (response.resdata) {
          setCategories(response.resdata.data)
          console.log("sucsess")
          console.log(response.resdata.data)
        } else {
          console.error('Error fetching categories:', response.error);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, [language]); 

  return (
    <div>
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
      {Array.isArray(categories) && categories.length > 0 
      ? (
          categories.map((data) => (
            <CategoryCard
              key={data.id}
              category={data}
              onDiscount={onDiscount}
              isHeartVisible={isHeartVisible}
            />
          ))
        ) 
      : (
        <p>No categories available</p> 
      )}
      </Carousel>
    </div>
  );
};

export default CategoriesSlider;