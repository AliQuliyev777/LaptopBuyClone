<<<<<<< HEAD
=======
<<<<<<< Updated upstream
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
=======
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
import React, { useState, useEffect } from 'react';
import '../Css/NavMobile.css';
import { Link, NavLink } from 'react-router-dom';
import $ from 'jquery';
import SearchProduct from '../SearchProductWindow/SearchProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
const NavMobile = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSubMenuOpen, setSubMenuOpen] = useState(false);
    const [shoppingCards, setShoppingCards] = useState([]);
    const [, setOrderSummaryVisibility] = useState(true);
    const [isSearchOpen2, setIsSearchOpen2] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const handleSearchClick = (event) => {
        event.preventDefault();
        console.log('Event:', event);
        setIsSearchOpen2((prevIsSearchOpen2) => !prevIsSearchOpen2);
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://localhost:44379/api/home/ShoppingCards');
                const data = await response.json();
                setShoppingCards(data);

                if (data.length === 0) {
                    setOrderSummaryVisibility(false);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    const handleMenuClick = (event) => {
        event.preventDefault(); // Sayfanın varsayılan davranışını iptal et

        const newMenuOpenState = !isMenuOpen;
        setMenuOpen(newMenuOpenState);
        setSubMenuOpen(false);
        $('.bar').toggleClass('animate', newMenuOpenState);
        $('.mobile-menu').toggleClass('active', newMenuOpenState);
    };

    const handleSubMenuToggle = (event) => {
        const clickedSubMenu = $(event.target).closest('.has-children');

        if (clickedSubMenu.length > 0) {
            const isActive = clickedSubMenu.hasClass('activemenumobile');
            $('.has-children').not(clickedSubMenu).removeClass('activemenumobile').find('ul').slideUp('slow', 'swing');
            $('.icon-arrow').not(clickedSubMenu.find('.icon-arrow')).removeClass('open');
            if (!isActive) {
                clickedSubMenu.addClass('activemenumobile').find('ul').slideDown('slow', 'swing');
                clickedSubMenu.find('.icon-arrow').addClass('open');
            } else {
                clickedSubMenu.removeClass('activemenumobile').find('ul').slideUp('slow', 'swing');
                clickedSubMenu.find('.icon-arrow').removeClass('open');
            }
        }
    };




    const handleOutsideMenuClick = (event) => {
        if (!$(event.target).closest('.hamburger-menu, .has-children, .mobile-menu').length) {
            setMenuOpen(false);
            setSubMenuOpen(false);
            $('.bar').removeClass('animate');
            $('.mobile-menu').removeClass('active');
            $('.has-children').removeClass('activemenumobile');
            $('.has-children ul').slideUp('slow', 'swing');
            $('.icon-arrow').removeClass('open');
        }
    };


    const handleAccountClick = (event) => {
        event.stopPropagation(); // Menünün kapanmasını engelle
        return true;
    };

    $(document).on('click', handleOutsideMenuClick);
    $('.account-link').on('click', handleAccountClick);




    return (
        <>

            <header>
                <div className="hamburger-menu" >
                    <div className="hamburger-menumain">
                        <div onClick={handleMenuClick} className={`bar ${isMenuOpen ? 'activemenumobile' : ''}`} ></div>
                        <div className="hamburger-menu-image">
                            <NavLink to="/" >
                                <img src="https://xoticpc.com/cdn/shop/files/PNG-BLKBG-750_7daca810-5e2d-4369-aa46-b875dfd52a04.png?v=1704756995&width=500" alt="" />
                            </NavLink>

                        </div>
                        <div className="hamburger-menu-logo">
                            <ul className='hamburger-menuMainMenu'>

                                <li>
                                    <NavLink onClick={handleSearchClick} to="/" >
                                        <i className="fa-solid fa-magnifying-glass openSearch"></i>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/account" onClick={handleAccountClick}><i className="fa-solid fa-user"></i> </NavLink>
                                </li>
                                <li>
                                    <p className='shoppingCardsnotificationMobile'> {shoppingCards.length} </p>
                                    <NavLink to="/cardview"><i className="fa-solid fa-bag-shopping">

                                    </i> </NavLink>

                                </li>
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
                        </li>
                        <li onClick={handleSubMenuToggle} className={`has-children ${isSubMenuOpen ? 'activemenumobile' : ''}`} >
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
                        <li onClick={handleSubMenuToggle} className={`has-children ${isSubMenuOpen ? 'activemenumobile' : ''}`}>
                            <span>
                                LAPTOPS <span className="icon-arrow" ></span>
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


                        <li onClick={handleSubMenuToggle} className={`has-children ${isSubMenuOpen ? 'activemenumobile' : ''}`}>
                            <span >
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
                    <div className='asdasdasdasd'>
                        <ul >
                            <li>
                                <i class="fa-brands fa-facebook"></i>
                            </li>
                            <li>
                                <i class="fa-brands fa-twitter"></i>
                            </li>
                            <li>
                                <i class="fa-brands fa-pinterest"></i>
                            </li>

                            <li>
                                <i class="fa-brands fa-square-instagram"></i>
                            </li>
                            <li>
                                <i class="fa-brands fa-tiktok"></i>
                            </li>
                            <li>
                                <i class="fa-brands fa-youtube"></i>
                            </li>

                        </ul>

                    </div>
                </nav>

            </header>
            {isSearchOpen2 && <SearchProduct />}

            <div className="scroll-to-top">
            {isVisible && 
                <button onClick={scrollToTop}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </button>
            }
        </div>
        </>
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
    );
}

export default NavMobile;
