import React from 'react';
import '../Css/Readytoship.css';
import ReadytoShipFirstPage from '../ReadyToShipComponents/ReadyToShipFirstPage';
import ReadytoShipSecondary from '../ReadyToShipComponents/ReadyToShipSecondary';
import ReadyToShipDesktops from '../ReadyToShipComponents/ReadyToShipDesktops';
import ReadytoShipQuerentee from '../ReadyToShipComponents/ReadyToShipGuarentee';

const ReadytoShip = () => {
    return (
        <>
            <ReadytoShipFirstPage />
            <ReadytoShipSecondary />
            <ReadyToShipDesktops />
            <ReadytoShipQuerentee/>
        </>
    );
}

export default ReadytoShip;
