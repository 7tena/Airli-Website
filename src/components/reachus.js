import React from 'react';
import ContactForm from './contactform';

export default function ReachUs(){
    return(
        <div className="container">
            <h3>Reach Us</h3>
            <div className="row align-content-center justify-content-center">
                <div className="col-md">
                    <iframe title="Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.475366114292!2d151.19700439176458!3d-33.89352151319212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b1d09816c94f%3A0xad60b4bdb473063f!2sOrbit%20Australia%20Pty.%20Ltd!5e0!3m2!1sen!2sin!4v1609523388485!5m2!1sen!2sin" id="map" width="500" height="500" frameBorder="0" allowFullScreen={true} aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="col-md">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}