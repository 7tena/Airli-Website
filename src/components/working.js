import React from "react";

export default function Working() {
    return (
        <div className='container'>
            <div className='row flex-container work'>
                <div className='col-11 col-sm-10 col-md-5' id='applink'>
                    <h3 id='work-title'>
                        How Does It
                        <br /> Work?
                    </h3>
                    <p id='work-text'>
                        Airli makes a real difference to the lives of people
                        with allergy and Asthma. Watch how Airli works.
                    </p>
                </div>
                <div className='col-11 col-sm-10 col-md-7'>
                    <div className='embed-responsive-item video'>
                        <iframe
                            title='How Airli Works'
                            width='560'
                            height='315'
                            src={"https://drive.google.com/file/d/1rDvuBlxlEHk1iAY90DNFRTmp-CJ-vIC3/preview"}
                            frameBorder='0'
                            className="embed-responsive-item"
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen='allowfullscreen'
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
