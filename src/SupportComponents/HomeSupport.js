// ReklamDesktop.js
import React from 'react';
import '../Css/SupportSlide.css';
import { Link } from 'react-router-dom';

const ReklamDesktop = () => {
    return (
        <>
            <div className="HomeSupportRequestMain">
                <div className="HomeSupportRequestMainButton">
                    <Link >
                        <span>Submit Support Request</span>
                    </Link>
                </div>
                <div className="HomeSupportRequestMainDivs">
                    <div className="HomeSupportRequestMainDiv1">
                        <i className="fa-solid fa-phone"></i>
                        <br />
                        <h1>Lifetime service guarantee</h1>
                        <p>Once you buy XOTICPC your a member of our family for life.   Deep in the roots of all XOTIC PC staff is hardworking midwest values.  In our core we unwaveringly believe hard work and perseverance will pay off in the long run.  We are relentless to achieve customer satisfaction.   </p>
                        <br />
                        <p>Need support?   It is as easy as coming into our Live Chat, Emailing us or giving us a call.    We use a ticketing system for all emailed support requests that will acknowledge receipt of email within seconds of receipt.    </p>
                        <br />
                        <p>Want to speak to a Live Support Hero?   Please call us or come into Chat.   We have a dedicated support team to be there for any request.</p>
                        <br />
                        <p>Telephone:  1-877-289-9684 or 402-466-2090</p>
                        <p>Email: <strong> support@xoticpc.com </strong></p>
                        <p>Looking for order status?  <strong>Click Here </strong></p>
                    </div>
                    <div className="HomeSupportRequestMainDiv1">
                        <i className="fa-regular fa-file"></i>
                        <br />
                        <h1>Lifetime labor for all your needs</h1>
                        <p>Here at XOTIC PC we have one of the most comprehensive warranty policies in the industry.   Want to upgrade your system?    XOTIC PC provides lifetime free labor for the life of your PC.    Technology changes every day and we are your resource to help give you a upgrade path to get the most of your PC.  Even when your parts warranty expires, we are happy to continue to answer your questions and even fix your computer with no labor costs.    </p>
                        <br />

                    </div>
                    <div className="HomeSupportRequestMainDiv1">
                        <i className="fa-solid fa-user"></i>
                        <br />
                        <h1>Dedicated support teams</h1>
                        <p>The XOTIC PC Team is here because of you and are here to serve you.   When you contact XOTIC PC your calling our Midwest Support Team located in Lincoln Nebraska, not some other country.      </p>

                    </div>
                </div>
                {/* Second Div */}


                <div className="HomeSupportRequestMainDivs">
                    <div className="HomeSupportRequestMainDiv1">
                        <i className="fa-solid fa-headphones-simple"></i>
                        <br />
                        <h1>Knowledgeable and resourceful support staff</h1>
                        <p>Our commitment is easy.   We deliver cutting edge technology with rock solid stability and support.   All systems are hand built to order and supported by true enthusiasts.    </p>
                        <br />
                        <p>When you spend hard earned money on a new PC, you have high expectations, and we understand that.  Some point, you'll have a question about your new computer.  It is our commitment to be ready to give you the help you need.  When we sell a computer system, we stand behind it.</p>

                    </div>
                    <div className="HomeSupportRequestMainDiv1">
                        <i className="fa-solid fa-display"></i>
                        <br />
                        <h1>Remote access support </h1>
                        <p>With selling electronic parts for over 20 years now, there will always be some form of problem or incompatibility that will arise.   There is no hiding behind that.    Dealing with numerous hardware components and software applications needing to communicate and get along together we understand the in's and outs of the hardware and software being used.</p>
                        <br />
                        <p>What is different with our approach is we understand that we need to limit down time.   We have relationships set up with all of our partners to ensure quick repair turnaround.   Additionally our Support Hero's use a full array of tools to assist you, including remote access to your system.    Our support team is here for you and available in several channels - Email, Phone, SMS & Live Chat.</p>
                    </div>
                    <div className="HomeSupportRequestMainDiv1">
                        <i className="fa-solid fa-truck"></i>
                        <br />
                        <h1>Replacement shipping & FREE Returns</h1>
                        <p>Over the years manufacturers have done extremely well and built parts that are consistent and fail less then they ever have.   Although we rigorously test every component for rock solid stability, sometimes electronic parts fail.   If they do shipment of replacement parts or shipping back to the lab for hands on troubleshooting are available.   If in the event something fails within the first 30 Days, XOTIC PC picks up all expenses to repair or replace your PC.      </p>

                    </div>
                </div>

                <div className="HomeSupportRequesUpgradePolicy">
                    <h4>LIFETIME PLATINUM UPGRADE POLICY</h4>
                    <div className="HomeSupportRequesUpgradePolicyDivs">
                        <div className="HomeSupportRequesUpgradePolicyDiv1">
                            <img src="https://cdn.shopify.com/s/files/1/0228/7629/1136/files/upgrade-program_1_3000x3000.png?89555" alt="" />
                        </div>
                        <div className="HomeSupportRequesUpgradePolicyDiv2">
                            <br />
                            <p>Our mission at Xotic PC is not only to ensure top quality assembly and products in any laptop system, but longevity of that system. We want you to have the satisfaction of knowing that you will get many years out of your new computer purchase. The XOTIC PC Lifetime Platinum Upgrade Policy guarantees that you get the latest and greatest parts even after your purchase with up to date, current and future technology from the industry's top manufacturers and producers.</p>
                            <br />
                            <p>At any time after your laptop purchase, you wish to upgrade to more current or greater performing internal and external components, XOTIC PC will upgrade those parts for you at the lowest cost possible.</p>
                            <br />
                            <p>You, as the customer, are responsible for shipping your laptop to and from XOTIC PC facilities for such upgrades, plus the cost of the component upgrade you wish at our component cost, with an additional low 5%. All labor and testing costs are on us. In addition to the upgrades you wish, free of charge services are added including assembly, component and/or product testing, configuring, and benchmarking. As well as, chassis cleaning, software, firmware and driver updates, fan cleaning, and if you wish; fresh operating system installation and new recovery disks.</p>
                            <br />
                            <p>New computers can be expensive, and if all you want is the newest, latest and greatest component, then our new Platinum Upgrade Policy is perfect for giving you the savings you deserve.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default ReklamDesktop;
