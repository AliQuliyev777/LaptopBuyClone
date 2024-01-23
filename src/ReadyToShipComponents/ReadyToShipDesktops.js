import React from 'react';
import '../Css/Readytoship.css';
import ReadyToShipDesktopCard from './ReadyToShipDesktopCard';
// import { Link } from 'react-router-dom';

const ReadyToShipDesktops = () => {
    return (
        <>
            <section className="ReadyToShipDesktopsMain" >
                <ReadyToShipDesktopCard />
                <ReadyToShipDesktopCard />
                <ReadyToShipDesktopCard />
                <ReadyToShipDesktopCard />
            </section>
        </>
    );
}

export default ReadyToShipDesktops;
