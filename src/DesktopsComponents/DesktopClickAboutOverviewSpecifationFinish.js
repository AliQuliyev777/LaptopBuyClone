import React from 'react';
import '../Css/Desktops.css';
import { Link } from 'react-router-dom';

const DesktopClickAboutOverviewSpecifationFinish = () => {
    const DesktopSpecItem = ({ title, description, imageSrc, sub }) => {

        return (
            <div className="DesktopClickAboutOverviewSpecifationAllDiv">
                <div className="DesktopClickAboutOverviewSpecifationDiv">
                    <p className='text-white'>{sub}</p>

                    <h3>{title}</h3>
                    <br />
                    <p className='DesktopClickAboutOverviewSpecifationAllParagraf	'>{description}</p>

                    <br />
                    <br />
                    <Link to="/" >
                        <span>Customize</span>
                    </Link>
                </div>
                <div className="DesktopClickAboutOverviewSpecifationDiv2">
                    <img src={imageSrc} alt="" />
                </div>
            </div>
        );
    }

    const DesktopSpecItem2 = ({ title2, description2, imageSrc2, sub2 }) => {
        return (
            <div className="DesktopClickAboutOverviewSpecifationAllDiv">
                <div className="DesktopClickAboutOverviewSpecifationDiv2">
                    <img src={imageSrc2} alt="" />
                </div>
                <div className="DesktopClickAboutOverviewSpecifationDiv">
                    <p className='DesktopClickAboutOverviewSpecifationDivsub'>{sub2}</p>

                    <h3>{title2}</h3>
                    <br />
                    <p className='DesktopClickAboutOverviewSpecifationAllParagraf	'>{description2}</p>

                    <br />
                    <br />
                    <Link to="/" >
                        <span>Customize</span>
                    </Link>
                </div>
            </div>
        );
    }
    return (

        <>
            <div className="DesktopClickAboutOverviewSpecifationFinishMain">
                <div className="DesktopClickAboutOverviewSpecifationFinishMainImg">
                    <img src="https://cdn.shopify.com/s/files/1/0228/7629/1136/files/image3_3000x3000.png?v=1698172668
                    " alt="" />
                </div>

                <DesktopSpecItem
                    sub="COOLING"
                    title="SERIOUS GAMING. SERIOUS COOLING."
                    description="XOTIC PC combines all our expertise in building the most advanced, top-quality, and visually appealing PCs in the nation, offering a forward-thinking approach that delivers unmatched value for your investment.
                    For your processor and gpu to operate at peak efficiency, adequate cooling is essential. Be confident that any of the cooling solutions listed below will not only meet but exceed the requirements of your selected CPU/GPU, as each option has undergone rigorous testing.
                    If you're curious and want to dive into the world of awesome cooling options and fan upgrades, just hit that button below!
                    "
                    imageSrc="
                    https://ucarecdn.com/39042850-fba2-4bd1-b26a-b8e069836a03/-/format/auto/-/preview/3000x3000/-/quality/lighter/Cooling.png
                    "
                />
                <div className="DesktopClickAboutOverviewSpecifation">
                    <DesktopSpecItem2
                        sub2="CPU"
                        title2="MORE CORES, MORE PROCESSING POWER  "
                        imageSrc2="https://ucarecdn.com/16f9b176-60c5-403d-961d-b134eadcc958/-/format/auto/-/preview/3000x3000/-/quality/lighter/fallout.png"
                        description2="The G7 LANCOOL has cutting-edge performance for both recreational and professional gamers thanks to the latest 14th Gen Intel® CoreTM desktop CPUs. 14th Generation Intel® CoreTM desktop CPUs are built for both gaming and work, with up to 24 cores and 32 threads, 6.0 GHz clock rates, and 36 MB cache.  "
                    />
                </div>
            </div>
        </>
    );
}

export default DesktopClickAboutOverviewSpecifationFinish;
