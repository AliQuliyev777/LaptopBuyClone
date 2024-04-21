<<<<<<< Updated upstream
import React, { useState } from 'react';
import '../Css/PreBuiltPC.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import PreBuiltPcFiltersMobile from './PreBuiltPcFiltersMobile';

const PreBuiltPcFiltersMenu = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [isFiltersVisible, setFiltersVisible] = useState(false);

    const handleButtonClick = () => {
      setFiltersVisible(!isFiltersVisible);
    };
    const handleDropdownToggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    // Örnek bir dizi
    const menuItems = [
        {
            name: 'XOTIC PC',
            item2: 'Full-Towerwerewerwer',
        },
        {
            name: 'Another Vendor',
        },
        {
            name: 'XOTIC fdfdfPC',
            item2: 'Full-Towerwerewerwer',
        },
        {
            name: 'Another Ven32dfdor',
        },
        {
            name: 'sadasdadr',
            item2: 'Full-Towerwerewerwer',
        },
        {
            name: 'Another Ven32dfdor',
            item2: 'Full-Towerwerewerwer',
        },
    ];

    const customTexts = ['Manufacturer', 'Form Factor', 'Graphics', 'Processor', 'Amount of RAM', 'Rating'];

    return (
        <>
 <span className="PreBuiltPcFiltersMobileButtton" onClick={handleButtonClick}>
        sdsdsadasd
      </span>
            <div className="PreBuiltPcFiltersMenuMain">
                
                <div className="PreBuiltPcFiltersMenuMaincheckbox">
                    
                    {menuItems.map((item, index) => (
                        <div key={index} className="snize-filters-dropdown-content">
                            <p className='CustomText' onClick={() => handleDropdownToggle(index)}>{customTexts[index]} <FontAwesomeIcon icon={faCaretDown} />
                            </p>
                            <ul className={`snize-product-filters-list ${openIndex === index ? 'open' : ''}`}>
                                <li className="flex">

                                    <label className="flex">

                                        <div className="snize-filter-checkbox">

                                            <input
                                                className="snize-product-filters-checkbox"
                                                type="checkbox"
                                                name="vendor"
                                                value={item.name}
                                            />

                                            <span className="needsclick"></span>
                                        </div>
                                        <span className={`needsclick ${openIndex === index ? 'open' : ''}`}>{item.name}<span className="snize-filter-variant-count"></span></span>
                                    </label>
                                </li>
                                {item.item2 && (
                                    <li className="flex">
                                        <label className="flex">
                                            <div className="snize-filter-checkbox">
                                                <input
                                                    className="snize-product-filters-checkbox"
                                                    type="checkbox"
                                                    name="vendor"
                                                    value={item.item2}
                                                />

                                                <span className="needsclick"></span>
                                            </div>
                                            <span className={`needsclick ${openIndex === index ? 'open' : ''}`}>{item.item2}<span className="snize-filter-variant-count"></span></span>
                                        </label>
                                    </li>
                                )}
                            </ul>
                        </div>
                    ))}
                </div>
                
            </div>
            {isFiltersVisible && <PreBuiltPcFiltersMobile />}

       
        </>
    );
};

export default PreBuiltPcFiltersMenu;
=======
// LaptopFilters.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
const MAX_SYMBOLS = 10; // Maksimum simge sayısını ayarlayın

const truncateText = (text) => {
    if (text.length <= MAX_SYMBOLS) {
        return text;
    }
    return text.slice(0, MAX_SYMBOLS) + '...';
};


const LaptopFilters = ({
    laptops,
    openIndex,
    handleDropdownToggle,
    handleCheckboxChange,
    selectedValues,
}) => {
    const hasLaptops = laptops && laptops.length > 0;

    return (
        <div className="PreBuiltPcFiltersMenuMain">
            {/* Laptop Company Filter */}
            <div className="PreBuiltPcFiltersMenuMaincheckbox">
                {hasLaptops && (
                    <div className="snize-filters-dropdown-content">
                        <p className='CustomText' onClick={() => handleDropdownToggle(0)}>
                            Laptop Company <FontAwesomeIcon icon={faCaretDown} />
                        </p>
                        <ul className={`snize-product-filters-list ${openIndex === 0 ? 'open' : ''}`}>
                            {laptops.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex">
                                    <label className="flex">
                                        <div className="snize-filter-checkbox">
                                            <input
                                                className="snize-product-filters-checkbox"
                                                type="checkbox"
                                                value={item.laptopCompany}
                                                onChange={() => handleCheckboxChange(item.laptopCompany)}
                                                checked={selectedValues[item.laptopCompany]}
                                            />
                                            <span className="needsclick"></span>
                                        </div>
                                        {item.laptopCompany && (
                                            <span className={`needsclick ${openIndex === 0 ? 'open' : ''}`}>
                                                {truncateText(item.laptopCompany)}
                                            </span>
                                        )}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Laptop Display Filter */}
            <div className="PreBuiltPcFiltersMenuMaincheckbox">
                {hasLaptops && (
                    <div className="snize-filters-dropdown-content">
                        <p className='CustomText' onClick={() => handleDropdownToggle(1)}>
                            Laptop Display <FontAwesomeIcon icon={faCaretDown} />
                        </p>
                        <ul className={`snize-product-filters-list ${openIndex === 1 ? 'open' : ''}`}>
                            {/* Map over unique laptopDisplay values */}
                            {[...new Set(laptops.map(item => item.laptopDisplay))].map((display, index) => (
                                <li key={index} className="flex">
                                    <label className="flex">
                                        <div className="snize-filter-checkbox">
                                            <input
                                                className="snize-product-filters-checkbox"
                                                type="checkbox"
                                                value={display}
                                                onChange={() => handleCheckboxChange(display)}
                                                checked={selectedValues[display]}
                                            />
                                            <span className="needsclick"></span>
                                        </div>
                                        {display && (
                                            <span className={`needsclick ${openIndex === 1 ? 'open' : ''}`}>
                                                {truncateText(display)}
                                            </span>
                                        )}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Laptop Resolution Filter */}
            <div className="PreBuiltPcFiltersMenuMaincheckbox">
                {hasLaptops && (
                    <div className="snize-filters-dropdown-content">
                        <p className='CustomText' onClick={() => handleDropdownToggle(2)}>
                            Laptop Display <FontAwesomeIcon icon={faCaretDown} />
                        </p>
                        <ul className={`snize-product-filters-list ${openIndex === 2 ? 'open' : ''}`}>
                            {/* Map over unique laptopDisplay values */}
                            {[...new Set(laptops.map(item => item.laptopProcessor))].map((display, index) => (
                                <li key={index} className="flex">
                                    <label className="flex">
                                        <div className="snize-filter-checkbox">
                                            <input
                                                className="snize-product-filters-checkbox"
                                                type="checkbox"
                                                value={display}
                                                onChange={() => handleCheckboxChange(display)}
                                                checked={selectedValues[display]}
                                            />
                                            <span className="needsclick"></span>
                                        </div>
                                        {display && (
                                            <span className={`needsclick ${openIndex === 2 ? 'open' : ''}`}>
                                                {truncateText(display)}
                                            </span>
                                        )}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Laptop Additional Display Filter */}
            {/* Implement similar logic for laptopAdditionalDisplay as done for laptopDisplay */}
        </div>
    );
};

export default LaptopFilters;
>>>>>>> Stashed changes
