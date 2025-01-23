import styled, { keyframes } from "styled-components";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


interface SlideProps {
  bgColor?: string;
}

const Slide = styled.div<SlideProps>`

  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  user-select: none;
  touch-action: pan-y;
  ser-drag: none; 
`;

const SlideContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

`;

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 800px;
  overflow: hidden;
  border-radius: 30px;
`;

const SlideImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const slidesData = [
  { id: 1, content: 'Slide 1', bgColor: 'black', imgLink: "https://megagroup.ru/thumb/2/9QIaE0rHm7jK3_VgsPSj0g/r285/d/3_45.jpg" },
  { id: 2, content: 'Slide 2', bgColor: 'green', imgLink: "https://images.pexels.com/photos/1448136/pexels-photo-1448136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 3, content: 'Slide 3', bgColor: 'blue', imgLink: "https://images.pexels.com/photos/2138922/pexels-photo-2138922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { id: 4, content: 'Slide 4', bgColor: 'pink', imgLink: "https://images.pexels.com/photos/1131407/pexels-photo-1131407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
];

const BannerSlider = () => {
  return (
    <CarouselContainer>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={9000}
        infinite={true}
        showDots={false}
        arrows={false}
        additionalTransfrom={0}
        transitionDuration={300}
        customTransition={"transform 300ms ease-in-out"}
      >
        {slidesData.map(slide => (
            <Slide key={slide.id} bgColor={slide.bgColor}>
            <SlideImage src={slide.imgLink} alt={slide.content} />
            <SlideContent>
              
            </SlideContent>
          </Slide>
        ))}
      </Carousel>
    </CarouselContainer>
  );
}

export default BannerSlider