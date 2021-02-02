import React from "react";
import MissionVision from "./missionvision";
import Values from "./values";
import Strategy from "./strategy";

export default function Businessplan() {
    return (
        <div id='other'>
            <div className='container div-up'></div>
            <MissionVision />
            <div className='container div-down'></div>
            <Values />
            <div className='container div-up'></div>
            <Strategy />
            <div className='container div-down'></div>
        </div>
    );
}
