import React, { useState, useEffect } from 'react';
import '../Css/Readytoship.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ReadyToShipDesktopCard = () => {
    const [laptops, setLaptops] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:44379/api/home');
                setLaptops([response.data[response.data.length - 1]]);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, []);




    return (
        <>
            {laptops.map((laptop, index) => (
                <section className="ReadyToShipDesktopsMain" >
                    <div className="ReadyToShipDesktopsDivs">

                        <div className="ReadyToShipDesktopsDivimg">
                            <img src={laptop.laptopImage1} alt="" />
                        </div>
                        <div className="ReadyToShipDesktopsDivMESHIFY">
                            <h3>{laptop.laptopName}</h3>

                            <div className="ReadyToShipDesktopsDivMESHIFYin flex  items-center	">
                                <div className="ReadyToShipDesktopsDivMESHIFYinimg">
                                    <img src="https://ucarecdn.com/628f1be2-871c-4e59-9db4-25c1871a205d/-/format/auto/-/preview/3000x3000/-/quality/lighter/chassis.png" alt="" />
                                </div>
                                <div className="ReadyToShipDesktopsDivMESHIFYintext">
                                    <p>Chassis</p>
                                    <span>{laptop.laptopName}</span>
                                </div>
                            </div>
                            <div className="ReadyToShipDesktopsDivMESHIFYin flex  items-center	">
                                <div className="ReadyToShipDesktopsDivMESHIFYinimg">
                                    <img src="https://ucarecdn.com/9a5d2e65-4f1e-49f7-84ce-94fc2abf02b9/-/format/auto/-/preview/3000x3000/-/quality/lighter/GPU.webp" alt="" />
                                </div>
                                <div className="ReadyToShipDesktopsDivMESHIFYintext">
                                    <p>Memory</p>
                                    <span>{laptop.laptopName}</span>
                                </div>
                            </div>
                            <div className="ReadyToShipDesktopsDivMESHIFYin flex items-center	">
                                <div className="ReadyToShipDesktopsDivMESHIFYinimg">
                                    <img src="https://ucarecdn.com/1ca75ba0-dab1-440a-be69-774f7385b06a/-/format/auto/-/preview/3000x3000/-/quality/lighter/RAM.webp" alt="" />
                                </div>
                                <div className="ReadyToShipDesktopsDivMESHIFYintext">
                                    <p>Storage </p>
                                    <span>{laptop.laptopName}</span>
                                </div>
                            </div>
                            <div className="ReadyToShipDesktopsDivMESHIFYin flex items-center	 ">
                                <div className="ReadyToShipDesktopsDivMESHIFYinimg">
                                    <img src="https://ucarecdn.com/a2d4c655-2b6e-4df2-88c2-db3a0989ec62/icon-storage.svg" alt="" />
                                </div>
                                <div className="ReadyToShipDesktopsDivMESHIFYintext">
                                    <p>Power Supply</p>
                                    <span>{laptop.laptopName}</span>
                                </div>
                            </div>
                            <div className="ReadyToShipDesktopsDivMESHIFYin flex items-center	 ">
                                <div className="ReadyToShipDesktopsDivMESHIFYinimg">
                                    <img src="https://ucarecdn.com/32cc65e9-a508-4068-859d-6998ea89c2b1/-/format/auto/-/preview/3000x3000/-/quality/lighter/POWER%20SUPPLY.webp" alt="" />
                                </div>
                                <div className="ReadyToShipDesktopsDivMESHIFYintext">
                                    <p>Motherboard</p>
                                    <span>{laptop.laptopName}</span>
                                </div>
                            </div>
                            <div className="ReadyToShipDesktopsreviews text-center	">
                                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><span>25 reviews</span>
                            </div>
                        </div>
                        <div className="ReadyToShipDesktopsDivMESHIFY">
                            <div className="ReadyToShipDesktopsDivMESHIFYin flex  items-center	">
                                <div className="ReadyToShipDesktopsDivMESHIFYinimg">
                                    <img src="https://ucarecdn.com/e4530b2c-1fd7-4f6e-ab32-2d05dc2f4a6f/-/format/auto/-/preview/3000x3000/-/quality/lighter/CPU.webp" alt="" />
                                </div>
                                <div className="ReadyToShipDesktopsDivMESHIFYintext">
                                    <p>Processor</p>
                                    <span>{laptop.laptopName}</span>
                                </div>
                            </div>
                            <div className="ReadyToShipDesktopsDivMESHIFYin flex  items-center	">
                                <div className="ReadyToShipDesktopsDivMESHIFYinimg">
                                    <img src="https://ucarecdn.com/ca0aa328-a377-4f10-b9e4-c6788b0a54bb/-/format/auto/-/preview/3000x3000/-/quality/lighter/MOTHERBOARD.webp" alt="" />
                                </div>
                                <div className="ReadyToShipDesktopsDivMESHIFYintext">
                                    <p>Memory</p>
                                    <span>{laptop.laptopName}</span>
                                </div>
                            </div>
                            <div className="ReadyToShipDesktopsDivMESHIFYin flex items-center	">
                                <div className="ReadyToShipDesktopsDivMESHIFYinimg">
                                    <img src="https://ucarecdn.com/4ddbd2d6-477b-45c0-8b71-b83c2e73c104/-/format/auto/-/preview/3000x3000/-/quality/lighter/COOLER.webp" alt="" />
                                </div>
                                <div className="ReadyToShipDesktopsDivMESHIFYintext">
                                    <p>Storage </p>
                                    <span>{laptop.laptopName}</span>
                                </div>
                            </div>
                            <div className="ReadyToShipDesktopsDivMESHIFYin flex items-center	 ">
                                <div className="ReadyToShipDesktopsDivMESHIFYinimg">
                                    <img src="https://ucarecdn.com/f2309a12-c3d5-48f4-917c-c4c4fe91f717/windows.svg" alt="" />
                                </div>
                                <div className="ReadyToShipDesktopsDivMESHIFYintext">
                                    <p>Power Supply</p>
                                    <span>{laptop.laptopName}</span>
                                </div>
                            </div>
                            <div className="ReadyToShipDesktopsDivMESHIFYin flex items-center	 ">
                                <div className="ReadyToShipDesktopsDivMESHIFYinimg">
                                    <i className="fa-solid fa-bag-shopping"></i>
                                </div>
                                <div className="ReadyToShipDesktopsDivMESHIFYintext">
                                    <p>Extras</p>
                                    <span>USB Recovery Drive <br />
                                        <span>USB WIFI</span>
                                    </span>
                                </div>
                            </div>
                            <div className="ReadyToShipDesktopsreviews12 text-center	">

                                <span>$699.00</span>


                            </div>
                            <div className="ReadyToShipDesktopsLearnMore flex">
                                <Link to={`/DesktopClickAbout/${laptop.laptopId}`}>
                                    <span>Learn More  </span>
                                </Link>

                            
                            </div>
                        </div>
                    </div>

                </section>
            ))}

        </>
    );
}

export default ReadyToShipDesktopCard;
