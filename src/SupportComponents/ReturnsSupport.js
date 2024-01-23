
import React from 'react';
import '../Css/SupportSlide.css';
import SupportFaq from './SupportFaq';

// import { Link } from 'react-router-dom';
const inputStyle = {
    marginBottom: '20px',
};

const ReturnSupport = () => {
    return (
        <>
            <div className="ReturnsSupportRequestAllDivs">
                <div className="ReturnsSupportRequestOne">
                    <img src="https://ucarecdn.com/148a5f0f-f3c9-47a1-a426-2ca1b3e9ca36/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="" />
                </div>
                <div className="ReturnsSupportRequestOnetext">
                    <h1>Learn more about XOTIC PC's Free Returns</h1>
                </div>
                <div className="ReturnsSupportRequestImageAll">
                    <div >
                        <img src="https://ucarecdn.com/d007c24f-e7d8-42d6-a025-879ddb39d868/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="" />
                    </div>
                    <div >
                        <img src="https://ucarecdn.com/3b5316de-6e32-43a1-b610-36a642ebfd58/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="" />
                    </div>
                    <div >
                        <img src="https://ucarecdn.com/826e0706-2bb1-463e-8c4f-216289625cbb/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="" />
                    </div>
                </div>
                <div className="ReturnsSupportRequestGetDivs">
                    <div className="ReturnsSupportRequestGetDiv1">
                        <h1>get product support</h1>
                        <p>We offer technical support to help you fix what’s wrong, so you can keep and love the PC you bought. Because sometimes no return is the easiest return of all. </p>
                        <br />
                        <p><span>Talk to our team of technical problem solvers</span></p>
                        <p>They can help you with troubleshooting or setting up your new pc.</p>
                        <br />
                        <p><span>Replace malfunctioning or broken parts for free</span></p>
                        <p>We can cross ship you replacement parts on your PC. </p>
                    </div>
                    <div className="ReturnsSupportRequestGetDiv1">
                        <h1>returns support</h1>
                        <p><strong>Return, replace, or exchange items</strong></p>
                        <p>Start a return by entering your email and order number below.</p>
                        <br />
                        <br />

                        <p><strong>Manage recent returns</strong></p>
                        <p>Print return labels and check the status of your returns by entering your email and order number below.</p>
                    </div>
                </div>

                <div className="ReturnsSupportReturnExhanges">
                    <div className="ReturnsSupportReturnExhangesBlackDiv">
                        <h4>RETURNS & EXCHANGES</h4>
                        {/* <ul>
                            <li>
                                <span><i class="fa-solid fa-circle"></i></span>
                            </li>
                            <li>
                                <span><i class="fa-solid fa-circle"></i></span>
                            </li>
                            <li>
                                <span><i class="fa-solid fa-circle"></i></span>
                            </li>
                            <li>
                                <span><i class="fa-solid fa-circle"></i></span>
                            </li>
                            <li>
                                <span><i class="fa-solid fa-circle"></i></span>
                            </li>
                        </ul> */}
                    </div>
                    <div className="ReturnsSupportReturnExhangesWhiteDivs">
                        <div className="ReturnsSupportReturnExhangesWhiteDivsText">
                            <h3>Product Return and Exchange</h3>
                            <input type="email" placeholder="Buyer's Email Address" style={inputStyle} />
                            <input type="email" placeholder='Order ID' />
                            <br />
                            <br />
                            <button type='submit'>Find Order</button>

                            <p>By continuing you agree to the <u>Terms & Conditions</u></p>
                        </div>
                    </div>
                </div>
                <SupportFaq/>

            </div>
        </>

    );
}

export default ReturnSupport;
