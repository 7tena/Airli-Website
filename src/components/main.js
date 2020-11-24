import React from "react";
import Ourteam from "./ourteam";
import Banner from "../graphics/Child-With-Arms-in-the-Air.jpg"
import Amp from "./amp";
import DownloadApp from "./DownloadApp";
import Navigation from "./navigation";
import Footer from "./footer";
import Working from "./working";
function Main() {
    
    
    return (
       
        <div>
            <Navigation />
            <img src={Banner} alt="Airli" className="banner" />
            
            <div className='container div-down'></div>
            <Amp />
            
            <div className='container div-up'></div>
            <Working/>
            <div className='container div-down'></div>
            <Ourteam />
            <div className='container div-up'></div>
           
            <div className='container div-down'></div>
            <DownloadApp />
            <div className='container div-down'></div>
            
           
            
            <Footer />
        </div>
    );
}

export default Main;
