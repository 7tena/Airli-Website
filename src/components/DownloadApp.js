import React from "react";
import playstore from "../graphics/Google-Play-Store-badge.svg";
import appstore from "../graphics/Download-on-the-App-Store.svg";

const DownloadApp = () => {
    return (
        <div className='container'>
            <h3>Download App</h3>
            <section className='flex-container'>
                <article id='applink'>
                    <h4 id='applinktext'>Try Airli</h4>
                    <p id='applinkdescription'>
                        Download Airli for real time contextualised location
                        based air quality health data on iOS and Android.
                    </p>
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
                </article>
                <article id='appimg'>
                    <figure id='phones'></figure>
                </article>
            </section>
        </div>
    );
};

export default DownloadApp;
