import React from "react";
import Ourteam from "./ourteam";
import Banner from "../graphics/Child-With-Arms-in-the-Air.jpg";
import Amp from "./amp";
import Working from "./working";
import DownloadApp from "./DownloadApp";

export default function Home() {
    return (
        <div>
            <img
                src={Banner}
                alt='Airli'
                className='banner'
                draggable='false'
            />
            <div className='container div-down align-top'></div>
            <Amp />
            <div className='container div-up'></div>
            <Working />
            <div className='container div-down'></div>
            <Ourteam />
            <div className='container div-up'></div>
            <DownloadApp />
            <div className='container div-down align-top'></div>
        </div>
    );
}
