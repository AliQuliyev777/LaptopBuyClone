import React, { useState, useEffect } from 'react';
import '../Css/LaptopView.css';
import { Link } from 'react-router-dom';
import LaptopPageImageClick from './LaptopPageImageClick';
import LaptopPageInfo from './LaptopPageInfo';
import LaptopPageImageClickMobile from './LaptopPageImageClickMobile';
import LaptopPageInfoTable from './LaptopPageInfoTable';
import LaptopPagerightside from './LaptopPagerightside';

const LaptopPage = () => {
    const [isImageClickVisible, setIsImageClickVisible] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isInfoVisible, setIsInfoVisible] = useState(false); // Add this state
    const [isWideScreen, setIsWideScreen] = React.useState(window.innerWidth <= 767);

    React.useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth <= 767);
        };

        window.addEventListener('resize', handleResize);

        // Component unmount olduğunda event listener'ı temizleyin
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0); // Sayfa yüklendiğinde en üstten başlamak için
    }, []);
    const imageUrls = [
        "https://content.ibuypower.com/cdn-cgi/image/width=1920,format=auto,quality=75/https://content.ibuypower.com/Images/Components/26430/NP7861D-01-2400.png?v=19fa40b252f96f19a8a4fc233dcf8f201a49ec64",
        "https://content.ibuypower.com/cdn-cgi/image/width=1920,format=auto,quality=75/https://content.ibuypower.com/Images/Components/26430/NP7861D-04-2400.png?v=19fa40b252f96f19a8a4fc233dcf8f201a49ec64",
        "https://content.ibuypower.com/cdn-cgi/image/width=1920,format=auto,quality=75/https://content.ibuypower.com/Images/Components/26430/NP7861D-05-2400.png?v=19fa40b252f96f19a8a4fc233dcf8f201a49ec64",
        "https://content.ibuypower.com/cdn-cgi/image/width=1920,format=auto,quality=75/https://content.ibuypower.com/Images/Components/26430/NP7861D-02-2400.png?v=19fa40b252f96f19a8a4fc233dcf8f201a49ec64",
        "https://content.ibuypower.com/cdn-cgi/image/width=1920,format=auto,quality=75/https://content.ibuypower.com/Images/Components/26430/NP7861D-03-2400.png?v=19fa40b252f96f19a8a4fc233dcf8f201a49ec64",
        "https://content.ibuypower.com/cdn-cgi/image/width=1920,format=auto,quality=75/https://content.ibuypower.com/Images/Components/26430/NP7861D-07-2400.png?v=19fa40b252f96f19a8a4fc233dcf8f201a49ec64"
    ];
    useEffect(() => {
        const handleBodyOverflow = () => {
            document.body.style.overflow = isImageClickVisible || isInfoVisible ? 'hidden' : 'auto';
        };

        handleBodyOverflow();

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isImageClickVisible, isInfoVisible]);

    const showFullSpecClick = () => {
        setIsInfoVisible(true);
    };

    const handleImageClick = (index) => {
        if (!isImageClickVisible) {
            setSelectedImageIndex(index);
            setIsImageClickVisible(false);
        }
    };

    return (
        <>
            <LaptopPageImageClickMobile imageUrls={imageUrls} />


            {isImageClickVisible && (
                <LaptopPageImageClick
                    imageUrls={imageUrls}
                    selectedImageIndex={selectedImageIndex}
                    onImageClick={() => setIsImageClickVisible(false)}
                    isVisible={isImageClickVisible}
                />

            )}

            <div className="LaptopPageDesktopsMain">

                <div className="LaptopPageimage">

                    <div className="LaptopPageimagegallery">

                        {imageUrls.map((imageUrls, index) => (
                            <div
                                className={`LaptopPageimagegalleryone ${selectedImageIndex === index ? 'selected' : ''}`}
                                key={index}
                                onClick={() => handleImageClick(index)}
                            >
                                <img src={imageUrls} alt="" />
                            </div>
                        ))}


                    </div>
                    <div className="LaptopPageimageInside">
                        <div className="Modal">
                            {selectedImageIndex !== null && (
                                <img
                                    src={imageUrls[selectedImageIndex]}
                                    alt=""
                                    onClick={() => setIsImageClickVisible(true)}
                                />
                            )}
                        </div>

                    </div>


                </div>

                <div className="LaptopPagerightside">
                    <LaptopPagerightside />
                    <Link className="showFullSpecClick12" onClick={showFullSpecClick}><span>Show Full Spec</span></Link>
                    {isInfoVisible && (
                        <LaptopPageInfo
                            selectedImageIndex={selectedImageIndex}
                            imageUrls={imageUrls}
                            onImageClick={() => setIsInfoVisible(false)}
                        />
                    )}

                    <p>QTY: <span>
                        <select ><option value="1">1</option></select></span>
                    </p>
                    <div className="button_btn_container___LWS5 ">
                        <button className="button_loading_button__U3XYZ ">Add to Card</button>
                    </div>
                    <div>
                        {isWideScreen && <LaptopPageInfoTable />}
                        {/* Diğer bileşenler buraya eklenmeli */}
                    </div>
                </div>

            </div>


        </>
    );
};

export default LaptopPage;
