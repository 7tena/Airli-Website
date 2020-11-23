import React from "react";
import pollen from "../graphics/pollen.png";
import health from "../graphics/health.png";
import inhaler from "../graphics/inhaler.png";

export default function Amp() {
    return (
        <div className='container'>
            <h3>Asthma Management Platform</h3>
            <p>
                Providing real time contextualized location based Air Quality
                Health data every day, everywhere, and for everyone. Satellite
                data is transmitted to servers / repositories in cloud- The data
                includes Vegetation Index, Weather, Wind, Rainfall, Climate
                patterns, Pollution, CO2 emissions, Celestial body positions,
                transits and forces, and many more variables, which are more
                significantly predictive than others. Log symptoms, track
                medicines usage, live doctor chat and digital asthma community
                forum.
            </p>
            <h3>Services</h3>
            <p>
                Airli makes a real difference to the lives of people with
                Allergy and Asthma
            </p>
            {/* <section className='flex-container'>
                <article id='pollen'>
                    <img alt='Pollen Alerts' src={pollen} />
                    <h4>Pollen Alerts</h4>
                    <p>
                        Alert by user when there are critical pollen level in
                        the Air. Predicts levels based on weather, season and
                        live satellite location data.
                    </p>
                </article>
                <article id='health'>
                    <img alt='Live Health Data' src={health} />
                    <h4>Live Health Data</h4>
                    <p>
                        Provides location based outdoor Air quality health data
                        for BREATH EASY
                    </p>
                </article>

            </section> */}
            <div className="container-fluid">
                <div class="row">
                    <div className="col-sm-4">
                        <article >
                            <img alt='Pollen Alerts' src={pollen} style={{width:200}}/>
                            <h4 id="sid">Pollen Alerts</h4>
                            <p>
                            Alert by user when there are critical pollen level in
                        the Air. Predicts levels based on weather, season and
                        live satellite location data.
                            </p>
                        </article>
                    </div>
                    <div className="col-sm-4">
                        <article >
                            <img alt='Pollen Alerts' src={inhaler} style={{width:200}} />
                            <h4 id="sid">Asthma management</h4>
                            <p>
                            Logs symptoms, tracks medicine usage, provides live doctor chat and digital Asthma community forum
                            </p>
                        </article>
                    </div>
                    <div className="col-sm-4">
                        <article >
                            <img alt='Pollen Alerts' src={health} style={{width:200,height:200}}/>
                            <h4 id="sid">Live Health Data</h4>
                            <p>
                            Provides location based outdoor Air quality health data
                        for BREATH EASY
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
}
