<<<<<<< HEAD
=======
<<<<<<< Updated upstream
import React, { useState } from 'react';
import '../Css/PreBuiltPC.css';
import { Link } from 'react-router-dom';

const PreBuiltPCfilters = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Title: A-Z'); // Default value

    const [dropdownOptions] = useState([
        'Title: A-Z',
        'Title: Z-A',
        'Date: New to Old',
        'Date: Old to New',
        'Price: Low to High',
        'Rating: Low to High',
        'Rating: High to Low',
        'Total reviews: Low to High',
        'Total reviews: High to Low',
        // Add other options here
    ]);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setDropdownVisible(false); // Close the dropdown when an option is selected.
    };

    const handleHover = () => {
        if (window.innerWidth > 767) {
            setDropdownVisible(true);
        }
    };

    const handleLeave = () => {
        if (window.innerWidth > 767) {

            setDropdownVisible(false);
        };
    };
    const handleToggleDropdown = () => {
        if (window.innerWidth <= 767) {
            setDropdownVisible(!isDropdownVisible);
        }
    };
=======
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
import React, {  } from 'react';
import '../Css/PreBuiltPC.css';

const PreBuiltPCfilters = () => {

    
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
    return (
        <>

            <div className="PreBuiltPCMain">
                <h1>Pre-Built Gaming Computers</h1>

                <div className="PreBuiltPCDesktops">
                    <div className="PreBuiltPCDesktopsTop">

                        <p className='flex'>
                            <p className='mx-1 text-white'>Showing </p><span className='text-white'> 10</span><p className='mx-1 text-white	'> results for "Pre-Built Gaming Computers"</p>
                        </p>
                    </div>

                    <div className="PreBuiltPCDesktopsTop2flex">

<<<<<<< HEAD
=======
<<<<<<< Updated upstream
                        <div
                            className="PreBuiltPCDesktopsTop2"
                            onMouseEnter={handleHover}
                            onMouseLeave={handleLeave}
                            onClick={handleToggleDropdown}
                        >

                            {selectedOption && (
                                <div className="PreBuiltPCDesktopsTop2paneldropdown">
                                    <div className="selectedOptionTextddiv">
                                        <span className="selectedOptionText">
                                            {selectedOption.slice(0, 20)}
                                        </span>
                                    </div>
                                    {isDropdownVisible && (
                                        <div className="PreBuiltPCDesktopsTop2paneldropdownul">
                                            <ul>
                                                {dropdownOptions.map((option, index) => (
                                                    <li key={index}>
                                                        <Link to="#">
                                                            <p
                                                                onClick={() => handleOptionClick(option)}
                                                                className={
                                                                    option === selectedOption ? 'selectedOption' : ''
                                                                }
                                                            >
                                                                {option}
                                                            </p>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )}

                        </div>
=======
>>>>>>> Stashed changes
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898

                
                    </div>
                </div>

            </div>

        </>
    );
};
export default PreBuiltPCfilters;
