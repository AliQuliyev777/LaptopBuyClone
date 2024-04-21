import React, { useState, useEffect } from 'react';
import '../Css/LaptopView.css';
import LaptopPageInfoTable from './LaptopPageInfoTable';
import { useParams } from 'react-router-dom';

const LaptopPageInfo = ({ laptops, onImageClick }) => {
    const [isImageClickVisible, setIsImageClickVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const { laptopId } = useParams();

    const closeImageClick = () => {
        onImageClick(false);
    };

    useEffect(() => {
        setIsPageLoaded(true);
    }, []);

    useEffect(() => {
        if (laptops && laptops.length > 0) {
            const selectedLaptop = laptops.find(laptop => laptop.laptopId === parseInt(laptopId));
            if (selectedLaptop) {
                setSelectedImage(selectedLaptop.laptopImage2);
                setIsImageClickVisible(true);
            }
        }
    }, [laptops, laptopId]);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
        setIsImageClickVisible(true);
    };

    const laptop = laptops.find(laptop => laptop.laptopId === parseInt(laptopId));

    if (!laptop) {
        return <div>Laptop not found</div>;
    }

    return (
        <div className={`LaptopPageInfo ${!isImageClickVisible && isPageLoaded ? 'page-loaded' : ''}`}>
            <div className="LaptopPageInfoSlide">
                <div className="LaptopPageInfoSlidethumb">
                    {laptop && (
                        <React.Fragment>
                            <img src={laptop.laptopImage1} alt="" onClick={() => handleImageClick(laptop.laptopImage1)} style={{ backgroundColor: selectedImage === laptop.laptopImage1 && isImageClickVisible ? 'black' : '' }} />

                            <img src={laptop.laptopImage2} alt="" onClick={() => handleImageClick(laptop.laptopImage2)} style={{ backgroundColor: selectedImage === laptop.laptopImage2 && isImageClickVisible ? 'black' : '' }} />
                            <img src={laptop.laptopImage3} alt="" onClick={() => handleImageClick(laptop.laptopImage3)} style={{ backgroundColor: selectedImage === laptop.laptopImage3 && isImageClickVisible ? 'black' : '' }} />
                            <img src={laptop.laptopImage4} alt="" onClick={() => handleImageClick(laptop.laptopImage4)} style={{ backgroundColor: selectedImage === laptop.laptopImage4 && isImageClickVisible ? 'black' : '' }} />
                            <img src={laptop.laptopImage5} alt="" onClick={() => handleImageClick(laptop.laptopImage5)} style={{ backgroundColor: selectedImage === laptop.laptopImage5 && isImageClickVisible ? 'black' : '' }} />
                        </React.Fragment>
                    )}
                </div>


                {isImageClickVisible && (
                    <div className="LaptopPageInfoSlidethumbMain">
                        <img src={selectedImage} alt="" />
                    </div>
                )}
            </div>

            <div className="LaptopPageInfoTable">
                <button className="LaptopPageInfoTablebutton" onClick={closeImageClick}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <LaptopPageInfoTable laptops={laptops} />
            </div>
        </div>
    );
};

export default LaptopPageInfo;
