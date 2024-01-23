import React, { useState } from 'react';
import '../Css/PreBuiltPC.css';
import '../Css/LaptopView.css';

import PreBuiltPCfilters from '../PreBuiltPComponents/PreBuiltPCfilters';
import PreBuiltPcFiltersMenu from '../PreBuiltPComponents/PreBuiltPcFiltersMenu';
import LaptopMainDetailCard from './LaptopMainDetailCard';


const LaptopsVievMainPage = () => {
    const [filterOption, setFilterOption] = useState(null);

    const handleFilterOption = (option) => {
        setFilterOption(option);
    };

    return (
        <>
            <PreBuiltPCfilters />
            <PreBuiltPcFiltersMenu />
            <div className="PreBuiltPCDesktopsTop2paneldropdownulicon">
                <span onClick={() => handleFilterOption('birlestir')}>birlestir</span>
                <span onClick={() => handleFilterOption('ikigoster')}>ikigoster</span>
            </div>

            <div className={`PreBuiltPCDesktopsMain ${filterOption === 'birlestir' ? 'PreBuiltPCDesktopsMainbirletir' : filterOption === 'ikigoster' ? 'PreBuiltPCDesktopsMainikigoster' : ''}`}>

                <LaptopMainDetailCard />
                <LaptopMainDetailCard />
                <LaptopMainDetailCard />
                <LaptopMainDetailCard />
                <LaptopMainDetailCard />

            </div>
        </>

    );
};

export default LaptopsVievMainPage;
