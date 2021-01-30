import React from "react";
import Ourteam from "./ourteam";
import Banner from "./Banner";
import Amp from "./amp";
import Working from "./working";
import DownloadApp from "./DownloadApp";
import Connect from "./connect";
import ReachUs from "./reachus";

export default function Home() {
    return (
        <div>
            <Banner />
            <div className='container div-down align-top'></div>
            <Amp />
            <div className='container div-up'></div>
            <Working />
            <div className='container div-down'></div>
            <Ourteam />
            {/* <div className='container div-up'></div> */}
            <DownloadApp />
            <div className="container div-down"></div>
            <Connect />
            <div className="container div-up"></div>
            <ReachUs />
            <div className='container div-down align-center'></div>
        </div>
    );
}
