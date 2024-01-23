import React from 'react';
import '../Css/Home.css';
import ReklamDesktop from '../HomeComponents/ReklamDesktop';
import ViewsDesktop from '../HomeComponents/ViewsDesktop';
import TopProduct from '../HomeComponents/TopProduct';
import NewProduct from '../HomeComponents/NewProduct';
import ProductSlide from '../HomeComponents/ProductSlide';
import XoticPcRating from '../HomeComponents/XoticPcRating';


const Home = () => {
    return (
        <>
            <ReklamDesktop />
            <ViewsDesktop />
            <TopProduct />
            <NewProduct />
            <ProductSlide />
            <XoticPcRating />
        </>
    );
}

export default Home;