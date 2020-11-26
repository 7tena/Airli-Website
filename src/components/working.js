import React from "react";
import video from "../graphics/youtube.png";

export default function Working() {
    return (
        <div>
            <div class='container'>
                <div class='row'>
                    <div class='col-sm-6'>
                        <img
                            src={video}
                            alt='video'
                            style={{ width: "100%",padding:"5%",marginTop:"10%" }}
                        />
                    </div>
                    <div class='col-sm-6' id='applink'>
                        <h3 style={{ textAlign: "left" ,marginTop:"2%"}}>How does it<br/> work?</h3>
                        <p style={{ textAlign: "left" }}>
                            Airli makes a real difference to the lives of<br/> people
                            with allergy and Asthma. Watch <br/>how Airli works.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
