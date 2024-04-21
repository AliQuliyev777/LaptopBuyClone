import React from 'react';
import '../Css/Desktops.css';
import DesktopsVideo from '../DesktopsComponents/DesktopsVideo';
import DesktopGamingsPC from '../DesktopsComponents/DesktopsGamingsPC';
import DesktopGamingPCVideoSeconry from '../DesktopsComponents/DesktopGamingPCVideoSecondry';

const Desktops = () => {

    return (
        <>
            <div className="DesktopsMain">
                <DesktopsVideo />
                <DesktopGamingsPC />
                <DesktopGamingPCVideoSeconry />
                <DesktopGamingsPC />

            </div>
        </>

    );
};

export default Desktops;
