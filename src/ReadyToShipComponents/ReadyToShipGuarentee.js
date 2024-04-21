import React, { useState } from 'react';
import '../Css/Readytoship.css';

const ReadytoShipQuerentee = () => {
    const [activeItems, setActiveItems] = useState(Array(5).fill(false));

    const toggleAccordion = (index) => {
        const newActiveItems = [...activeItems];
        newActiveItems[index] = !newActiveItems[index];
        setActiveItems(newActiveItems);
    };

    return (
        <>
            <section className="ReadytoShipQuerenteeMain">
                <div className="parent-container">
                    <ul className="faq">
                        {[0, 1, 2, 3, 4].map((index) => (
                            <li key={index} className={activeItems[index] ? 'faqactive' : ''}>
                                <h3 className="question" onClick={() => toggleAccordion(index)}>
                                    LIFETIME DESKTOP WARRANTY {index + 1}?
                                    <div className={`plus-minus-toggle ${activeItems[index] ? '' : 'collapsed'}`}></div>
                                </h3>
                                <div className={`answer ${activeItems[index] ? 'open' : ''}`}>
                                    XOTIC PC provides a unique Limited Lifetime Service Policy (the "Lifetime Service Policy") for all newly purchased desktop computers. This policy ensures that customers receive remote assistance, allowing us to log into their systems and address any issues they may be facing. With the Lifetime Service Policy, XOTIC PC guarantees that the original purchaser of a new computer system will not be charged for labor or service costs related to that system for its entire lifespan. This policy covers only the original purchaser, original equipment, future upgrades purchased from and installed by XOTIC PC, and labor/service performed by XOTIC PC. As we manufactur computers and install all software ourselves, we possess extensive knowledge about the systems we create.                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="ReadytoShipGUARANTEE">
                    <div className="ReadytoShipGUARANTEEimg">
                        <img src="https://ucarecdn.com/d3c82227-57b4-4e9e-91c9-3d8fdee69401/Warranty.png" alt="" />

                    </div>
                    <div className="ReadytoShipGUARANTEEitext">
                        <h3>SERVICE GUARANTEE</h3>
                        <p>When you purchase an XOTICPC, you become a member of our permanently amazing extended family and not just a customer. Our XOTIC PC team has strong roots in the Midwest, and we love the region's work ethic and can-do attitude. Our goal is to ensure that every single one of our clients is completely satisfied.</p>

                    </div>

                </div>
            </section>

            <div className="ReadytoShipGUARANTEEAll">
                <div className="ReadytoShipGUARANTEE">
                 
                    <div className="ReadytoShipGUARANTEEitext">
                    <h2>COMMITMENT</h2>

                        <h3>CRAFTING PCS AND LAPTOPS FOR CREATORS, GAMERS AND PROFESSIONALS</h3>
                        <p>We meticulously craft a high-performance systems for you that will exceed all of your expectations. With the unrivaled build quality implemented into every system by our highly trained technicians, you are assured of receiving a machine of the absolute finest quality.</p>
                        <br />
                        <p>Every detail of an XOTIC PC system is carefully scrutinized and perfected through our QA testing. During testing, your system undergoes a lengthy “burn-in” process, a rigorous quality control inspection to ensure your system operates at peak performance right out of the box. </p>
                    </div>
                </div>
                <div className="ReadytoShipGUARANTEE">
                    <div className="ReadytoShipGUARANTEEitext">
                        <div className="ReadytoShipGUARANTEEitextAlll">
                            <div className="ReadytoShipGUARANTEEitexIMG">
                                <i class="fa-solid fa-gear"></i>
                            </div>
                            <div className="ReadytoShipGUARANTEEitexIMGtext">

                                <p>Each component used in production is carefully selected.</p>
                            </div>
                        </div>
                        <div className="ReadytoShipGUARANTEEitextAlll">
                            <div className="ReadytoShipGUARANTEEitexIMG">
                                <i class="fa-solid fa-fire"></i>
                            </div>
                            <div className="ReadytoShipGUARANTEEitexIMGtext">

                                <p>We only use proven parts from well-known manufacturers in our assembling process.</p>
                            </div>
                        </div>
                        <div className="ReadytoShipGUARANTEEitextAlll">
                            <div className="ReadytoShipGUARANTEEitexIMG">
                                <i class="fa-solid fa-screwdriver"></i>
                            </div>
                            <div className="ReadytoShipGUARANTEEitexIMGtext">

                                <p>Our years of experience have allowed us to develop the ideal computer strategy, which takes into account every crucial detail.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </>
    );
}

export default ReadytoShipQuerentee;
