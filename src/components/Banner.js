import React, { useState } from "react";
import Banner from "../graphics/Child-With-Arms-in-the-Air.jpg";
import whiteLogo from "../graphics/airli-logo-white.png";

export default function Home() {
    const [scroll, setScroll] = useState(false);

    const changeBrightness = () => {
        if (window.scrollY >= 80) setScroll(true);
        else setScroll(false);
    };

    window.addEventListener("scroll", changeBrightness);

    return (
        <div id='banner'>
            <img
                src={Banner}
                alt='Airli'
                className={scroll ? `banner-scroll` : `banner`}
                draggable='false'
            />
            <img
                src={whiteLogo}
                alt='Airli'
                className='whitelogo'
                draggable='false'
            />
            <div className={scroll ? `text-scroll` : `text`}>
                Creating Better Quality of Life for Asthma sufferers. <br />
                Everyday. Everywhere. Everyone.
            </div>
        </div>
    );
}
