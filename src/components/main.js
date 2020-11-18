import React from 'react';
import AboutUs from './aboutus';
import OurStory from './ourstory';
import MissionVision from './missionvision';
import Values from './values';
import Strategy from './strategy';
import Businessplan from './businessplan';
import Ourteam from './ourteam';
import Amp from './amp';

function Main(){
    return(
        <div>
            <h2>Airli</h2>
            <AboutUs />
            <OurStory />
            <MissionVision />
            <Values />
            <Strategy />
            <Businessplan/>
            <Ourteam/>
            <Amp/>
        </div>
    )
}

export default Main;