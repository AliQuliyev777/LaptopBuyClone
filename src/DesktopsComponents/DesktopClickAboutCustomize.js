import React from 'react';
import '../Css/Desktops.css';
import { Link } from 'react-router-dom';
<<<<<<< Updated upstream

const DesktopClickAboutCustomize = () => {

=======
import { useParams } from 'react-router-dom';

const DesktopClickAboutCustomize = ({ laptops }) => {
    const { laptopId } = useParams(); // laptopId'yi burada alıyoruz
    const laptop = laptops && laptops.find(laptop => laptop.laptopId === parseInt(laptopId));

    if (!laptop) {
        return <div>Laptop not found</div>;
    }
>>>>>>> Stashed changes
    return (
        <>
            <div className="DesktopClickAbout">
                <div className="DesktopClickAboutAllDiv">
<<<<<<< Updated upstream
                   
                    <div className="DesktopClickAboutText">
                        <p>ADVANCED Series</p>
                        <h1 className='DesktopsGamingPCstartig'>G7 LANCOOL</h1>
=======

                    <div className="DesktopClickAboutText">
                        <p>ADVANCED Series</p>
                        <h1 className='DesktopsGamingPCstartig'>      {laptop.laptopName}
                        </h1>
>>>>>>> Stashed changes
                        <h4>AIRFLOW FOCUS</h4>
                        <p className='DesktopsGamingPCstartig'>Introducing the LANCOOL, the cool kid on the block when it comes to PC cases! This bad boy is all about that airflow, with its groovy mesh panels that let the breeze flow in from every direction. Talk about feeling the wind in your components' hair!</p>
                        <br />
                        <p className='DesktopsGamingPCstartig'>The LANCOOL is like a shape-shifting magician. It's got a modular rear panel that can transform itself to suit your cooling desires. Want to go with air cooling? No problemo! Prefer the splashy vibes of water cooling? Easy peasy! This case has got your back, no matter which way you swing.</p>
                        <br />
                        <br />
                        <Link to="/" >
                            <span>Customize</span>
                        </Link>
<<<<<<< Updated upstream
                        
                    </div>
                    <div className="DesktopClickAboutImageMobileversion">
                        <img src="https://ucarecdn.com/7b9c422e-1e0a-4566-905e-6b5e181854a1/-/format/auto/-/preview/3000x3000/-/quality/lighter/G3%20MESHIFY%20PLAT.png" alt="" />
                    </div>
                </div>
=======

                    </div>
                    <div className="DesktopClickAboutImageMobileversion">
                    <img src={laptop.laptopImage1} alt="" />
                    </div>
                </div>
                <div className="DesktopClickAboutImageMaiin">
                <img src={laptop.laptopImage1} alt="" />
                </div>
>>>>>>> Stashed changes
            </div>
        </>

    );
};

export default DesktopClickAboutCustomize;
