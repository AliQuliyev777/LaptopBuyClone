import React from 'react';
import '../Css/About.css';
import { Link } from 'react-router-dom';

const AboutLearnmore = () => {
    return (
        <>
            <section className="AboutCommitment" >
                <div className="AboutCommitmenttext">
                    <h1 className='textH11'>LEARN MORE ABOUT OUR PCS</h1>
                </div>
                <div className="AboutCommitmentPcDiv">
                    {/* <div className="AboutCommitmentPcDivdiv1"> */}
                 
                    <div class="parent" onclick="">
                        <div class="child bg-one">
                            <Link to="/">
                                <span>Laptops</span>
                            </Link>
                        </div>
                        
                    </div>
                    <div class="parent" onclick="">
                        <div class="child bg-two">
                            <Link to="/">
                                <span>Desktop</span>
                            </Link>
                        </div>
                        
                    </div>


                </div>
            </section>
        </>
    );
}

export default AboutLearnmore;
