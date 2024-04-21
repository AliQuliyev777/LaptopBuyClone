import React from 'react';
import '../Css/Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="FooterMainDiv">
            <div className="FooterMainDivAll">

                <div className="FooterDivAll1">
                    <br />

                    <h2>Quick links</h2>
                    <br />

                    <ul>
                        <li>
                            <Link>
                                <span>Customer Reviews</span>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <span>Trust Pilot Reviews</span>
                            </Link>
                        </li>
                        <li>
                            <Link >
                                <span>Reseller Ratings Reviews</span>
                            </Link>
                        </li>

                    </ul>
                </div>
                <div className="FooterDivAll1">
                    <br />

                    <h2>Info</h2>
                    <br />

                    <ul>
                        <li>
                            <Link>
                                <span>Warranty & Returns</span>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <span>Order Status</span>
                            </Link>
                        </li>
                        <li>
                            <Link >
                                <span> FAQ</span>
                            </Link>
                        </li>
                        <li>
                            <Link >
                                <span> Resources</span>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <span> Privacy Policy</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="FooterDivAll1">
                    <br />

                    <h2>Computers</h2>
                    <br />
                    <ul>
                        <li>
                            <Link >
                                <span>Gaming Laptops</span>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <span>Speciality Laptops</span>
                            </Link>
                        </li>


                    </ul>
                </div>
                <div className="FooterDivAll1">
                    <div className="FooterDivAll1stars">

                    <img width="25" height="25" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1" />
                    <img width="25" height="25" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1" />

                    <img width="25" height="25" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1" />

                    <img width="25" height="25" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1" />

                    <img width="25" height="25" src="https://img.icons8.com/fluency/48/star--v1.png" alt="star--v1" />
                    </div>
                
                    <Link className="LatestSpan">
                        <span>Customers rate us 4.8/5 based on 1774 reviews.</span>
                    </Link>
                </div>
            </div>
            <div className="FooterMainIcons">
                <div className="FooterAllIcons">

                    <h3>Subscribe to our emails</h3>

                    <input placeholder="Email" type='mail' />
                </div>
                <div className="FooterIcons">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-tiktok"></i>
                    <i className="fa-brands fa-pinterest-p"></i>
                    <i className="fa-brands fa-youtube"></i>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
