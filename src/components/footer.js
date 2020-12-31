import React from "react";
import privacy from '../graphics/privacy-policy-Airli.pdf';

export default function Footer() {
    return (
        <div>
            <footer class='container'>
                <div className="row justify-content-center align-content-center">
                    <p>
                        <a href={privacy} target="blank" id="footnote">Privacy Policy</a>
                    </p>
                </div>
                <div class='row justify-content-center align-content-center'>
                    <p id="footnote">
                        &copy;2020 Airli
                    </p>
                </div>
            </footer>
        </div>
    );
}
