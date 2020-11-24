import React from "react";

export default function Member({ id, img, name, description }) {
    return (
        <article id={id}>
            <img src={img} alt={name} id='photo' draggable='false' />
            <h4 id='membername'>{name}</h4>
            <h5 id='memberdesc'>{description}</h5>
        </article>
    );
}
