import React, { useState } from 'react';
import { Form, FormGroup } from 'reactstrap';
import emailjs from 'emailjs-com';

export default function ContactForm(){
    const [data, setData] = useState({
        from_name: "",
        reply_to: "",
        subject: "",
        message: ""
    });
    const [sent, setSent] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = await emailjs.send("service_qlj293l", "template_ee9wvsc", data, "user_F4wzjgBE107yTrNan15lx");
        if(response.status === 200)
            setSent(true);
        setTimeout(() => {setSent(false); setData({
            from_name: "",
            reply_to: "",
            subject: "",
            message: ""
        });}, 1000);
    }

    const messageButton = sent ? 
                        <button className="sent-button" disabled>Message Sent !</button> :
                        <button type="submit" id="message-button">Send Message</button>
    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <input className="form-control" value={data.from_name} name="name" placeholder="Name" type="text" onChange={e => setData({...data, from_name: e.target.value})} required/>
            </FormGroup>
            <FormGroup>
                <input className="form-control" value={data.reply_to} type="email" name="email" placeholder="Email ID" onChange={e => setData({...data, reply_to: e.target.value})} required/>
            </FormGroup>
            <FormGroup>
                <input className="form-control" value={data.subject} type="text" name="subject" placeholder="Subject" onChange={e => setData({...data, subject: e.target.value})} required/>
            </FormGroup>
            <FormGroup>
                <textarea className="form-control" value={data.message} type="textarea" name="message" placeholder="Message" onChange={e => setData({...data, message: e.target.value})} required/>
            </FormGroup>
            {messageButton}
        </Form>
    )
} 