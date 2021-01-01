import React, { useState } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';

export default function ContactForm(){
    const [data, setData] = useState({});
    return(
        <Form>
            <FormGroup>
                <Input type="text" name="name" placeholder="Name" onChange={e => setData({...data, fname: e.target.value})}/>
            </FormGroup>
            <FormGroup>
                <Input type="email" name="email" placeholder="Email ID" onChange={e => setData({...data, email: e.target.value})}/>
            </FormGroup>
            <FormGroup>
                <Input type="text" name="subject" placeholder="Subject" onChange={e => setData({...data, subject: e.target.value})}/>
            </FormGroup>
            <FormGroup>
                <Input type="textarea" name="message" placeholder="Message" onChange={e => setData({...data, message: e.target.value})}/>
            </FormGroup>
            <button id="message-button">Send Message</button>
        </Form>
    )
}