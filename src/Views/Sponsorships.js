import React from 'react';
import SponsorshipsHome from '../SponsorshipsComponents/SponsorshipsHome';
import '../Css/Sponsorships.css';
import SponsorRequest from '../SponsorshipsComponents/SponsorRequest';



const Sponsorships = () => {
    return (
        <>
            <div className="SponsorshipsMain">
                < SponsorshipsHome />
                < SponsorRequest />

            </div>

        </>
    );
}

export default Sponsorships;
