import React from 'react';
import '../Css/Home.css'
import { Link } from 'react-router-dom';

const ViewsDesktop = () => {
    return (
        <header className="ViewsDesktop gf_col-lg-12">
            <div className="ViewsDesktopText">
                <h2>CUSTOM GAMING COMPUTERS & LAPTOPS</h2>
            </div>
            <div className="ViewsDesktopDiv">
                <div className="ViewsDesktopmodule1">
                    <img src="https://ucarecdn.com/91c0ddd6-ba31-44f5-8ff7-3bb280848569/-/format/auto/-/preview/3000x3000/-/quality/lighter/computer.png" alt="" />
                    <div className="ImagetextDiv1">
                        <h4>BEYOND PERFORMANCE</h4>
                        <div className="ImageButton1">
                            <Link className="show1" >
                                <span>View Desktops</span>

                            </Link>
                        </div>
                    </div>
                </div>
                <div className="ViewsDesktopmodule2">
                    <img src="https://ucarecdn.com/b64a1ab7-14cd-4952-905f-b2e04f28bb0b/-/format/auto/-/preview/3000x3000/-/quality/lighter/sager%20banners.png" alt="" />
                    <div className="ImagetextDiv2">
                        <p>Summer Savings ☀️</p>
                        <h4>Hot Deals</h4>
                        <h4>
                            <span>SEASON</span>
                        </h4>
                        <p>
                            GET UP TO <span>$115</span>
                            INSTANT SAVINGS ON POPULAR SAGER GAMING LAPTOPS
                        </p>
                        <div className="ImageButton2">
                            <Link className="show2" >
                                <span>View Desktops</span>

                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default ViewsDesktop;