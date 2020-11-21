import React from "react";
import Member from "./Member";
import { members } from "./members";

export default function Ourteam() {
    return (
        <div>
            <h3>Our Team</h3>
            <section>
                {members.map((member) => {
                    return <Member key={member.id} {...member} />;
                })}
            </section>
        </div>
    );
}
