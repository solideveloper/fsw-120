import React from 'react';
import './superhero.css';


function SuperHero(props) {

    return (
        <div className="heroBox">
            <h2 onClick={props.handleClick}>{props.item.name}</h2>
            <h4 onClick={props.handleClick}>{props.item.show}</h4>
            <img onClick={props.handleClick} src={props.item.imageName} alt="images" />
        </div>
    )
}

export default SuperHero