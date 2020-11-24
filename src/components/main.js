import React from "react";
import AboutUs from "./aboutus";
import OurStory from "./ourstory";
import MissionVision from "./missionvision";
import Values from "./values";
import Strategy from "./strategy";
import Businessplan from "./businessplan";
import Ourteam from "./ourteam";
import Banner from "../graphics/Child-With-Arms-in-the-Air.jpg"
import Amp from "./amp";
import DownloadApp from "./DownloadApp";
import Navigation from "./navigation";
import Footer from "./footer";
function Main() {
    return (
        <div>
            <Navigation />
            <img src={Banner} alt="Airli" className="banner" />
            <AboutUs />
            <div className='container div-down'></div>
            <OurStory />
            <div className='container div-up'></div>
            <MissionVision />
            <div className='container div-down'></div>
            <Values />
            <div className='container div-up'></div>
            <Strategy />
            <div className='container div-down'></div>
            <Businessplan />
            <div className='container div-up'></div>
            <Ourteam />
            <div className='container div-down'></div>
            <Amp />
            <div className='container div-up'></div>
            <DownloadApp />
            <div className='container div-down'></div>
            <Footer />
        </div>
    );
}

export default Main;
