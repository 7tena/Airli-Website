import React from "react";
import pollen from "../graphics/pollen.png";
import health from "../graphics/health.png";
import inhaler from "../graphics/inhaler.png";
import amp from "../graphics/amp.svg";

export default function Amp() {
    return (
        <div className='container-fluid'>
            <div class='row'>
                <div class='col-sm-7 '>
                    <h3 style={{ textAlign: "right",marginTop:"30%" }}>
                        Asthma <br></br>Management <br/>Platform
                    </h3>
                    <p style={{ textAlign: "right" }}>
                        Providing real time contextualized location based Air<br/>
                        Quality Health Data everyday, everywhere, and for<br/>
                        everyone.<br/> Satellite data is transmitted to
                        servers/repositories<br/> in cloud — the data includes
                        Vegetation Index, Weather,<br/> Wind, Rainfall, Climate
                        patterns, Pollution, CO<sub>2</sub> emissions,<br/> Celestial
                        body positions, transits and forces, and many<br/> more
                        variables, which are more significantly predictive <br/>than
                        others.<br/> Log symptoms, track medicines usage, live doctor
                        chat and digital asthma community forum.
                    </p>
                </div>
                <div class="col-sm-5">
                    <img src={amp} alt="amp" style={{height:"85%"}}></img>
                </div>
            </div>
            <div className='container div-down'></div>
            
            <div className='container-fluid'>
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
            
                <div class='row'>
                    <div className='col-sm-4'>
                        <article>
                            <img
                                alt='Pollen Alerts'
                                src={pollen}
                                draggable='false'
                                style={{ width: 200 }}
                            />
                            <h4 id='sid'>Pollen Alerts</h4>
                            <p>
                                Alerts user when there are critical pollen level
                                in the Air, and predicts levels based on
                                weather, season and live satellite location data
                            </p>
                        </article>
                    </div>
                    <div className='col-sm-4'>
                        <article>
                            <img
                                alt='Asthma Management'
                                src={inhaler}
                                draggable='false'
                                style={{ width: 200 }}
                            />
                            <h4 id='sid'>Asthma Management</h4>
                            <p>
                                Logs symptoms, tracks medicine usage, provides
                                live doctor chat and digital Asthma community
                                forum
                            </p>
                        </article>
                    </div>
                    <div className='col-sm-4'>
                        <article>
                            <img
                                alt='Live Health Data'
                                src={health}
                                draggable='false'
                                style={{ width: 200, height: 200 }}
                            />
                            <h4 id='sid'>Live Health Data</h4>
                            <p>
                                Provides location based outdoor Air quality
                                health data for BREATHE EASY
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
}
