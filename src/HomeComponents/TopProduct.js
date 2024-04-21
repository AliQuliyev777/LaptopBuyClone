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
                </div>
            </div>
        </header>
    );
}

export default TopProduct;
