import React, { useState } from 'react';
import Slider from 'react-slick';
import '../Css/LaptopPageMobileCarousel.css';
import { useParams } from 'react-router-dom';

const LaptopPageMobile = ({ laptops }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slider1, setSlider1] = useState(null);
    const [nav1, ] = useState(null);
    const { laptopId } = useParams();

    const laptop = laptops && laptops.find(laptop => laptop.laptopId === parseInt(laptopId));

    if (!laptop) {
        return <div>Laptop not found</div>;
    }

    // Slayt verilerini oluştur
    const slides = [
        { id: 1, src: laptop.laptopImage1, alt: "Image 1" },
        { id: 2, src: laptop.laptopImage2, alt: "Image 2" },
        { id: 3, src: laptop.laptopImage3, alt: "Image 3" },
        { id: 4, src: laptop.laptopImage4, alt: "Image 4" },
        { id: 5, src: laptop.laptopImage5, alt: "Image 5" }
    ];

    const settings = {
        onReInit: () => setCurrentSlide(slider1?.innerSlider.state.currentSlide),
        lazyLoad: true,
        asNavFor: ".slider-nav",
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <div className='LaptopPageMobile'>
            <Slider {...settings} asNavFor={nav1} ref={(slider) => setSlider1(slider)}>
                {slides.map((item) => (
                    <div key={item.id} className='LaptopPageMobileMainImage'>
                        <img src={item.src} alt={item.alt} />
                    </div>
                ))}
            </Slider>
            <div className="thumb-wrapper">
                {slides.map((item, idx) => (
                    <div
                        key={item.id}
                        className={currentSlide === idx ? "active" : null}
                        onClick={() => {
                            slider1?.slickGoTo(idx);
                        }}>
                        <img src={item.src} alt={item.alt} />
                        {currentSlide}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LaptopPageMobile;
