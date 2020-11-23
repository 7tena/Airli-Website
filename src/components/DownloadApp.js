import React from "react";
import playstore from "../graphics/Google-Play-Store-badge.svg";
import appstore from "../graphics/Download-on-the-App-Store.svg";

const DownloadApp = () => {
    return (
        <div className='container'>
            <h3>Download App</h3>
            <section className='flex-container'>
                <div className="col-sm-6">
                <article id='applink'>
                    <div id='gap2'></div>
                    <h4 id='applinktext'>Try Airli</h4>
                    <p id='applinkdescription'>
                        For real time contextualised location based air quality
                        health data on Android and iOS.
                    </p>
                    <div id='gap1'></div>
                    <div id='badge'>
                        <a
                            href='https://play.google.com/'
                            alt='Get it on Google Play'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img alt='Get it on Google Play' src={playstore} />
                        </a>
                    </div>
                    <div id='gap2'></div>
                    <div id='badge'>
                        <a
                            href='https://apps.apple.com/'
                            alt='Download on the App Store'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                alt='Download on the App Store'
                                src={appstore}
                            />
                        </a>
                    </div>
                    <div id='gap2'></div>
                    
                </article>
                </div>
                
                <article id='appimg'>
                    <figure id='phones'></figure>
                </article>
                
            </section>
            <p>* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    );
};

export default DownloadApp;
