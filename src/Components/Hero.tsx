import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const Hero: React.FC = () => {
  const banner = 'https://netlfy-iota.vercel.app/img//banner.jpg';
  const iphone = 'https://netlfy-iota.vercel.app/img//image%207.png';
  const TV = '	https://netlfy-iota.vercel.app/img//image%208.png';
  const playstation = '	https://netlfy-iota.vercel.app/img//image%209.png';
  const mackbook = '	https://netlfy-iota.vercel.app/img//image%2010.png';
  const bike = '	https://netlfy-iota.vercel.app/img//image%2011.png';
  const basseyn = 'https://netlfy-iota.vercel.app/img//image%2011%20(1).png';
  const footbolka = '	https://netlfy-iota.vercel.app/img//image%2012.png';
  const napitok = '	https://netlfy-iota.vercel.app/img//image%2014.png';
  // const napitok2 = '	https://netlfy-iota.vercel.app/img/image%2013.png';

  return (
    <div className='container justify-center ml-9'>
      <Splide options={{ autoplay: true, interval: 3000 }} aria-label="Banner Images">
        <SplideSlide>
          <img src={banner} alt="Promotional Banner 1" />
        </SplideSlide>
        <SplideSlide>
          <img src={banner} alt="Promotional Banner 2" />
        </SplideSlide>
        <SplideSlide>
          <img src={banner} alt="Promotional Banner 3" />
        </SplideSlide>
        <SplideSlide>
          <img src={banner} alt="Promotional Banner 4" />
        </SplideSlide>
        <SplideSlide>
          <img src={banner} alt="Promotional Banner 5" />
        </SplideSlide>
      </Splide>
      <div className='mt-28'>
        <ul className='flex flex-wrap gap-7 justify-center items-center cursor-pointer'>
          <li className='flex flex-col items-center'>
            <a href="#" className='rounded-full overflow-hidden bg-blue-600 p-4'>
              <img src={iphone} className='w-24 h-24' alt="iPhone" /> 
            </a>
            <p className='text-center mt-2'>Смартфоны</p>
          </li>
          <li className='flex flex-col items-center'>
            <a href="#" className='rounded-full overflow-hidden bg-blue-600 p-4'>
              <img src={TV} className='w-24 h-24' alt="Television" /> 
            </a>
            <p className='text-center mt-2'>Телевизоры</p>
          </li>
          <li className='flex flex-col items-center'>
            <a href="#" className='rounded-full overflow-hidden bg-blue-600 p-4'>
              <img src={playstation} className='w-24 h-24' alt="Playstation" /> 
            </a>
            <p className='text-center mt-2'>Игровые приставки</p>
          </li>
          <li className='flex flex-col items-center'>
            <a href="#" className='rounded-full overflow-hidden bg-blue-600 p-4'>
              <img src={mackbook} className='w-24 h-24' alt="Macbook" /> 
            </a>
            <p className='text-center mt-2'>Ноутбуки</p>
          </li>
          <li className='flex flex-col items-center'>
            <a href="#" className='rounded-full overflow-hidden bg-blue-600 p-4'>
              <img src={bike} className='w-24 h-24' alt="Bike" /> 
            </a>
            <p className='text-center mt-2'>Велосипеды</p>
          </li>
          <li className='flex flex-col items-center'>
            <a href="#" className='rounded-full overflow-hidden bg-blue-600 p-4'>
              <img src={basseyn} className='w-24 h-24' alt="Inflatable Pool" /> 
            </a>
            <p className='text-center mt-2'>Надувные бассейны</p>
          </li>
          <li className='flex flex-col items-center'>
            <a href="#" className='rounded-full overflow-hidden bg-blue-600 p-4'>
              <img src={footbolka} className='w-24 h-24' alt="Outerwear" /> 
            </a>
            <p className='text-center mt-2'>Верхняя одежда</p>
          </li>
          <li className='flex flex-col items-center'>
            <a href="#" className='rounded-full overflow-hidden bg-blue-600 p-4'>
              <img src={napitok} className='w-24 h-24' alt="Drinks" /> 
            </a>
            <p className='text-center mt-2'>Напитки</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
