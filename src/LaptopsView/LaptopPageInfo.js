import React, { useState, useEffect } from 'react';
import '../Css/LaptopView.css';
import LaptopPageInfoTable from './LaptopPageInfoTable';

const LaptopPageInfo = ({ imageUrls, onImageClick, isVisible }) => {
    const [isImageClickVisible, setIsImageClickVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);

    const closeImageClick = () => {
        // Implement your close image logic here
        onImageClick(false);
    };

    // Sayfa yüklendiğinde ilk resmi görüntüle

    // Sayfa yüklendiğinde ilk resmi görüntüle
    useEffect(() => {
        if (imageUrls && imageUrls.length > 0) {
            setSelectedImage(imageUrls[0]);
        }
    }, [imageUrls]);

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
        setIsImageClickVisible(true);
    };

    return (
        <>
        <div className={`LaptopPageInfo ${isImageClickVisible ? 'visible' : ''}`}>
                <div className="LaptopPageInfoSlide">
                    {/* Tam boyutlu görüntüyü göstermek için resme onClick eklenmiştir */}
                    <div className="LaptopPageInfoSlidethumbMain" onClick={() => handleImageClick(selectedImage)}>
                        {selectedImage && <img src={selectedImage} alt="" />}
                    </div>
                    <div className="LaptopPageInfoSlidethumb">
                    {imageUrls.map((imageUrl, index) => (
                        <div
                            key={index}
                            className={`customThumbSlideClass ${selectedImage === imageUrl ? 'selected' : ''}`}
                            onClick={() => handleImageClick(imageUrl)}
                        >
                            <img src={imageUrl} alt={`Thumb ${index + 1}`} />
                        </div>
                    ))}
                    </div>
                </div>

                <div className="LaptopPageInfoTable">
                    <button className="LaptopPageInfoTablebutton" onClick={closeImageClick}>
                        <i class="fa-solid fa-xmark"></i>
                    </button>

              <LaptopPageInfoTable/>

                </div>
            </div>
        </>
    );
};

export default LaptopPageInfo;
