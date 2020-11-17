import React from 'react';
import AboutUs from './aboutus';
import OurStory from './ourstory';
import MissionVision from './missionvision';
import Values from './values';

function Main(){
    return(
        <div>
            <h2>Airli</h2>
            <AboutUs />
            <OurStory />
            <MissionVision />
            <Values />
        </div>
    )
}

export default Main;