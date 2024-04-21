<<<<<<< HEAD
=======
<<<<<<< Updated upstream
import React from 'react';
import '../Css/Desktops.css';
import { Link } from 'react-router-dom';

const DesktopGamingsPCCard = () => {
    return (
        <div className="DesktopsGamingPC">

            <Link to="/DesktopClickAbout">
                <img src="https://ucarecdn.com/7e4f380b-cfe1-440b-84b8-b2479deda024/LANCOOLREF.png" alt="reim" />
            </Link>

            <div className="DesktopsGamingPCtextt1">
                <div className="DesktopsGamingPCtextt1flex13">
                    <h3>G7 LANCOOL</h3>
                    <p className='DesktopsGamingPCLength'>18.9 x 9.3 x 19.4 in</p>
                </div>
                <div className=" DesktopsGamingPCtextt1flex12	">
                    <p className='DesktopsGamingPCstartig'>Starting at:</p>
                    <p className='DesktopsGamingPCBuy '>$759.00</p>
                </div>
            </div>

            <div className='DesktopsGamingexplain'>

            <div className="DesktopClickAboutBuildPcDivSpecificationnAll ">
                        <div className="DesktopClickAboutBuildPcDivSpecificationimage">
                            <img src="https://ucarecdn.com/9a5d2e65-4f1e-49f7-84ce-94fc2abf02b9/-/format/auto/-/preview/3000x3000/-/quality/lighter/GPU.webp" alt="" />
                        </div>
                        <div className="DesktopClickAboutBuildPcDivSpecificationparagraf">
                            <p>Graphics Card</p>
                            <p>NVIDIA® GeForce RTX™ 4060 Ti</p>
                        </div>
                    </div>
                    <div className="DesktopClickAboutBuildPcDivSpecificationnAll ">
                        <div className="DesktopClickAboutBuildPcDivSpecificationimage">
                            <img src="https://ucarecdn.com/e4530b2c-1fd7-4f6e-ab32-2d05dc2f4a6f/-/format/auto/-/preview/3000x3000/-/quality/lighter/CPU.webp" alt="" />
                        </div>
                        <div className="DesktopClickAboutBuildPcDivSpecificationparagraf">
                            <p>Processor</p>
                            <p>AMD Ryzen™ 5 5600G 6-Cores</p>
                        </div>
                    </div>
                    <div className="DesktopClickAboutBuildPcDivSpecificationnAll ">
                        <div className="DesktopClickAboutBuildPcDivSpecificationimage">
                            <img src="https://ucarecdn.com/ca0aa328-a377-4f10-b9e4-c6788b0a54bb/-/format/auto/-/preview/3000x3000/-/quality/lighter/MOTHERBOARD.webp" alt="" />
                        </div>
                        <div className="DesktopClickAboutBuildPcDivSpecificationparagraf">
                            <p>Motherboard</p>
                            <p>ASUS ROG STRIX B550-F GAMING WI-FI</p>
                        </div>
                    </div>
                    <div className="DesktopClickAboutBuildPcDivSpecificationnAll ">
                        <div className="DesktopClickAboutBuildPcDivSpecificationimage">
                            <img src="https://ucarecdn.com/1ca75ba0-dab1-440a-be69-774f7385b06a/-/format/auto/-/preview/3000x3000/-/quality/lighter/RAM.webp" alt="" />
                        </div>
                        <div className="DesktopClickAboutBuildPcDivSpecificationparagraf">
                            <p>Memory</p>
                            <p>32GB DDR4 3200MHz</p>
                        </div>
                    </div>
                    <div className="DesktopClickAboutBuildPcDivSpecificationnAll ">
                        <div className="DesktopClickAboutBuildPcDivSpecificationimage">
                            <img src="https://ucarecdn.com/a2d4c655-2b6e-4df2-88c2-db3a0989ec62/icon-storage.svg" alt="" />
                        </div>
                        <div className="DesktopClickAboutBuildPcDivSpecificationparagraf">
                            <p>Storage </p>
                            <p>1TB M.2 NVMe SSD</p>
                        </div>
                    </div>
                    <div className="DesktopClickAboutBuildPcDivSpecificationnAll ">
                        <div className="DesktopClickAboutBuildPcDivSpecificationimage">
                            <img src="https://ucarecdn.com/32cc65e9-a508-4068-859d-6998ea89c2b1/-/format/auto/-/preview/3000x3000/-/quality/lighter/POWER%20SUPPLY.webp" alt="" />
                        </div>
                        <div className="DesktopClickAboutBuildPcDivSpecificationparagraf">
                            <p>Power Supply</p>
                            <p>CORSAIR 750W GOLD</p>
                        </div>
                    </div>
                    <div className="DesktopClickAboutBuildPcDivSpecificationnAll ">
                        <div className="DesktopClickAboutBuildPcDivSpecificationimage">
                            <img src="https://ucarecdn.com/4ddbd2d6-477b-45c0-8b71-b83c2e73c104/-/format/auto/-/preview/3000x3000/-/quality/lighter/COOLER.webp" alt="" />
                        </div>
                        <div className="DesktopClickAboutBuildPcDivSpecificationparagraf">
                            <p>Cooling</p>
                            <p>Deep Cool AG400 Cooling with RGB Fans</p>
                        </div>
                    </div>
                    <div className="DesktopClickAboutBuildPcDivButton">
                        <Link to="/DesktopClickAbout" >
                            <span>Customize & More Info</span>
                        </Link>
                    
                    </div>
            </div>

        </div>
=======
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
import React, { useState, useEffect } from 'react';
import '../Css/Desktops.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DesktopGamingsPCCard = () => {
    const [, setHoveredStates] = useState([]);
    const [laptops, setLaptops] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://localhost:44379/api/home');
                setLaptops(response.data);
                setHoveredStates(Array(response.data.length).fill(false));
                console.log('API call successful:', response.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <>


            {laptops.length > 0 && laptops.map((laptop, index) => (
                <div className="DesktopsGamingPC">

                    <Link to={`/DesktopClickAbout/${laptop.laptopId}`}>
                        <img src={laptop.laptopImage1} alt="" />
                    </Link>
               

                    <div className="DesktopsGamingPCtextt1">
                        <div className="DesktopsGamingPCtextt1flex13">
                            <h3>{laptop.laptopName}</h3>
                            <p className='DesktopsGamingPCLength'>18.9 x 9.3 x 19.4 in</p>
                        </div>
                        <div className=" DesktopsGamingPCtextt1flex12	">
                            <p className='DesktopsGamingPCstartig'>Starting at:</p>
                            <p className='DesktopsGamingPCBuy '>{laptop.laptopPrice}</p>
                        </div>
                    </div>

                    <div className='DesktopsGamingexplain'>

                        <div className="DesktopClickAboutBuildPcDivSpecificationnAll ">
                            <div className="DesktopClickAboutBuildPcDivSpecificationimage">
                                <img src="https://ucarecdn.com/9a5d2e65-4f1e-49f7-84ce-94fc2abf02b9/-/format/auto/-/preview/3000x3000/-/quality/lighter/GPU.webp" alt="" />
                            </div>
                            <div className="DesktopClickAboutBuildPcDivSpecificationparagraf">
                                <p>Graphics Card</p>
                                <p>NVIDIA® GeForce RTX™ 4060 Ti</p>
                            </div>
                        </div>
                        <div className="DesktopClickAboutBuildPcDivSpecificationnAll ">
                            <div className="DesktopClickAboutBuildPcDivSpecificationimage">
                                <img src="https://ucarecdn.com/e4530b2c-1fd7-4f6e-ab32-2d05dc2f4a6f/-/format/auto/-/preview/3000x3000/-/quality/lighter/CPU.webp" alt="" />
                            </div>
                            <div className="DesktopClickAboutBuildPcDivSpecificationparagraf">
                                <p>Processor</p>
                                <p>AMD Ryzen™ 5 5600G 6-Cores</p>
                            </div>
                        </div>
                        <div className="DesktopClickAboutBuildPcDivSpecificationnAll ">
                            <div className="DesktopClickAboutBuildPcDivSpecificationimage">
                                <img src="https://ucarecdn.com/ca0aa328-a377-4f10-b9e4-c6788b0a54bb/-/format/auto/-/preview/3000x3000/-/quality/lighter/MOTHERBOARD.webp" alt="" />
                            </div>
                            <div className="DesktopClickAboutBuildPcDivSpecificationparagraf">
                                <p>Motherboard</p>
                                <p>ASUS ROG STRIX B550-F GAMING WI-FI</p>
                            </div>
                        </div>
                        <div className="DesktopClickAboutBuildPcDivSpecificationnAll ">
                            <div className="DesktopClickAboutBuildPcDivSpecificationimage">
                                <img src="https://ucarecdn.com/1ca75ba0-dab1-440a-be69-774f7385b06a/-/format/auto/-/preview/3000x3000/-/quality/lighter/RAM.webp" alt="" />
                            </div>
                            <div className="DesktopClickAboutBuildPcDivSpecificationparagraf">
                                <p>Memory</p>
                                <p>32GB DDR4 3200MHz</p>
                            </div>
                        </div>
                        <div className="DesktopClickAboutBuildPcDivSpecificationnAll ">
                            <div className="DesktopClickAboutBuildPcDivSpecificationimage">
                                <img src="https://ucarecdn.com/a2d4c655-2b6e-4df2-88c2-db3a0989ec62/icon-storage.svg" alt="" />
                            </div>
                            <div className="DesktopClickAboutBuildPcDivSpecificationparagraf">
                                <p>Storage </p>
                                <p>1TB M.2 NVMe SSD</p>
                            </div>
                        </div>
                        <div className="DesktopClickAboutBuildPcDivSpecificationnAll ">
                            <div className="DesktopClickAboutBuildPcDivSpecificationimage">
                                <img src="https://ucarecdn.com/32cc65e9-a508-4068-859d-6998ea89c2b1/-/format/auto/-/preview/3000x3000/-/quality/lighter/POWER%20SUPPLY.webp" alt="" />
                            </div>
                            <div className="DesktopClickAboutBuildPcDivSpecificationparagraf">
                                <p>Power Supply</p>
                                <p>CORSAIR 750W GOLD</p>
                            </div>
                        </div>
                        <div className="DesktopClickAboutBuildPcDivSpecificationnAll ">
                            <div className="DesktopClickAboutBuildPcDivSpecificationimage">
                                <img src="https://ucarecdn.com/4ddbd2d6-477b-45c0-8b71-b83c2e73c104/-/format/auto/-/preview/3000x3000/-/quality/lighter/COOLER.webp" alt="" />
                            </div>
                            <div className="DesktopClickAboutBuildPcDivSpecificationparagraf">
                                <p>Cooling</p>
                                <p>Deep Cool AG400 Cooling with RGB Fans</p>
                            </div>
                        </div>
                        <div className="DesktopClickAboutBuildPcDivButton">
                            <Link to="/DesktopClickAbout" >
                                <span>Customize & More Info</span>
                            </Link>

                        </div>
                    </div>

                </div>
            ))}


        </>
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
    );
};

export default DesktopGamingsPCCard;
