import React from 'react';
import '../Css/Home.css'
// import {Link } from 'react-router-dom';

const TopProduct = () => {
    return (
        <header className="TopProduct">
            <div className="TopProductDiv">
                <h4>TOP SELLING PRODUCTS</h4>
                <div className="TopProductDesktopAll">
                    <div className="TopProductDesktop1">
                        <img src="https://xoticpc.com/cdn/shop/files/1024_db29ebaa-4020-47bb-b698-60401a2730bb_1024x1024.png?v=1688053164" alt="" />
                        <div className="TopProductDesktopText">
                            <h3>MSI Thin GF63 12VE-XO1 Gaming Laptop</h3>
                            <p>Starting at:</p>
                            <div className='gf_product-prices' data-oldcurrency="USD">
                                <span>$899.00</span>
                            </div>
                            <button>asdasdas</button>

                        </div>
                        
                    </div>
                    <div className="TopProductDesktop1">
                        <img src="https://xoticpc.com/cdn/shop/files/G2OptimalRTS_1024x1024.png?v=1701464895" alt="" />
                        <div className="TopProductDesktopText">
                            <h3>MSI Thin GF63 12VE-XO1 Gaming Laptop</h3>
                            <p>Starting at:</p>
                            <div className='gf_product-prices' data-oldcurrency="USD">
                                <span>$899.00</span>
                            </div>
                            <button>asdasdas</button>

                        </div>
                    </div>
                    <div className="TopProductDesktop1">
                        <img src="https://xoticpc.com/cdn/shop/products/02_FA707_1024x1024.png?v=1677171057" alt="" />
                        <div className="TopProductDesktopText">
                            <h3>MSI Thin GF63 12VE-XO1 Gaming Laptop</h3>
                            <p>Starting at:</p>
                            <div className='gf_product-prices' data-oldcurrency="USD">
                                <span>$899.00</span>
                            </div>
                            <button>asdasdas</button>

                        </div>
                    </div>
                    <div className="TopProductDesktop1">
                        <img src="https://xoticpc.com/cdn/shop/files/Main_H9_Flow_1024x1024.png?v=1684191158" alt="" />
                        <div className="TopProductDesktopText">
                            <h3>MSI Thin GF63 12VE-XO1 Gaming Laptop</h3>
                            <p>Starting at:</p>
                            <div className='gf_product-prices' data-oldcurrency="USD">
                                <span>$899.00</span>
                            </div>
                            <button>asdasdas</button>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default TopProduct;