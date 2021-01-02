import React from "react";
import privacy from '../graphics/privacy-policy-Airli.pdf';

export default function Footer() {
    return (
        <div>
            <footer className='container'>
                <div className='row justify-content-center align-content-center' id="footnote">
                4 Cornwallis St, Eveleigh NSW 2015, Australia
                </div>
                <div className='row justify-content-center align-content-center'>
                    <a id="footnote"href="mailto:connect@airli.co">connect@airli.co</a>
                </div>
                <div className='row justify-content-center align-content-center'>
                    <a id="footnote" href="tel: +61292094022">+61 2 9209 4022</a>
                </div >
                <div className='row justify-content-center align-content-center' id="footnote">
                        &copy;2020 Airli
                </div>
                <div className="row justify-content-center align-content-center">
                    <a id='footnote' href={privacy} target="blank">Privacy Policy</a>
                </div>
            </footer>
        </div>
    );
}
