import React from 'react';
import banner from '../Assist/Fotos/banner.jpg'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css'; // Splide default theme CSS

const Hero: React.FC = () => {
  return (
    <div className='container justify-center ml-7'>
      <Splide className='block' options={{}} aria-label="My Favorite Images">
        <SplideSlide>
          <img src={banner} alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src={banner} alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src={banner} alt="Image 3" />
        </SplideSlide>
        <SplideSlide>
          <img src={banner} alt="Image 4" />n 
        </SplideSlide>
        <SplideSlide>
          <img src={banner} alt="Image 5" />
        </SplideSlide>
      </Splide>
      {/* <dir className=''>

      </dir> */}
    </div>
  );
};

export default Hero;
