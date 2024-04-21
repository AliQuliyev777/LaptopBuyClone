import React from 'react';
import '../Css/About.css';
// import Desktop from '../Images/pexels-fox-3829227.jpg'

const AboutWeDo = () => {
    return (
        <>
            <section className="AboutWeDoMain" >
                <div className="AboutWeDoText">
                    <h1>WHAT WE DO</h1>
                    <hr className="gf_separator2" />
                    <br />

                    <p>XOTIC PC is a Custom PC company that crafts PCs and Laptops for creators, gamers and professionals</p>
                </div>
                <div className="AboutWeDoimage">
                    <img src="https://ucarecdn.com/b1d04290-915b-421a-b546-1ec12c1c6e9f/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="" />
                </div>
            </section>

        </>
    );
}

export default AboutWeDo;
