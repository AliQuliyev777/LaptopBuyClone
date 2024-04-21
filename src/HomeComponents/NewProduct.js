import React from 'react';
import '../Css/Home.css'
import { Link } from 'react-router-dom';

const NewProduct = () => {
    return (
        
        <header className="NewProduct">
            <div className="NewProductAllDiv">
                <div className="NewProductDiv1 overlay">
                    <div className="NewProductDivimg">
                        <img src="https://m.media-amazon.com/images/I/81f18aev4JS._AC_SL1500_.jpg" alt="" />
                    </div>
                    <div className="NewProductDivText">
                        <div className="NewProductDivtext-edit">
                            <h4 className="gf_gs-text-heading-2">New<br />GX13 HYTE</h4>
                        </div>
                        <div className="gf_gs-text-paragraph-1">
                            <p>Unleash the epic magic of your PC! Have your mind blown by the extraordinary GX13 HYTE, the ultimate spectacle of awesomeness. It's like a party for your eyes with its jaw-dropping panoramic tempered glass extravaganza, showcasing your rig in a way that will make your friends go wild. But wait, there's more! Prepare to be amazed by the ingenious protective riser cable canopy, seamlessly blending with the case and giving those half-height PCI-E cards the regal treatment right behind the majestic vertical graphics card throne. Get ready to be treated like a PC god and indulge in a visual feast like no other!</p>
                        </div>
                        <Link className="NewProductButton" to="/laptopsviewall">
                            <span>Show Desktop</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default NewProduct;