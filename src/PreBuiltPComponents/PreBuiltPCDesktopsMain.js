import React, { useState } from 'react';
import '../Css/PreBuiltPC.css';
import PreBuiltPCDetailCard from './PreBuiltPCDetailCard';

const PreBuiltPCDesktopsMain = () => {
    const [filterOption, setFilterOption] = useState(null);

    const handleFilterOption = (option) => {
        setFilterOption(option);
    };

    return (
        <>
            <div className="PreBuiltPCDesktopsTop2paneldropdownulicon">
                <span onClick={() => handleFilterOption('birlestir')}>birlestir</span>
                <span onClick={() => handleFilterOption('ikigoster')}>ikigoster</span>
            </div>

            <div className={`PreBuiltPCDesktopsMain ${filterOption === 'birlestir' ? 'PreBuiltPCDesktopsMainbirletir' : filterOption === 'ikigoster' ? 'PreBuiltPCDesktopsMainikigoster' : ''}`}>
                <PreBuiltPCDetailCard />
<<<<<<< HEAD
          
=======
<<<<<<< Updated upstream
                <PreBuiltPCDetailCard />
                <PreBuiltPCDetailCard />
                <PreBuiltPCDetailCard />
                <PreBuiltPCDetailCard />
                <PreBuiltPCDetailCard />
=======
          
>>>>>>> Stashed changes
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
            </div>
        </>
    );
};

export default PreBuiltPCDesktopsMain;
