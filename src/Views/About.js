import React from 'react';
import '../Css/About.css';
import AboutHomeSlide from '../AboutComponents/AboutHomeSlide';
import AboutWeDo from '../AboutComponents/AboutWeDo';
import AboutCommitment from '../AboutComponents/AboutCommitment';
import AboutHeritage from '../AboutComponents/AboutHeritage';
import AboutRoots from '../AboutComponents/AboutRoots';
import AboutBuilt from '../AboutComponents/AboutBuilt';
import AboutReviews from '../AboutComponents/AboutReviews';
import AboutLearnmore from '../AboutComponents/AboutLearnmore';

const About = () => {
    return (
        <section className="AboutMain" >
            <AboutHomeSlide/>
            <AboutWeDo/>
            <AboutCommitment/>
            <AboutHeritage/>
            <AboutRoots/>
            <AboutBuilt/>
            <AboutReviews/>
            <AboutLearnmore/>
        </section>
    );
}

export default About;
