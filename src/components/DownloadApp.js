import React from "react";
import playstore from "../graphics/Google-Play-Store-badge.svg";
import appstore from "../graphics/Download-on-the-App-Store.svg";

const DownloadApp = () => {
    return (
        <div className='container'>
            <h3>Download App</h3>Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. A vulputate elit fringilla consectetur quis lorem
            augue lobortis. Suscipit.
            <a href='https://play.google.com/' alt='Get it on Google Play'>
                <img alt='Get it on Google Play' src={playstore} />
            </a>
            <a
                href='https://www.apple.com/app-store/'
                alt='Download on the App Store'
            >
                <img alt='Download on the App Store' src={appstore} />
            </a>
            <aside id='phones'></aside>
        </div>
    );
};

export default DownloadApp;
