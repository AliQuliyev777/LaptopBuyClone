import React from 'react';
import '../Css/LaptopView.css';
import 'tailwindcss/tailwind.css';
import { Swiper, SwiperSlide } from 'swiper/react';

const LaptopPageImageClick = ({ imageUrls }) => {
    
  return (
    
    <>
      <div className="LaptopPageImageClicka">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          
        >
          {imageUrls && imageUrls.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <img src={imageUrl} alt={`Main ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default LaptopPageImageClick;
