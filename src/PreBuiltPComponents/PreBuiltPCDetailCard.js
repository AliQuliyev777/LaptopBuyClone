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
            const newHoveredStates = [...prevStates];
            newHoveredStates[index] = isHovered;
            return newHoveredStates;
        });
    };

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
        </>
    );
};

export default LaptopMainDetailCard;