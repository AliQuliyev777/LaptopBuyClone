import React, { useState } from 'react';
import '../Css/Customization.css';

const FagCustom = () => {
    const faqData = [
        {
            question: 'Wrap Gallery',
            answer: (
                <div className="allduv">
                    <div className="alldduv2">
                        <img src="https://cdn.shopify.com/s/files/1/0228/7629/1136/files/flips-1_750x750.png?v=1582213016" alt="" />
                        <img src="https://cdn.shopify.com/s/files/1/0228/7629/1136/files/flips-2_750x750.png?v=1582213188" alt="" />
                    </div>

                    <div className="allduv1">
                        <h4>Textures</h4>

                        <img src="https://cdn.shopify.com/s/files/1/0228/7629/1136/files/textures-1_750x750.png?v=1582215857" alt="" />
                        <img src="https://cdn.shopify.com/s/files/1/0228/7629/1136/files/textures-2_750x750.png?v=1582217361" alt="" />
                    </div>

                    <div className="Satin">
                        <p>Satin </p>
                        <img src="https://cdn.shopify.com/s/files/1/0228/7629/1136/files/satin-1_750x750.png?v=1582220988" alt="" />
                        <img src="https://cdn.shopify.com/s/files/1/0228/7629/1136/files/satin-2_750x750.png?v=1582221077" alt="" />
                    </div>

                    <div className="ColorFlow">
                        <p>Color-Flow</p>
                        <img src="https://cdn.shopify.com/s/files/1/0228/7629/1136/files/color-flow-1_750x750.png?v=1582221708" alt="" />
                    </div>
                </div>

            ),
        },
        {
            question: 'Paint Gallery',
            answer: (
                <div className="allduv">
                    <div className="alldduv2">
                        <img src="https://cdn.shopify.com/s/files/1/0228/7629/1136/files/mouse-1_750x750.png?v=1582229381" alt="" />
                        <img src="https://cdn.shopify.com/s/files/1/0228/7629/1136/files/mouse-2_750x750.png?v=1582229444" alt="" />
                    </div>

                </div>

            ),
        },
        {
            question: 'Etch Gallery',
            answer: (
                <div className="allduv">
                    <div className="alldduv2">
                        <img src="https://cdn.shopify.com/s/files/1/0228/7629/1136/files/etch-1_750x750.png?v=1582226841" alt="" />
                        <img src="https://cdn.shopify.com/s/files/1/0228/7629/1136/files/etch-2_750x750.png?v=1582227020" alt="" />
                    </div>

                </div>

            ),
        },
        {
            question: 'Can I submit my own design for any of your customizations?',
            answer: (
                <div className="allduv ">
                    <p className='bg-fuchsia-500	'>Absolutely! Images submitted must be 600DPI in “.jpeg” or “.psd” (Photoshop) formats. Submit your custom design to: artwork@xoticpc.com. Please note that custom designs will need to be approved. Due to the varying nature of laptop and desktop surfaces, dimensions and sizes; images may be rejected or need to be altered. If you would like our design department to alter your image; a rate of $60/hour will apply to all images that need to be altered. You will be notified of this change request before any charges will be applied.

                    </p>

                </div>

            ),
        },
        // Diğer soru ve cevaplar
    ];

    const [activeItems, setActiveItems] = useState([]);

    const toggleItem = (index) => {
        if (activeItems.includes(index)) {
            setActiveItems(activeItems.filter(itemIndex => itemIndex !== index));
        } else {
            setActiveItems([...activeItems, index]);
        }
    };

    return (
        <div className="FagCustomMain">
            <div className="parent-container">
                <ul className="faq">
                    {faqData.map((item, index) => (
                        <li key={index}>
                            <h3
                                className={`question ${activeItems.includes(index) ? 'active' : ''}`}
                                onClick={() => toggleItem(index)}
                            >
                                {item.question}
                                <div className={`plus-minus-toggle ${activeItems.includes(index) ? '' : 'collapsed'}`}></div>
                            </h3>
                            <div className={`answer ${activeItems.includes(index) ? 'active' : ''}`}>
                                {item.answer}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default FagCustom;
