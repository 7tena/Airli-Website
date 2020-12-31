import React from "react";
import privacy from '../graphics/privacy-policy-Airli.pdf';

export default function Footer() {
    return (
        <div>
            <footer class='container'>
                <p id='footnote'>
                    * Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus bibendum bibendum elit velit.
                </p>
                <p id='footnote'>
                    <a href={privacy} target="blank">Privacy Policy</a>
                </p>
                <hr />
                <div class='row foot'>&copy;2020 airli</div>
            </footer>
        </div>
    );
}
