import React, { useState } from 'react';
import '../Css/NavMobile.css';
import { Link, NavLink } from 'react-router-dom';
import $ from 'jquery'; // jQuery eklediğinizden emin olun

const NavMobile = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!isMenuOpen);
        setSubMenuOpen(false);
        $('.bar').toggleClass('animate');
        $('.mobile-menu').toggleClass('active');
        return false;
    };

    const handleSubMenuToggle = (event) => {
        setSubMenuOpen(!isSubMenuOpen);
        $(event.target).siblings('ul').slideToggle('slow', 'swing');
        $(event.target).find('.icon-arrow').toggleClass('open');
    };

    return (
        <header>
            <div className="hamburger-menu">
                <div onClick={handleMenuClick} className="hamburger-menumain">
                    <div className={`bar ${isMenuOpen ? 'activemenumobile' : ''}`} ></div>
                    <div className="hamburger-menu-image">
                        <Link to="/" >
                            <img src="https://xoticpc.com/cdn/shop/files/PNG-BLKBG-750_7daca810-5e2d-4369-aa46-b875dfd52a04.png?v=1704756995&width=500" alt="" />
                        </Link>

                    </div>
                    <div className="hamburger-menu-logo">
                        <ul>
                            <li><Link to="/"><i className="fa-solid fa-magnifying-glass"></i> </Link></li>
                            <li><Link to="/"><i className="fa-solid fa-user"></i> </Link></li>
                            <li><Link to="/cardview"><i className="fa-solid fa-bag-shopping"></i> </Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <nav className={`mobile-menu ${isMenuOpen ? 'activemenumobile' : ''}`}>
                <ul>
                    <li>
                        <Link to="/readytoship" >
                            <span> Ready To Ship</span>
                        </Link>
                    </li>                    <li className={`has-children ${isSubMenuOpen ? 'activemenumobile' : ''}`} onClick={handleSubMenuToggle}>
                        <span>
                            DESKTOPS <span className="icon-arrow"></span>
                        </span>
                        <ul className={`children ${isSubMenuOpen ? 'activemenumobile' : ''}`}>
                            <li>
                                <NavLink to="/desktopsall">
                                    <span>View All</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/preabuiltpc">
                                    <span>Pre-Built PCs</span>
                                </NavLink>
                            </li>
                            <li>
                                <Link to="/" >
                                    <span>  Stock Trading PCs</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className={`has-children ${isSubMenuOpen ? 'activemenumobile' : ''}`} onClick={handleSubMenuToggle}>
                        <span>
                            LAPTOPS <span className="icon-arrow"></span>
                        </span>
                        <ul className={`children ${isSubMenuOpen ? 'activemenumobile' : ''}`}>
                            <li>
                                <NavLink to="/laptopsviewall" >
                                    <span>  View All </span>
                                </NavLink>
                            </li>
                            <li>
                                <Link to="/" >
                                    <span>By Series</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" >
                                    <span>By Manufacturer</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" >
                                    <span> Special Offers</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="accosoriesmain" >
                            <span>  ACCESSORIES </span>
                        </NavLink>
                    </li>
                    <li>
                            <Link to="/account"><i className="fa-solid fa-user"></i> </Link>
                        </li>

                    <li className={`has-children ${isSubMenuOpen ? 'activemenumobile' : ''}`} onClick={handleSubMenuToggle}>
                        <span>
                            More <span className="icon-arrow"></span>
                        </span>
                        <ul className={`children ${isSubMenuOpen ? 'activemenumobile' : ''}`}>
                            <li>
                                <NavLink to="Contact" >
                                    <span>  Contact </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="Support" >
                                    <span> Support</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/About">
                                    <span> About</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/sponsorships" >
                                    <span> Sponsorships</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog" >
                                    <span> Blog</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/customization" >
                                    <span> Customization</span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavMobile;
