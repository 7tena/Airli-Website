import React from "react";

export default function Member({ id, img, name, description }) {
    return (
        <article id={id}>
            <img src={img} />
            <h4 id='membername'>{name}</h4>
            <h5>{description}</h5>
        </article>
    );
}
