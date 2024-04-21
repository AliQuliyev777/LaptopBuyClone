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
