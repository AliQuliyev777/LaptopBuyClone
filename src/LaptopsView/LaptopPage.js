import React, { useState, useEffect } from 'react';
import '../Css/LaptopView.css';
import { Link } from 'react-router-dom';
<<<<<<< Updated upstream
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
=======
import LaptopPageInfo from './LaptopPageInfo';
import LaptopPageImageClickMobile from './LaptopPageImageClickMobile';
import LaptopPageInfoTable from './LaptopPageInfoTable';
// import LaptopPagerightside from './LaptopPagerightside';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LaptopPageMobile from './LaptopPageMobile';


const LaptopPage = ({ laptops }) => {

    const [isImageClickVisible, setIsImageClickVisible] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isInfoVisible, setIsInfoVisible] = useState(false);
    const [isWideScreen, setIsWideScreen] = React.useState(window.innerWidth <= 767);
    const { laptopId } = useParams();

    const addbasket = async () => {
        try {
            const response = await axios.get('https://localhost:44379/api/home/ShoppingCard/' + laptopId);
            console.log(response);

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            const successMessageP = document.createElement('p');
            successMessageP.textContent = 'Ürün başarıyla sepete eklendi!';
            successMessageP.classList.add('success-message');

            const laptopPageDesktopsMain = document.querySelector('.LaptopPageDesktopsMain');
            if (laptopPageDesktopsMain) {
                laptopPageDesktopsMain.appendChild(successMessageP);

                setTimeout(() => {
                    successMessageP.classList.add('fade-out');
                    setTimeout(() => {
                        successMessageP.remove();
                    }, 1000);
                }, 2000);

                // Başarılı olduğunda sayfa yenilensin
                setTimeout(() => {
                    window.location.reload();
                }, 0);
            } else {
                console.error('LaptopPageDesktopsMain bulunamadı.');
            }
        } catch (error) {
            console.error('Hata oluştu:', error);
        }
    };



>>>>>>> Stashed changes

    React.useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth <= 767);
        };

        window.addEventListener('resize', handleResize);

<<<<<<< Updated upstream
        // Component unmount olduğunda event listener'ı temizleyin
=======

