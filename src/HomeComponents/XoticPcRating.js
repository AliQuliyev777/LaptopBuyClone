import React from 'react';
import '../Css/Home.css';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const XoticPcRating = () => {
    const slidesPerView = window.innerWidth <= 767 ? 1 : 3;

    return (
        <>
            <header className="Xoticplaynow">
                <div className="XoticplaynowBlack">
                    <div className="XoticplaynowBlackH4">
                        <h4>Play Now, Pay Later</h4>
                    </div>
                    <div className="XoticplaynowBlackIcon">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <i className="fa-solid fa-calendar"></i>
                        <i className="fa-solid fa-gift"></i>
                    </div>
                    <div className="XoticplaynowBlackButton">
                        <p>Buying a PC has never been so easy. XOTIC PC removes the stress of purchasing a new computer through our partners by providing flexible payment options, a lack of prepayment penalties, clear terms, and reasonable interest rate. Pay for your dream computer at your own pace with our flexible financing options.</p>
                        <br />
                        <br />
                        <Link className="XoticplayBlackbuttona" to="/Home">
                            <span>Learn More</span>
                        </Link>
                    </div>
                </div>
            </header>
            <div className="PcLife">
                <h3>THE XOTIC PC LIFE</h3>
            </div>

            <Swiper
<<<<<<< Updated upstream
                     slidesPerView={slidesPerView}
=======
                slidesPerView={slidesPerView}
>>>>>>> Stashed changes

                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper121"

            >

                <SwiperSlide >
                    <div className="SwiperOne">
                        <h4><strong>personalized support</strong></h4>
                        <br />
                        <p>Our Support Heroes work in the same factory that builds all systems. They can easily go into the facility to check up on your system.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="SwiperOne">
                        <h4><strong>Lorem, ipsum dolor.</strong></h4>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque alias, in nam ducimus necessitatibus voluptatibus!</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>   <div className="SwiperOne">
                    <h4><strong>Lorem, ipsum dolor.</strong></h4>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque alias, in nam ducimus necessitatibus voluptatibus!</p>
                </div></SwiperSlide>
                <SwiperSlide>   <div className="SwiperOne">
                    <h4><strong>Lorem, ipsum dolor.</strong></h4>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque alias, in nam ducimus necessitatibus voluptatibus!</p>
                </div></SwiperSlide>
                <SwiperSlide>   <div className="SwiperOne">
                    <h4><strong>Lorem, ipsum dolor.</strong></h4>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque alias, in nam ducimus necessitatibus voluptatibus!</p>
                </div></SwiperSlide>
                <SwiperSlide>   <div className="SwiperOne">
                    <h4><strong>Lorem, ipsum dolor.</strong></h4>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque alias, in nam ducimus necessitatibus voluptatibus!</p>
                </div></SwiperSlide>
                <SwiperSlide>   <div className="SwiperOne">
                    <h4><strong>Lorem, ipsum dolor.</strong></h4>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque alias, in nam ducimus necessitatibus voluptatibus!</p>
                </div></SwiperSlide>
                <SwiperSlide>   <div className="SwiperOne">
                    <h4><strong>Lorem, ipsum dolor.</strong></h4>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque alias, in nam ducimus necessitatibus voluptatibus!</p>
                </div></SwiperSlide>

                <SwiperSlide>   <div className="SwiperOne">
                    <h4><strong>Lorem, ipsum dolor.</strong></h4>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque alias, in nam ducimus necessitatibus voluptatibus!</p>
                </div></SwiperSlide>
            </Swiper>
            <div className="ratingDiv">
                <div className="ratingDiv1">
                    <h4>
                        <b>140</b>
                    </h4>
                    <img src="https://ucarecdn.com/66a3ff59-ef85-4eb1-b821-8f2af33fbeb2/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="" />
                    <p>94% of buyers would return and buy again</p>
                </div>
                <div className="ratingDiv1">
                    <img src="https://ucarecdn.com/c9c9a4ed-3222-4708-af33-ab5e5a04d3ba/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="" />
                    <h4><b>10,500+</b></h4>
                    <p>Positive reviews from our customers</p>
                </div>
                <div className="ratingDiv1">
                    <img src="https://ucarecdn.com/f57a9e5c-2d0b-4ad4-bc32-ee16ace605c3/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="" />
                    <h4>
                        <b>4.7</b>
                    </h4>

                    <p>Out of 5 average rating</p>
                </div>

            </div>
            <div className="XoticLatestNews">
                <h3>
                    LATEST News
                </h3>
                <div className="XoticLatestNewsAllDiv">
                    <div className="XoticLatestNews1">
                        <div className="XoticLatestNews1Img">
                            <img src="https://xoticpc.com/cdn/shop/articles/newcardamd_1024x1024.png?v=1694026086" alt="" />
                        </div>
                        <h3>
                            BREAKTHROUGH PERFORMANCE
                        </h3>
                        <p>Experience incredible performance, visuals, and efficiency when gaming and streaming with the AMD Radeon™ RX 7700 XT and 7800 XT...</p>
                    </div>
                    <div className="XoticLatestNews1">
                        <div className="XoticLatestNews1Img">
                            <img src="https://xoticpc.com/cdn/shop/articles/7000series_1024x1024.png?v=1670945188" alt="" />
                        </div>
                        <h3>
                            Performance to Advance Your Adventure - AMD Radeon™ RX 7000 Series
                        </h3>
                        <p>
                            Experience unprecedented performance, visuals, and efficiency at 4K and beyond with AMD Radeon™ RX 7000 Series graphics cards, the world's...
                        </p>
                    </div>
                    <div className="XoticLatestNews1">
                        <div className="XoticLatestNews1Img">
                            <img src="https://xoticpc.com/cdn/shop/articles/intelnew13th_1024x1024.png?v=1664322577" alt="" />
                        </div>
                        <h3>
                            13th Gen Intel® Core™ desktop processors - Beyond performance.
                        </h3>
                        <p>Stream, create, and compete at the highest levels with industry-leading features and the latest hybrid architecture.Designed for the needs of...</p>

                    </div>
                    <div className="XoticLatestNews1">
                        <div className="XoticLatestNews1Img">
                            <img src="https://xoticpc.com/cdn/shop/articles/intel13thgen_22f8778c-8856-4e1e-a91e-4acc873b9027_1024x1024.png?v=1664318091" alt="" />
                        </div>
                        <h3>
                            Intel Launches 13th Gen Intel Core Processor Family Alongside New Intel Unison Solution
                        </h3>
                        <p>
                            With this generation, Intel’s performance hybrid architecture brings together the fastest Performance-cores (P-core) ever built along with up to double...
                        </p>
                    </div>
                </div>
            </div>
            <div className="XoticPcReclamLogos">
                <img src="https://ucarecdn.com/3b957e84-2e0b-40dc-aa76-8079ce29dc43/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="" />
                <img src="https://ucarecdn.com/83c7519b-1be4-442a-9d81-202d240e1478/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="" />
                <img src="https://ucarecdn.com/85f853ed-e147-4279-a02f-880644e201eb/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="" />
            </div>
            <div className="XoticPcRatingCustomOptions">
                <h3>INDUSTRY LEADING CUSTOM OPTIONS </h3>
                <p>Today, customers are looking for the newest and most unique customization options to individualize their personal computer, and XOTIC PC has the answer. We offer more customization options and services than any other computer company on the market today. Everything from custom lighting and exclusive printed personalized graphics, to custom painting and airbrushing on site within our new facility. You won't find anywhere with a more extensive custom gaming computer & laptop options than XOTIC PC. </p>
                <br />

                <Link className="" to="/Home" >
                    <span>Click here to start your customization today!</span>
                </Link>
                <br />
                <br />
                <p>Computer games are loaded with incredible graphics, but the ultimate gaming experience requires the right equipment. When it comes to multiplayer, simulations, or first-person shooters, there’s no better way to feel like you’re in the middle of the action than with a custom built computer, laptop, or notebook to call your own. XOTIC PC specializes in designing and building notebooks, laptops, and desktop computers to suit any personal sense of style. Game consoles and handheld devices don’t stand a fair chance of competing with a tricked-out PC. If you are ready to design your own custom gaming computer, explore our inventory to find the perfect laptop or PC to get started.</p>
                <br />
                <p>XOTIC PC offers full wrap customization options from edge to edge. Our wrapping services allow you to add unique branding or texture to your custom gaming laptop, computer, or notebook at a fraction of the cost you might pay elsewhere. Our highly trained staff disassembles and carefully removes exterior hardware before transforming your stock chassis into something truly intimidating. Graphic wraps are made from a high-gloss, scratch-resistant vinyl sheet that forms to your notebook or desktop without any bubbles. What sets our custom wraps apart? We install and form wraps to the entire surface of your computer, not just the interior edge. We also welcome custom artwork at no additional cost. Interested in texture wrap modifications? We also offer carbon fiber and alligator exterior finishes to give your gaming computer a unique look.</p>
                <br />
                <p>
                    In addition to graphic, stealth, or textured wrapping, we also provide one-of-a-kind etching and painting services. All the custom gaming computers in our inventory allow you to select a personal laser-etch option. Our custom color options include Arctic White, Burnt Orange, Gecko Green, Gunmetal Grey, Plum Purple, Torch Red, Tuxedo Black, and so much more. Take your new computer to the next level by checking out our hydro-dipping services. Hydro-dipped graphics combine the best of paint and graphic wrapping, all sealed by water for durability and quality.</p>

                <br />
                <br />
                <p>We’ve come a long way since the height of the clone market, but enthusiasts are choosing custom gaming laptops, notebooks, and desktops more than ever. Enjoy a fully-loaded custom gaming experience on your own terms. Since 1999, XOTIC PC, Inc. has been an industry leader in personalized gaming computers. Simply put, we love what we do and there’s no better reward than helping our customers turn their visions into reality. We are constantly on the hunt for new materials, designs, and customization options. Do you have any innovative ideas or know of features that we don’t currently offer? Please contact us today. We would love to hear from you.

                </p>
            </div>
        </>
    );
}

export default XoticPcRating;
