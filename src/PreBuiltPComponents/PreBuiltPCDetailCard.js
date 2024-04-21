<<<<<<< HEAD
=======
<<<<<<< Updated upstream
import React, { useState } from 'react';
import '../Css/PreBuiltPC.css';
import { Link } from 'react-router-dom';

const PreBuiltPCDetailCard = () => {
    // API'den gelen veri listesi
    const apiDataList = [
        {
            "id": 12,
            "title": "XOTIC PC G3 Meshify Extreme Ready to Ship",
            "description": "Royal_Mirage Sport Brown Perfu...",
            "price": '$1,649.00',
            "discountPercentage": 15.66,
            "rating": 4,
            "stock": 52,
            "brand": "AMD Ryzen™ 5 7600",
            "category": "AUS TUF GAMING A620M-PLUS WIFI",
            "thumbnail": "GeForce RTX™ 4060 Ti",
            "images": [
                "https://i5.walmartimages.com/seo/MSI-GF63-Thin-11UC-1276US-15-6-Gaming-Laptop-144Hz-Intel-Core-i5-11400H-NVIDIA-GeForce-RTX-3050-4GB-16GB-DDR4-Memory-512GB-NVMe-SSD-Windows-11_c53d3561-5068-4ef5-b81b-b61fbe3bd189.1026f3576f0aa70bb082c66e850f5458.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
                "https://i5.walmartimages.com/asr/169fbcb8-037d-4915-9106-b09642915a7f.2b19bc70c4982d172221dfcc99e76fa8.png?odnHeight=640&odnWidth=640&odnBg=FFFFFF"
            ]
        },
        {
            "id": 11,
            "title": "XOTIC PC G3 Meshify Extreme Ready to Ship",
            "description": "Royal_Mirage Sport Brown Perfu...",
            "price": 40,
            "discountPercentage": 15.66,
            "rating": 4,
            "stock": 52,
            "brand": "Royal_Miragedssdsdsdsd",
            "category": "AUS TUF GAMING A620M-PLUS WIFI",
            "thumbnail": "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
            "images": [
                "https://i5.walmartimages.com/seo/MSI-GP75-Leopard-10SFK-Gaming-Laptop-Intel-Core-i7-10750H-2-60GHz-10th-Gen-17-3-FHD-Display-32GB-RAM-512GB-SSD-NVIDIA-GeForce-RTX-2070-Windows-11-Hom_255457f8-3d4d-436f-b1cc-3b03497fab7d.cc13c8a62a6e0bbe153e501c8edeed1d.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
                "https://i5.walmartimages.com/asr/169fbcb8-037d-4915-9106-b09642915a7f.2b19bc70c4982d172221dfcc99e76fa8.png?odnHeight=640&odnWidth=640&odnBg=FFFFFF"
            ]
        },
        // Diğer öğeler buraya eklenebilir
    ];


    // Her kart için ayrı hovered durumu
    const [hoveredStates, setHoveredStates] = useState(Array(apiDataList.length).fill(false));

    // Hover durumunu güncelleme fonksiyonu
    const handleHover = (index, isHovered) => {
        setHoveredStates(prevStates => {
=======
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Css/LaptopView.css';
import LaptopFilters from '../PreBuiltPComponents/PreBuiltPcFiltersMenu';

const LaptopMainDetailCard = () => {
    const [laptops, setLaptops] = useState([]);
    const [hoveredStates, setHoveredStates] = useState([]);
    const [sortBy, setSortBy] = useState(null);
    const [, setSortOrder] = useState('asc');
    const [openIndex, setOpenIndex] = useState(null);
    const [isFiltersVisible, setFiltersVisible] = useState(false);
    const [selectedValues, setSelectedValues] = useState({});
    const [sortedFilteredLaptops, setSortedFilteredLaptops] = useState([]);
    const [originalLaptops, setOriginalLaptops] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:44379/api/home');
                const allLaptops = response.data;
                const lastFiveLaptops = allLaptops.slice(-5); // Get the last 5 laptops
                setLaptops(lastFiveLaptops);
                setHoveredStates(Array(lastFiveLaptops.length).fill(false));
                setSortedFilteredLaptops(lastFiveLaptops); // Initialize with the fetched laptops
                console.log('API call successful:', lastFiveLaptops);
                setOriginalLaptops(response.data);

            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };
    
        fetchData();
    }, []);
    

    
    const handleHover = (index, isHovered) => {
        setHoveredStates((prevStates) => {
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
            const newHoveredStates = [...prevStates];
            newHoveredStates[index] = isHovered;
            return newHoveredStates;
        });
    };

<<<<<<< HEAD
=======
<<<<<<< Updated upstream
    return (
        <>
            {apiDataList.map((apiData, index) => (
                <div
                    key={apiData.id}
                    className="PreBuiltPCDetailCard"
                    onMouseEnter={() => handleHover(index, true)}
                    onMouseLeave={() => handleHover(index, false)}
                >
                    {hoveredStates[index] ? (
                        <div className="PreBuiltPCDetailCardimg">
                            <Link to={`/product/${apiData.id}`}>
                                <img src={apiData.images[1]} alt="" />
                            </Link>
                        </div>
                    ) : (
                        <div className="PreBuiltPCDetailCardimg">
                            <Link to={`/product/${apiData.id}`}>
                                <img src={apiData.images[0]} alt="" />
                            </Link>
                        </div>
                    )}
                    <div className="PreBuiltPCDetailCardflexx">

                    <div className="PreBuiltPCDetailCardtext">
                        <span>{apiData.title}</span>
                    </div>
                    <div className="PreBuiltPCDetailCartDetail">
                        <ul>
                            <li>aa
                                <p>{apiData.description}</p>
                            </li>
                            <li>
                                <p>Price: ${apiData.price}</p>
                            </li>
                            <li>
                                <p>Rating: {apiData.rating}</p>
                            </li>
                            <li>
                                <p>Rating: {apiData.brand}</p>
                            </li>
                            <li>
                                <p>Rating: {apiData.category}</p>
                            </li>
                        </ul>
                    </div>
                    <div className="PreBuiltPCDetailCartDetaisnize-price-list">
                        <span>{apiData.price}</span>
                        <p className="text-sky-400/100">  <span>Or from</span>
                            <strong>{apiData.price}</strong>
                        </p>
                    </div>
                    </div>

                </div>
            ))}
=======
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
    const handleSort = (key) => {
        let sortedLaptops;
        let order = 'asc';

        if (key === '') {
            // Reset to initial state
            sortedLaptops = [...originalLaptops];
            setSortBy('');
            setSortedFilteredLaptops(sortedLaptops);
            setSortOrder(order);
            return;
        }

        switch (key) {
            case 'laptopNameAsc':
                sortedLaptops = [...sortedFilteredLaptops].sort((a, b) => a.laptopName.localeCompare(b.laptopName));
                break;
            case 'laptopNameDesc':
                sortedLaptops = [...sortedFilteredLaptops].sort((a, b) => b.laptopName.localeCompare(a.laptopName));
                break;
            case 'laptopPriceAsc':
                sortedLaptops = [...sortedFilteredLaptops].sort((a, b) => a.laptopPrice - b.laptopPrice);
                break;
            case 'laptopPriceDesc':
                sortedLaptops = [...sortedFilteredLaptops].sort((a, b) => b.laptopPrice - a.laptopPrice);
                order = 'desc';
                break;
            default:
                sortedLaptops = [...sortedFilteredLaptops];
                break;
        }

        setSortBy(key);
        setSortedFilteredLaptops(sortedLaptops);
        setSortOrder(order);
    };


    const handleButtonClick = () => {
        setFiltersVisible(!isFiltersVisible);
    };

    const handleDropdownToggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));

        // Reset selected values when a different dropdown is clicked
        if (openIndex !== null && openIndex !== index) {
            setSelectedValues({});
        }
    };
    // !LaptopFiltersChechbox !!!!!!
    // LaptopMainDetailCard.js
    const handleCheckboxChange = (value) => {
        setSelectedValues((prevValues) => {
            // Toggle the checkbox value
            const newValues = { ...prevValues, [value]: !prevValues[value] };
            return newValues;
        });
    };

    const filteredLaptops = sortedFilteredLaptops.filter((laptop) => {
        const laptopCompany = laptop.laptopCompany || '';
        const laptopDisplay = laptop.laptopDisplay || '';
        const laptopProcessor = laptop.laptopProcessor || '';

        // Sadece seçili olan checkbox'lara göre filtrele
        return Object.entries(selectedValues).every(([key, value]) => {
            if (value && Array.isArray(value) && value.includes(laptop[key])) {
                return true;
            } else if (value && !Array.isArray(value) && laptop[key] === value) {
                return true;
            } else if (!value) {
                return true;
            }
            return selectedValues[laptopCompany] || selectedValues[laptopDisplay] || selectedValues[laptopProcessor];
        });
    });



    return (
        <>

            <LaptopFilters
                laptops={laptops}
                openIndex={openIndex}
                handleDropdownToggle={handleDropdownToggle}
                handleCheckboxChange={handleCheckboxChange}
                selectedValues={selectedValues}
            />
            <span className="PreBuiltPcFiltersMobileButtton" onClick={handleButtonClick}></span>
            <div className="PreBuiltPcFiltersMenuMain">

            </div>
            <span className="PreBuiltPcFiltersMobileButtton" onClick={handleButtonClick}></span>


            {/* Sorting buttons */}
            <div className="LaptopFilter1212">
                <label htmlFor="sortSelect">Sort by:</label>
                <select id="sortSelect" onChange={(e) => handleSort(e.target.value)} value={sortBy || ''}>
                    <option value="">Select</option>
                    <option value="laptopNameAsc">Name (A-Z)</option>
                    <option value="laptopNameDesc">Name (Z-A)</option>
                    <option value="laptopPriceAsc">Price (Low to High)</option>
                    <option value="laptopPriceDesc">Price (High to Low)</option>
                </select>
            </div>

            {/* Laptop cards */}
            {laptops.length > 0 ? (
                filteredLaptops.map((laptop, index) => (
                    <div
                        key={laptop.laptopId}
                        className="PreBuiltPCDetailCard12"
                        onMouseEnter={() => handleHover(index, true)}
                        onMouseLeave={() => handleHover(index, false)}
                    >
                        {hoveredStates[index] ? (
                            <div className="PreBuiltPCDetailCardimg">
                                <span className="snize-thumbnail">
                                <Link to={`/LaptopPage/${laptop.laptopId}`}>
                                    <img src={laptop.laptopImage1} alt="" />
                                </Link>
                                </span>


                            </div>
                        ) : (
                            <div className="PreBuiltPCDetailCardimg">
                                <span className="snize-thumbnail">
                                    <Link to={`/LaptopPage/${laptop.laptopId}`}>
                                        <img src={laptop.laptopImage2} alt="" />
                                    </Link>

                                </span>
                            </div>
                        )}
                        <div className="PreBuiltPCDetailCardflexx">
                            <div className="PreBuiltPCDetailCardtext">
                                <span>{laptop.laptopName}</span>
                            </div>
                            <div className="PreBuiltPCDetailCartDetail">
                                <ul>
                                    <li>
                                        <p>{laptop.description}</p>
                                    </li>
                                    <li>
                                        <p>Price: ${laptop.laptopPrice}</p>
                                    </li>
                                    <li>
                                        <p>Rating: {laptop.rating}</p>
                                    </li>
                                    <li>
                                        <p>Brand: {laptop.laptopCompany}</p>
                                    </li>
                                    <li>
                                        <p>Category: {laptop.category}</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="PreBuiltPCDetailCartDetaisnize-price-list">
                                <span>{laptop.price}</span>
                                <p className="text-sky-400/100">
                                    <span>Or from</span>
                                    <strong>{laptop.laptopPrice}</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No laptops available</p>
            )}
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
        </>
    );
};

<<<<<<< HEAD
export default LaptopMainDetailCard;
=======
<<<<<<< Updated upstream
export default PreBuiltPCDetailCard;
=======
export default LaptopMainDetailCard;
>>>>>>> Stashed changes
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
