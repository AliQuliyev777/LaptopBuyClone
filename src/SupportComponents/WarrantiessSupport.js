import React from 'react';
import '../Css/SupportSlide.css';


const WarrantiessSupport = () => {
    return (
        <>
            <div className="SupportFaqAllDiv">


                <h3>Frequently Asked Questions</h3>
                <div className="relative mb-4">
                    <input type="checkbox" id="toggle12" className="toggle hidden" />
                    <label className="title block font-bold bg-white p-4 cursor-pointer text-align-center" htmlFor="toggle12">
                        How do FREE Returns work?
                    </label>
                    <div className="content bg-white overflow-hidden  ">
                        <p className="p-4">Any returns for store credit or warranty within 30 days of shipment are covered for FREE Returns.    You can return the item for any reason  for up to 30 days after shipment.</p>
                    </div>
                </div>


                <div className="relative mb-4">
                    <input type="checkbox" id="toggle13" className="toggle hidden" />
                    <label className="title block font-bold bg-white p-4 cursor-pointer text-align-center" htmlFor="toggle13">
                        What can I return?
                    </label>
                    <div className="content bg-white overflow-hidden">
                        <p className="p-4">You can return any item within 30 days of shipment.</p>
                    </div>
                </div>

            </div>
 


        </>
    );
}

export default WarrantiessSupport;
