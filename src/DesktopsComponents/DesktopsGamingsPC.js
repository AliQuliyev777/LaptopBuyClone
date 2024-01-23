import React from 'react';
import '../Css/Desktops.css';
import DesktopGamingsPCCard from './DesktopsGamingPCCard';

const DesktopGamingsPC = () => {

    return (
        <>
            <div className="DesktopsGamingPCMain">
                <h1>ADVANCED SERIES GAMING DESKTOPS</h1>
                <div className="DesktopsGamingPCsAll">
                    <DesktopGamingsPCCard />
                    <DesktopGamingsPCCard />
                    <DesktopGamingsPCCard />
                    <DesktopGamingsPCCard />
                    <DesktopGamingsPCCard />
                    <DesktopGamingsPCCard />
                    <DesktopGamingsPCCard />
                    <DesktopGamingsPCCard />
                    <DesktopGamingsPCCard />
                    
                </div>
            </div>
        </>

    );
};

export default DesktopGamingsPC;