>>>>>>> Stashed changes
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
<<<<<<< Updated upstream
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
=======
        window.scrollTo(0, 0);
    }, []);

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

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
=======
    const laptop = laptops && laptops.find(laptop => laptop.laptopId === parseInt(laptopId));

    if (!laptop) {
        return <div>Laptop not found</div>;
    }



    return (
        <>
            <LaptopPageImageClickMobile />
>>>>>>> Stashed changes

            <div className="LaptopPageDesktopsMain">

                <div className="LaptopPageimage">

                    <div className="LaptopPageimagegallery">
<<<<<<< Updated upstream

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
=======
                        <div className={`LaptopPageimagegalleryone ${selectedImageIndex === 0 ? 'selected' : ''}`} onClick={() => handleImageClick(0)}>
                            <img src={laptop.laptopImage1} alt="" />
                        </div>
                        <div className={`LaptopPageimagegalleryone ${selectedImageIndex === 1 ? 'selected' : ''}`} onClick={() => handleImageClick(1)}>
                            <img src={laptop.laptopImage2} alt="" />
                        </div>
                        <div className={`LaptopPageimagegalleryone ${selectedImageIndex === 2 ? 'selected' : ''}`} onClick={() => handleImageClick(2)}>
                            <img src={laptop.laptopImage3} alt="" />
                        </div>
                        <div className={`LaptopPageimagegalleryone ${selectedImageIndex === 3 ? 'selected' : ''}`} onClick={() => handleImageClick(3)}>
                            <img src={laptop.laptopImage4} alt="" />
                        </div>
                        <div className={`LaptopPageimagegalleryone ${selectedImageIndex === 4 ? 'selected' : ''}`} onClick={() => handleImageClick(4)}>
                            <img src={laptop.laptopImage5} alt="" />
                        </div>
                    </div>


>>>>>>> Stashed changes
                    <div className="LaptopPageimageInside">
                        <div className="Modal">
                            {selectedImageIndex !== null && (
                                <img
<<<<<<< Updated upstream
                                    src={imageUrls[selectedImageIndex]}
                                    alt=""
                                    onClick={() => setIsImageClickVisible(true)}
=======
                                    src={laptop[`laptopImage${selectedImageIndex + 1}`]}
                                    alt=""
>>>>>>> Stashed changes
                                />
                            )}
                        </div>

                    </div>
<<<<<<< Updated upstream


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


=======
                </div>

                <LaptopPageMobile laptops={laptops} />
                <div className="LaptopPagerightside">
                    <div className="LaptopPagerightside_right_side_">
                        <h1>{laptop.laptopName}</h1>
                        <div className="LaptopPagerightsideStarsmain">
                            <div className="LaptopPagerightsideStars">
                                <i className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                            </div>
                            <div className="LaptopPagerightsideStarshare">
                                <button >Share</button>
                            </div>
                        </div>
                        <div className="LaptopPagerightsidePrice " >
                            <span>{laptop.laptopCompany}</span>
                            <p>Starting at $97/mo with Affirm</p>
                            <p>Estimate Ship By 12/22/2023</p>
                        </div>
                        <div className="LaptopPagerightsideSpecifation">
                            <div className="LaptopPagerightsideSpecifationoption">
                                <div className="LaptopPagerightsideSpecifationoptionimg">
                                    <img src="https://content.ibuypower.com/cdn-cgi/image/width=1920,format=auto,quality=75/https://content.ibuypower.com/Images/Base/icon_os.svg?v=929da5f029a2f0d05e91e11502fe50fd1f25de7e" alt="" />
                                </div>
                                <div className="LaptopPagerightsideSpecifationoptiontext">
                                    <span>{laptop.laptopName}</span>
                                </div>
                            </div>
                            <div className="LaptopPagerightsideSpecifationoption">
                                <div className="LaptopPagerightsideSpecifationoptionimg">
                                    <img src="https://content.ibuypower.com/cdn-cgi/image/width=1920,format=auto,quality=75/https://content.ibuypower.com/Images/Base/icon_laptops_screen.svg?v=929da5f029a2f0d05e91e11502fe50fd1f25de7e" alt="" />
                                </div>
                                <div className="LaptopPagerightsideSpecifationoptiontext">
                                    <span>{laptop.laptopDisplay}</span>
                                </div>
                            </div>
                            <div className="LaptopPagerightsideSpecifationoption">
                                <div className="LaptopPagerightsideSpecifationoptionimg">
                                    <img src="https://content.ibuypower.com/cdn-cgi/image/width=1920,format=auto,quality=75/https://content.ibuypower.com/Images/Base/icon_cpu.svg?v=929da5f029a2f0d05e91e11502fe50fd1f25de7e" alt="" />
                                </div>
                                <div className="LaptopPagerightsideSpecifationoptiontext">
                                    <span>{laptop.laptopResolution}</span>
                                </div>
                            </div>
                            <div className="LaptopPagerightsideSpecifationoption">
                                <div className="LaptopPagerightsideSpecifationoptionimg">
                                    <img src="https://content.ibuypower.com/cdn-cgi/image/width=1920,format=auto,quality=75/https://content.ibuypower.com/Images/Base/icon_memory.svg?v=929da5f029a2f0d05e91e11502fe50fd1f25de7e" alt="" />
                                </div>
                                <div className="LaptopPagerightsideSpecifationoptiontext">
                                    <span>{laptop.laptopAdditionalDisplay}</span>
                                </div>
                            </div>
                            <div className="LaptopPagerightsideSpecifationoption">
                                <div className="LaptopPagerightsideSpecifationoptionimg">
                                    <img src="https://content.ibuypower.com/cdn-cgi/image/width=1920,format=auto,quality=75/https://content.ibuypower.com/Images/Base/icon_gpu.svg?v=929da5f029a2f0d05e91e11502fe50fd1f25de7e" alt="" />
                                </div>
                                <div className="LaptopPagerightsideSpecifationoptiontext">
                                    <span>{laptop.laptopProcessor}</span>
                                </div>
                            </div>
                            <div className="LaptopPagerightsideSpecifationoption">
                                <div className="LaptopPagerightsideSpecifationoptionimg">
                                    <img src="https://content.ibuypower.com/cdn-cgi/image/width=3840,format=auto,quality=75/https://content.ibuypower.com/Images/Base/icon_hard%20drive.svg?v=929da5f029a2f0d05e91e11502fe50fd1f25de7e" alt="" />
                                </div>
                                <div className="LaptopPagerightsideSpecifationoptiontext">
                                    <span>{laptop.laptopGraphics}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link className="showFullSpecClick12" onClick={showFullSpecClick}><span>Show Full Spec</span></Link>
                    {isInfoVisible && (
                        <LaptopPageInfo
                            laptops={laptops}
                            selectedImageIndex={selectedImageIndex}
                            onImageClick={() => setIsInfoVisible(false)}
                        />
                    )}
                    <p>QTY:<span>
                        <select ><option value="1">1</option></select></span>
                    </p>
                    <div className="button_btn_container___LWS5 ">
                        <button onClick={addbasket} className="button_loading_button__U3XYZ">Add to Card</button>
                    </div>
                    <div>
                        {isWideScreen && <LaptopPageInfoTable />}
                    </div>
                </div>
            </div>
>>>>>>> Stashed changes
        </>
    );
};

export default LaptopPage;
