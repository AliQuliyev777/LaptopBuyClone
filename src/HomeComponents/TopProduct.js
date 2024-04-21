<<<<<<< Updated upstream
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
=======
import React, { useState, useEffect } from 'react';
import '../Css/Home.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

const TopProduct = () => {
    const [laptops, setLaptops] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:44379/api/home');
                setLaptops(response.data.slice(0, 4)); // Limiting to the first 3 items
                console.log('API call successful:', response.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <header className="TopProduct">
            <div className="TopProductDiv">
                <div className="TopProductDesktopAll">
                    {laptops.map((laptop, index) => (
                        <div key={index} className="TopProductDesktop1">
                            <img src={laptop.laptopImage1} alt={laptop.laptopImage1} />
                            <div className="TopProductDesktopText">
                                <h3>{laptop.laptopName}</h3>
                                <p>Starting at:</p>
                                <div className='gf_product-prices' data-oldcurrency="USD">
                                    <span>{laptop.laptopPrice}</span>
                                </div>
                                <Link to={`/LaptopPage/${laptop.laptopId}`}>
                                   <button>
                                   Show Laptop
                                    </button> 
                                </Link>

                            </div>
                        </div>
                    ))}
>>>>>>> Stashed changes
                </div>
            </div>
        </header>
    );
}

<<<<<<< Updated upstream
export default TopProduct;
=======
export default TopProduct;
>>>>>>> Stashed changes
