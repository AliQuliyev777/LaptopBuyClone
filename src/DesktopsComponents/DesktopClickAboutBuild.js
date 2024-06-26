<<<<<<< HEAD
=======
<<<<<<< Updated upstream
import React from 'react';
import '../Css/Desktops.css';
import { Link } from 'react-router-dom';

const DesktopClickAboutBuild = () => {
=======
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
import React  from 'react';
import '../Css/Desktops.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DesktopClickAboutBuild = ({ laptops }) => {
    const { laptopId } = useParams(); 
    const laptop = laptops.find(laptop => laptop.laptopId === parseInt(laptopId));

    if (!laptop) {
        return <div>Laptop not found</div>;
    }
    
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
    

<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898

    return (
        <>
            <div className="DesktopClickAboutBuildConfigurationtext">
                    <p>Configuration</p>
                    <span>BUILDS</span>
                </div>
            <div className="DesktopClickAboutBuild">
            
                <div className="DesktopClickAboutBuildPcDiv">
                    <div className="DesktopClickAboutBuildPcDivImg">
<<<<<<< HEAD
                    <img src={laptop.laptopImage2} alt="" />
=======
<<<<<<< Updated upstream
                        <img src="https://ucarecdn.com/8428a890-6f30-42e2-9b69-21588c4ba86a/LANCOOLCONFIG.png" alt="" />
=======
                    <img src={laptop.laptopImage2} alt="" />
>>>>>>> Stashed changes
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
                    </div>
                    <div className="DesktopClickAboutBuildPcDivparagraf">
                        <p><span>READYTO</span><span>SHIP</span></p>
                    </div>
                    <div className="DesktopClickAboutBuildPcDivStarting">
                        <p>Starting at:</p>
                    </div>
                    <div className="DesktopClickAboutBuildPcDivPrice">
                        <p>$1,599.00</p>
                    </div>
                    <div className="DesktopClickAboutBuildPcDivplan">
                        <p>Or from $44/ month financing or installment plan</p>
                    </div>
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
<<<<<<< HEAD
                            <p>{laptop.laptopProcessor}</p>
=======
<<<<<<< Updated upstream
                            <p>AMD Ryzen™ 5 5600G 6-Cores</p>
=======
                            <p>{laptop.laptopProcessor}</p>
>>>>>>> Stashed changes
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
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
                        <Link to="/" >
                            <span>Learn More</span>
                        </Link>
<<<<<<< HEAD
                        <Link >
                        <span onClick={addbasket} >Add to asCard</span>

=======
<<<<<<< Updated upstream
                        <Link to="/" >
                            <span>Add To Cart</span>
=======
                        <Link >
                        <span onClick={addbasket} >Add to asCard</span>

>>>>>>> Stashed changes
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
                        </Link>
                    </div>
                    <div className="DesktopClickAboutBuildPcDivStars">
                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><span> No reviews </span>
                    </div>
                </div>
                
            </div>
        </>

    );
};

export default DesktopClickAboutBuild;
