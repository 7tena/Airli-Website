import React from "react";
import Member from "./Member";
import { members } from "./members";

export default function Ourteam() {
    return (
        <div className='container no-padding-top'>
            <h3>Our Team</h3>
            <section className='ourteam flex-container'>
                {members.map((member) => {
                    return <Member key={member.id} {...member} />;
                })}
            </section>
        </div>
    );
}
