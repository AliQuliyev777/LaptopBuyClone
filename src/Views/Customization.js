import React from 'react';
import '../Css/Customization.css';
import CustomizationFirstVideo from '../CustomizationComponents/CustomationFirstVideo';
import CustomationHydro from '../CustomizationComponents/CustomationHydro';
import CustomationMethodical from '../CustomizationComponents/CustomationMethodical';
import CustomationWraps from '../CustomizationComponents/CustomationWraps';
import CustomizationPrinting from '../CustomizationComponents/CustomizationPrinting';
import CustomationSecondryVideo from '../CustomizationComponents/CustomationSecondryVideo';
import CustomizationSwipper from '../CustomizationComponents/CustomizationSwipper';
import FagCustom from '../CustomizationComponents/FagCustom';

const Customization = () => {

    return (
        <>
            <div className="CustomizationMain">
                <CustomizationFirstVideo />
                <CustomationHydro />
                <CustomationMethodical />
                <CustomationWraps />
                <CustomizationPrinting />
                <CustomationSecondryVideo />
                <CustomizationSwipper />
                <FagCustom />
            </div>
        </>

    );
};

export default Customization;