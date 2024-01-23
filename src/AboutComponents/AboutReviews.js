import React from 'react';
import '../Css/About.css';
// import Desktop from '../Images/pexels-fox-3829227.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const AboutReviews = () => {
    return (
        <>

            <section className="AboutReviewsMain" >
                <div className="AboutReviewsTedxt">
                    <h1>REVIEWS</h1>
                    <p> on why our customers  us❤️  and our commitment to you . . . </p>
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="ReviewsDiv">
                            <div className="ReviewsDivimg">
                                <img src="https://s3.romw-cdn.co/media/1/1392/13911708/conversions/api-60px.png" alt="" />
                            </div>
                            <div className="ReviewsText">
                                <span>Elizabeth Lapicola</span>
                                <br />
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                <br />
                                <p>Jan 5, 2023</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, inventore? Vitae, earum. Harum, dolor! Minima harum esse praesentium voluptatum perferendis perspiciatis quis earum non odit itaque, explicabo hic natus aperiam?</p>

                            </div>
                            <div className="ReviewsGoogleimg">
                                <img src="https://reviewsonmywebsite.com/images/source-logos/google_sm.png" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="ReviewsDiv">
                            <div className="ReviewsDivimg">
                                <img src="https://s3.romw-cdn.co/media/1/1392/13911708/conversions/api-60px.png" alt="" />
                            </div>
                            <div className="ReviewsText">
                                <span>Elizabeth Lapicola</span>
                                <br />
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                <br />
                                <p>Jan 5, 2023</p>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis eveniet praesentium sed, ea cumque cum nobis, nulla dolore reiciendis ab sint, soluta laborum!</p>

                            </div>
                            <div className="ReviewsGoogleimg">
                                <img src="https://reviewsonmywebsite.com/images/source-logos/google_sm.png" alt="" />
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="ReviewsDiv">
                            <div className="ReviewsDivimg">
                                <img src="https://s3.romw-cdn.co/media/1/1392/13911708/conversions/api-60px.png" alt="" />
                            </div>
                            <div className="ReviewsText">
                                <span>Elizabeth Lapicola</span>
                                <br />
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                <br />
                                <p>Jan 5, 2023</p>
                                <p>Lorem ipsam delectus dolor aspernatur sequi sapiente commodi excepturi, accusantium labore?</p>

                            </div>
                            <div className="ReviewsGoogleimg">
                                <img src="https://reviewsonmywebsite.com/images/source-logos/google_sm.png" alt="" />
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="ReviewsDiv">
                            <div className="ReviewsDivimg">
                                <img src="https://s3.romw-cdn.co/media/1/1392/13911708/conversions/api-60px.png" alt="" />
                            </div>
                            <div className="ReviewsText">
                                <span>Elizabeth Lapicola</span>
                                <br />
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                <br />
                                <p>Jan 5, 2023</p>
                                <p>Lorem. Reiciendis voluptatem rem a vi, accusantium labore?</p>

                            </div>
                            <div className="ReviewsGoogleimg">
                                <img src="https://reviewsonmywebsite.com/images/source-logos/google_sm.png" alt="" />
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="ReviewsDiv">
                            <div className="ReviewsDivimg">
                                <img src="https://s3.romw-cdn.co/media/1/1392/13911708/conversions/api-60px.png" alt="" />
                            </div>
                            <div className="ReviewsText">
                                <span>Elizabeth Lapicola</span>
                                <br />
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                <br />
                                <p>Jan 5, 2023</p>
                                <p>Lorem ipsum dolor sit amet c delectus dolor aspernatur sequi sapiente commodi excepturi, accusantium labore?</p>

                            </div>
                            <div className="ReviewsGoogleimg">
                                <img src="https://reviewsonmywebsite.com/images/source-logos/google_sm.png" alt="" />
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="ReviewsDiv">
                            <div className="ReviewsDivimg">
                                <img src="https://s3.romw-cdn.co/media/1/1392/13911708/conversions/api-60px.png" alt="" />
                            </div>
                            <div className="ReviewsText">
                                <span>Elizabeth Lapicola</span>
                                <br />
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                <br />
                                <p>Jan 5, 2023</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias noolor aspernatur sequi sapiente commodi excepturi, accusantium labore?</p>

                            </div>
                            <div className="ReviewsGoogleimg">
                                <img src="https://reviewsonmywebsite.com/images/source-logos/google_sm.png" alt="" />
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="ReviewsDiv">
                            <div className="ReviewsDivimg">
                                <img src="https://s3.romw-cdn.co/media/1/1392/13911708/conversions/api-60px.png" alt="" />
                            </div>
                            <div className="ReviewsText">
                                <span>Elizabeth Lapicola</span>
                                <br />
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                <br />
                                <p>Jan 5, 2023</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias non,accusantium labore?</p>

                            </div>
                            <div className="ReviewsGoogleimg">
                                <img src="https://reviewsonmywebsite.com/images/source-logos/google_sm.png" alt="" />
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="ReviewsDiv">
                            <div className="ReviewsDivimg">
                                <img src="https://s3.romw-cdn.co/media/1/1392/13911708/conversions/api-60px.png" alt="" />
                            </div>
                            <div className="ReviewsText">
                                <span>Elizabeth Lapicola</span>
                                <br />
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                <br />
                                <p>Jan 5, 2023</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias non, lab</p>

                            </div>
                            <div className="ReviewsGoogleimg">
                                <img src="https://reviewsonmywebsite.com/images/source-logos/google_sm.png" alt="" />
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="ReviewsDiv">
                            <div className="ReviewsDivimg">
                                <img src="https://s3.romw-cdn.co/media/1/1392/13911708/conversions/api-60px.png" alt="" />
                            </div>
                            <div className="ReviewsText">
                                <span>Elizabeth Lapicola</span>
                                <br />
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                                <br />
                                <p>Jan 5, 2023</p>
                                <p>Lorem ipsum dolor sitium labore?</p>

                            </div>
                            <div className="ReviewsGoogleimg">
                                <img src="https://reviewsonmywebsite.com/images/source-logos/google_sm.png" alt="" />
                            </div>

                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    );
}

export default AboutReviews;
