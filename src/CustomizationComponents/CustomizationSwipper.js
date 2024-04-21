import React from 'react';
import '../Css/Customization.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const CustomizationSwipper = () => {
    return (
        <>
            <div className="CustomizationSwipperMain">
                <h2>Some of our Creations</h2>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://ucarecdn.com/2e5ba560-d98c-435c-bbf7-6603d359a145/-/format/auto/-/preview/480x480/-/quality/lighter/" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://ucarecdn.com/a03ca0fd-b717-475c-afb9-bee7db7f35d4/-/format/auto/-/preview/750x750/-/quality/lighter/" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://ucarecdn.com/37a03793-2d03-4cf7-81c8-222e6e032671/-/format/auto/-/preview/750x750/-/quality/lighter/" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://ucarecdn.com/c26b9f09-66b5-4f03-a222-ad45111ad312/-/format/auto/-/preview/750x750/-/quality/lighter/" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://ucarecdn.com/ed052346-1d56-4030-b28d-55ebe6c52e54/-/format/auto/-/preview/750x750/-/quality/lighter/" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://ucarecdn.com/1edbe1ba-bb99-4ccb-a1c8-caa533419fac/-/format/auto/-/preview/600x600/-/quality/lighter/" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://ucarecdn.com/d66944d3-c908-4cc7-a88f-b9d29f157a78/-/format/auto/-/preview/750x750/-/quality/lighter/" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://ucarecdn.com/e1511d22-40ea-4bb4-b5eb-cc1cb2253cfb/-/format/auto/-/preview/750x750/-/quality/lighter/" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://ucarecdn.com/a16e5259-8a52-4d35-bb90-46b01a47fedd/-/format/auto/-/preview/750x750/-/quality/lighter/" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>

           
        </>
    );
}

export default CustomizationSwipper;
