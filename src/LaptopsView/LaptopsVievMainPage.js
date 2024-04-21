import React, { useState } from 'react';
import '../Css/PreBuiltPC.css';
import '../Css/LaptopView.css';
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            <PreBuiltPCfilters />
            <PreBuiltPcFiltersMenu />
=======
        
            <PreBuiltPcFiltersMenu />
            <PreBuiltPCfilters />
>>>>>>> Stashed changes
            <div className="PreBuiltPCDesktopsTop2paneldropdownulicon">
                <span onClick={() => handleFilterOption('birlestir')}>birlestir</span>
                <span onClick={() => handleFilterOption('ikigoster')}>ikigoster</span>
            </div>

            <div className={`PreBuiltPCDesktopsMain ${filterOption === 'birlestir' ? 'PreBuiltPCDesktopsMainbirletir' : filterOption === 'ikigoster' ? 'PreBuiltPCDesktopsMainikigoster' : ''}`}>

                <LaptopMainDetailCard />
<<<<<<< Updated upstream
                <LaptopMainDetailCard />
                <LaptopMainDetailCard />
                <LaptopMainDetailCard />
                <LaptopMainDetailCard />
=======
  
>>>>>>> Stashed changes

            </div>
        </>

    );
};

export default LaptopsVievMainPage;
