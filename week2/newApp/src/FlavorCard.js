import React from "react"
import './colorBox.css';

function FlavorCard(props) {
    console.log(props)
    return (
        <div className="flavor-card">
            <img src={props.flavor.imgUrl}alt="descriptions go here"/>
            <h3>{props.flavor.name}</h3>
            <p>{props.flavor.descrip}</p>
            <p> {props.flavor.price}</p>
        </div>
    )
}

export default FlavorCard