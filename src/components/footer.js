import React from "react";
import privacy from '../graphics/privacy-policy-Airli.pdf';

export default function Footer() {
    return (
        <div>
            <footer className='container'>
                <div className='row justify-content-center align-content-center' id="footnote">
                    100 George Street Parramatta NSW 2150
                </div>
                <div className='row justify-content-center align-content-center'>
                    <a id="footnote"href="mailto:sales@orbitaustralia.com">sales@orbitaustralia.com</a>
                </div>
                <div className='row justify-content-center align-content-center'>
                    <a id="footnote" href="tel: +61280054864">+61280054864</a>
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
