import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Box = styled.div`
padding: 0 !important;

width: 100%;
height: 80vh;
object-fit: cover;
overflow-y: hidden;
backdrop-filter: brightness(15%) blur(5px);
background-size: contain;
background-image: url(https://wallpaperaccess.com/full/207892.jpg);

`;
const Box2 = styled.div`
width: 100%;
padding: 0 !important;

height: 80vh;
object-fit: cover;
overflow-y: hidden;

background-size: contain;
background-image: url(https://images.hdqwalls.com/wallpapers/reyna-valorant-4k-1k.jpg);

`;
const Box3 = styled.div`
width: 100%;
height: 80vh;
object-fit: cover;
overflow-y: hidden;
overflow-x: hidden;
background-repeat: no-repeat;

background-size: contain;
background-image: url(https://webapi3.adata.com/storage/product/1020_mera_rog%E5%AE%98%E7%B6%B2%E7%89%B9%E8%89%B2%E5%9C%96_06_type2.jpg);

`;
const StyledSlider = styled(Slider)`
  .slick-slide {
    height: 80vh;
    overflow-y: hidden;

  }
  .slick-slide div {
    outline: none;
    width: 100%;
    height: 80vh;
    overflow-y: hidden;

    margin: 0 auto;
  }
`;
export { StyledSlider, Box, Box2, Box3 };
