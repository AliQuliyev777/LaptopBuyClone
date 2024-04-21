// ReklamDesktop.js
import React from 'react';
import '../Css/Home.css';
import {Link } from 'react-router-dom';

const ReklamDesktop = () => {
    return (
        <header className="HomeImage">
            <div className="ImageDiv">
                <img className="" src="https://ucarecdn.com/d140ed52-de85-46a7-b725-e3885acaa303/header.png" alt="..." />
            </div>
            <div className="ImagetextDiv">
                <h2>PRE-BUILT GAMING COMPUTERS</h2>
                <p>Looking for an easy way to fulfill your computer needs? Look no further! </p>
                <div className="ImageButton">
<<<<<<< HEAD
                    <Link className="show" to="/laptopsviewall" >
                        <span>Show Desktops</span>
=======
<<<<<<< Updated upstream
                    <Link className="show" >
                        <span>Show Desktops</span>
        
=======
                    <Link className="show" to="/laptopsviewall" >
                        <span>Show Desktops</span>
>>>>>>> Stashed changes
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default ReklamDesktop;
