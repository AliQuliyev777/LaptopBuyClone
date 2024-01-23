import React, { useState } from 'react';
import '../Css/PreBuiltPC.css';
import '../Css/PreBuiltPcMobile.css';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;

const PreBuiltPcFiltersMobile = () => {
    const initialCategories = [
        { title: 'Manufacturer', id: 'manufacturer', items: ['Item1', 'Item2', 'Item3', 'Item3', 'Item3', 'Item3', 'sd', 'sd', 'd'] },
        { title: 'Graphics Card', id: 'graphicsCard', items: ['NVIDIA', 'AMD'] },
        { title: 'sdsdsdsd Card', id: 'sad', items: ['NVIDIA', 'AMD'] },
        { title: 'sdsdsdsd Card', id: 'sd', items: ['NVIDIA', 'AMD'] },
        { title: 'sdsdsdsd Card', id: 'sd', items: ['NVIDIA', 'AMD'] },
        { title: 'sdsdsdsd Card', id: 'sd', items: ['NVIDIA', 'AMD'] },
        { title: 'sdsdsdsd Card', id: 'sd', items: ['NVIDIA', 'AMD'] },
        { title: 'sdsdsdsd Card', id: 'sd', items: ['NVIDIA', 'AMD'] },
        // Add other categories with their respective items
    ];

    const [categories] = useState(initialCategories);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(true);

    const toggleFilterVisibility = (categoryId) => {
        setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
        setIsFiltersVisible(true); // Show the filters when a category is selected
    };

    const handleBackArrowClick = () => {
        setIsFiltersVisible(false); // Hide the filters when the back arrow is clicked
    };

    const handleXMarkClick = () => {
        console.log()
        setIsMenuVisible(false); // Hide the entire menu when the "x" mark is clicked
    };

    return (
        <>

            {isMenuVisible && (

                <div
                    className="PreBuiltPcFiltersMobileMainMenu"
                    style={{ visibility: isMenuVisible ? 'visible' : 'hidden' }}
                >
                    <span onClick={handleXMarkClick}>kapa </span>
                    {/* Rest of your code */}
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="snize-product-filters-list-container"
                            onClick={() => toggleFilterVisibility(category.id)}
                        >
                            <span className="snize-product-filter-title">{category.title}</span>
                        </div>
                    ))}


                    {selectedCategory && (
                        <div
                            className={`snize_product_filter_${selectedCategory} ${isFiltersVisible ? 'visible' : 'hidden'}`}
                        >
                            <div className="snize-product-filter-container">
                                <div className="snize-product-filterUp flex" onClick={handleBackArrowClick}>
                                    <i className="fa-solid fa-arrow-left"></i>
                                    <h4>Filters</h4>
                                </div>
                                <ul >
                                    {categories
                                        .find((category) => category.id === selectedCategory)
                                        .items.map((item, index) => (
                                            <li  key={index}>
                                                <label>
                                                    <div className="snize-filter-checkbox">
                                                        <input
                                                            className="snize-product-filters-checkbox"
                                                            type="checkbox"
                                                            name={`snize_facet_${selectedCategory}_${index}`}
                                                        />
                                                        <span className="needsclick">{item}</span>
                                                    </div>
                                                    
                                                    <span className="needsclick">
                                                        <span className="snize-filter-variant-count"></span>
                                                    </span>
                                                </label>
                                            </li>
                                            
                                        ))}
                                        
                                </ul>
         
                            </div>
                            
                        </div>
                        
                    )}
                    
                    <div >

                    <button className="snize-product-filters-show-products">Show 159 products</button>
                    <button className="snize-product-filters-show-products">Reset filters</button>
                    </div>

                </div>
            )}

        </>
    );
};

export default PreBuiltPcFiltersMobile;
