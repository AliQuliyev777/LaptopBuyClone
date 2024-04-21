<<<<<<< Updated upstream
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Css/Nav.css';
import NavMobile from './NavMobile';

const Nav = () => {
    const [menuStates, setMenuStates] = useState({
=======
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Css/Nav.css';
import NavMobile from './NavMobile';
import SearchProduct from '../SearchProductWindow/SearchProduct';

const Nav = () => {
    const [shoppingCards, setShoppingCards] = useState([]);
    const [, setOrderSummaryVisibility] = useState(true);

    const [menuStates, setMenuStates] = useState({

>>>>>>> Stashed changes
        logoMenuVisible: false,
        logoMenuVisible2: false,
        logoMenuVisible3: false,
        logoMenuVisible7: false,
        logoMenuVisible31: false,
    });
<<<<<<< Updated upstream

    const toggleMenu = (menuName) => {
=======
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
    
    

    const toggleMenu = (menuName) => {

>>>>>>> Stashed changes
        let currentMenu = document.querySelector(`.${menuName}`);
        let icon = null;

        if (currentMenu) {
            icon = document.querySelector(`.${menuName} .icon`);
        }

        if (currentMenu) {
            const isMenuVisible = !menuStates[menuName];
            currentMenu.style.display = isMenuVisible ? 'block' : 'none';

            if (icon) {
                icon.classList.toggle('rotate', isMenuVisible);
            }

            setMenuStates((prevState) => ({
                ...prevState,
                [menuName]: isMenuVisible,
            }));

            // Close other menus
            closeOtherMenus(menuName, menuStates, setMenuStates);
        }
    };

    const toggleLogoMenu2 = () => toggleMenu('logoMenu2');
    const toggleLogoMenu3 = () => toggleMenu('logoMenu3');
    const toggleLogoMenu7 = () => toggleMenu('logoMenu7');

<<<<<<< Updated upstream
    const closeOtherMenus = (currentMenuName, currentMenuStates, setMenuStates) => {
        const menuStateKeys = Object.keys(currentMenuStates);
        menuStateKeys
            .filter((menuName) => menuName !== currentMenuName)
            .forEach((menuName) => {
                const otherMenu = document.querySelector(`.${menuName}`);
                if (otherMenu) {
                    otherMenu.style.display = 'none';
                }
            });

        // Close the current menu if it's open
        if (currentMenuStates[currentMenuName]) {
            setMenuStates((prevState) => ({
                ...prevState,
                [currentMenuName]: false,
            }));
        }
        
=======
const closeOtherMenus = (currentMenuName, menuStates, setMenuStates) => {
    for (const menuName in menuStates) {
        if (menuName !== currentMenuName && menuStates[menuName] === true) {
            setMenuStates((prevState) => ({
                ...prevState,
                [menuName]: false,
            }));
            const menu = document.querySelector(`.${menuName}`);
            if (menu) {
                menu.style.display = 'none';
                const icon = menu.querySelector('.icon');
                if (icon) {
                    icon.classList.remove('rotate');
                }
            }
        }
    }
};

    const [isSearchOpen2, setIsSearchOpen2] = useState(false);

    const handleSearchClick = (event) => {
        event.preventDefault();
        console.log('Event:', event);
        setIsSearchOpen2((prevIsSearchOpen2) => !prevIsSearchOpen2);
>>>>>>> Stashed changes
    };

    return (
        <>
            <NavMobile />
            <nav className="dasdasdasd" id="mainNav">
                <div className="lighttextMenu">
                    <NavLink to="/" className="IMGPNG">
                        <img src="https://xoticpc.com/cdn/shop/files/PNG-BLKBG-750-2.png?v=1671595773&width=500" id="" alt="" />
                    </NavLink>

                    <ul>
                        <li>
                            <Link to="/readytoship" >
                                <span> Ready To Ship</span>
                            </Link>
                        </li>
<<<<<<< Updated upstream
=======
                      
>>>>>>> Stashed changes
                        <li>
                            <Link className="menu-link-2" onClick={toggleLogoMenu2}>
                                <span>DESKTOPS </span>
                                <i className={`fa-solid fa-caret-down azerbaijan ${menuStates.logoMenuVisible2 ? 'rotate' : ''}`}></i>
                            </Link>
                        </li>
                        <li>
                            <Link className="menu-link-3" onClick={toggleLogoMenu3}>
                                <span>LAPTOPS</span>
                                <b><i className={`fa-solid fa-caret-down turkey ${menuStates.logoMenuVisible3 ? 'rotate' : ''}`}></i></b>
                            </Link>
                        </li>
                        <li>
                            <Link to="/accosoriesmain"><span>ACCESSORIES</span></Link>
                        </li>
                        <li>
                            <Link ><span>FINANCING</span></Link>
                        </li>
                        <li>
                            <Link className="menu-link-7" onClick={toggleLogoMenu7}>
                                <span>More </span>
                                <i className={`fa-solid fa-caret-down israel ${menuStates.logoMenuVisible7 ? 'rotate' : ''}`}></i>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="righttextMenu d-flex">
                    <ul>
                        <li>
<<<<<<< Updated upstream
                            <Link to="/"><i className="fa-solid fa-magnifying-glass"></i> </Link>
=======
                            <Link onClick={handleSearchClick} to="/" >
                                <i className="fa-solid fa-magnifying-glass openSearch"></i>
                            </Link>
>>>>>>> Stashed changes
                        </li>
                        <li>
                            <Link to="/account"><i className="fa-solid fa-user"></i> </Link>
                        </li>
                        <li>
<<<<<<< Updated upstream
                            <Link to="/cardview"><i className="fa-solid fa-bag-shopping"></i> </Link>
=======
                            <Link to="/addproduct" >
                            <i class="fa-solid fa-plus"></i>
                            </Link>
                        </li>
                        <li>
                        <p className='shoppingCardsnotification'> {shoppingCards.length} </p>
                            <Link to="/cardview"><i className="fa-solid fa-bag-shopping">
                                
                            </i> </Link>

>>>>>>> Stashed changes
                        </li>
                    </ul>
                </div>
                {/* GAMING PCS Dropdown */}
                <div className={`logoMenu ${menuStates.logoMenuVisible ? 'showLogoMenu' : ''}`}>
                    <div className="Menu2">
                        <ul>


                            <div className={`aasdasd12 ${menuStates.logoMenuVisible ? 'showAasdasd12' : ''}`}>
                                <ul>
                                    <li>
                                        <Link to="/" >
                                            <span>Lorem12</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" >
                                            <span>Lorem12</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" >
                                            <span>Lorem21</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" >
                                            <span>Lorem21</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </ul>
                    </div>
                </div>
                {/* WorkstationPcs */}
                <div className={`logoMenu2 ${menuStates.logoMenuVisible2 ? 'showLogoMenu2' : ''}`} >
                    <ul>
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
                </div>
                {/* Laptops */}
                <div className={`logoMenu3 ${menuStates.logoMenuVisible3 ? 'showLogoMenu3' : ''}`} >
                    <ul>
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
                </div>
                <div className={`logoMenu7 ${menuStates.logoMenuVisible7 ? 'showLogoMenu7' : ''}`} >
                    <ul>
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
                </div>
            </nav>
<<<<<<< Updated upstream
=======
            {isSearchOpen2 && <SearchProduct />}
>>>>>>> Stashed changes
        </>
    );
};

export default Nav;
