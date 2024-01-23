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
