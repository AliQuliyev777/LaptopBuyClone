import React, { useRef, useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';
import '../Css/LaptopView.css';
import 'tailwindcss/tailwind.css';

const LaptopPageImageClick = ({ imageUrls, onImageClick, isVisible }) => {
    console.log('LaptopPageImageClick is rendering. isVisible:', isVisible);

    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const mainSwiper = useRef(null);
    const thumbsSwiper = useRef(null);

    // Close the modal using onImageClick function
    const closeImageClick = () => {
        onImageClick(false);
    };

    // Handle thumbnail click
    const handleThumbnailClick = (index) => {
        console.log("Thumbnail clicked:", index);

        // Toggle the selectedImageIndex state
        setSelectedImageIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };

    return isVisible && (
        <>
        <div className="LaptopPageImageClick">
            <button onClick={closeImageClick}>Close Image</button>

            <Swiper
                ref={mainSwiper}
                className="mySwiper"
                loop={true}
                spaceBetween={10}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{ clickable: true }}
                thumbs={{ swiper: thumbsSwiper.current }}
                modules={[FreeMode, Navigation, Pagination, Thumbs]}
                initialSlide={selectedImageIndex}
                onSwiper={(swiper) => {
                    console.log("Main Swiper initialized:", swiper);
                    mainSwiper.current = swiper;
                }}
            >
                {imageUrls.map((imageUrl, index) => (
                    <SwiperSlide key={index}>
                        <img src={imageUrl} alt={`Main ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>

            <Swiper
                ref={thumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                className="mySwiper2"
                onSwiper={(swiper) => {
                    console.log("Thumbnail Swiper initialized:", swiper);
                    thumbsSwiper.current = swiper;
                }}
            >
                {imageUrls.map((imageUrl, index) => (
                    <SwiperSlide key={index} className={`customThumbSlideClass${index}`}>
                        <img
                            src={imageUrl}
                            alt={`Thumb ${index + 1}`}
                            onClick={() => handleThumbnailClick(index)}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

        </>
    );
};

export default LaptopPageImageClick;
