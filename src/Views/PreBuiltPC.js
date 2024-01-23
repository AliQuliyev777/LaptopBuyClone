import React from 'react';
import '../Css/PreBuiltPC.css';
import PreBuiltPCfilters from '../PreBuiltPComponents/PreBuiltPCfilters';
import PreBuiltPcFiltersMenu from '../PreBuiltPComponents/PreBuiltPcFiltersMenu';
import PreBuiltPCDesktopsMain from '../PreBuiltPComponents/PreBuiltPCDesktopsMain';

const PreBuiltPC = () => {

    return (
        <>
            <PreBuiltPCfilters />
            <PreBuiltPcFiltersMenu />
            <PreBuiltPCDesktopsMain />

        </>

    );
};

export default PreBuiltPC;
