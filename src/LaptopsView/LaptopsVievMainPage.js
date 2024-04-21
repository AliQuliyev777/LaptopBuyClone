import React, { useState } from 'react';
import '../Css/PreBuiltPC.css';
import '../Css/LaptopView.css';
<<<<<<< HEAD
=======
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
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
<<<<<<< HEAD
        
            <PreBuiltPcFiltersMenu />
            <PreBuiltPCfilters />
=======
<<<<<<< Updated upstream
            <PreBuiltPCfilters />
            <PreBuiltPcFiltersMenu />
=======
        
            <PreBuiltPcFiltersMenu />
            <PreBuiltPCfilters />
>>>>>>> Stashed changes
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
            <div className="PreBuiltPCDesktopsTop2paneldropdownulicon">
                <span onClick={() => handleFilterOption('birlestir')}>birlestir</span>
                <span onClick={() => handleFilterOption('ikigoster')}>ikigoster</span>
            </div>

            <div className={`PreBuiltPCDesktopsMain ${filterOption === 'birlestir' ? 'PreBuiltPCDesktopsMainbirletir' : filterOption === 'ikigoster' ? 'PreBuiltPCDesktopsMainikigoster' : ''}`}>

                <LaptopMainDetailCard />
<<<<<<< HEAD
  
=======
<<<<<<< Updated upstream
                <LaptopMainDetailCard />
                <LaptopMainDetailCard />
                <LaptopMainDetailCard />
                <LaptopMainDetailCard />
=======
  
>>>>>>> Stashed changes
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898

            </div>
        </>

    );
};

export default LaptopsVievMainPage;
