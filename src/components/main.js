import React from "react";
import AboutUs from "./aboutus";
import OurStory from "./ourstory";
import MissionVision from "./missionvision";
import Values from "./values";
import Strategy from "./strategy";
import Businessplan from "./businessplan";
import Ourteam from "./ourteam";
import Amp from "./amp";
import DownloadApp from "./DownloadApp";
import Navigation from './navigation';

function Main() {
    return (
        <div>
            <Navigation />
            <AboutUs />
            <OurStory />
            <MissionVision />
            <Values />
            <Strategy />
            <Businessplan />
            <Ourteam />
            <Amp />
            <DownloadApp />
        </div>
    );
}

export default Main;
