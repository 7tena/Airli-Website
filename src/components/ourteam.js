import React from "react";
import Member from "./Member";
import { members } from "./members";

export default function Ourteam() {
    return (
        <div className='container'>
            <h3>Our Team</h3>
            <section className='ourteam'>
                {members.map((member) => {
                    let len = member.length;
                    return (
                        <div className='flex-container' key={member[0].id}>
                            {member.map((mem) => {
                                return (
                                    <Member
                                        key={mem.id}
                                        {...mem}
                                        length={len}
                                    />
                                );
                            })}
                        </div>
                    );
                })}
            </section>
        </div>
    );
}
