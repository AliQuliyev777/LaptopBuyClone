import React from 'react';
import { StyledSlider, Box, Box2, Box3 } from "./box.styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
// import 'video-react/dist/video-react.css';

const ProductSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };

  return (
    <>

      <div className="BoxAlllDiv" >

        <div className='Slide'>

          <StyledSlider {...settings}>
            <Box >

              <div className="Box1">
                <h4>GEFORCE RTX 40 SERIES</h4>
                <h4>BEYOND FAST</h4>
                <br />

                <p>NEW NVIDIA® GEFORCE RTX™ 4060 GRAPHICS <br /> AVAILABLE NOW WITH XOTIC PC</p>
                <br />
                <br />
                <Link className="NewProductButton2" to="/Home">
                  <span>Show Desktops</span>
                </Link>
              </div>
            </Box>
            <Box2>
              <div className="wrapper">
                <div className="container1">
                  <h1>THE ROAD TO CHAMPIONS 2023!</h1>
                </div>
              </div>
            </Box2>
            <Box3>
              <div>
                <div className="Box3">
                  <h2>
                  <span>Cutting-edge performance. 
                  <br />
                  Maximized bandwidth. 
                  <br />
                  Breathtaking speed.
                  </span>
                  </h2>
                </div>           
                
              </div>
            </Box3>
          </StyledSlider>
        </div>
      </div>
    </>
  );
}

export default ProductSlide;
