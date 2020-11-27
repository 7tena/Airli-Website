import React, { useState } from "react";
import Banner from "../graphics/Child-With-Arms-in-the-Air.jpg";

export default function Home() {
    const [scroll, setScroll] = useState(false);

    const changeBrightness = () => {
        if (window.scrollY >= 80) setScroll(true);
        else setScroll(false);
    };

    window.addEventListener("scroll", changeBrightness);

    return (
        <img
            src={Banner}
            alt='Airli'
            className={scroll ? `banner-scroll` : `banner`}
            draggable='false'
        />
    );
}
