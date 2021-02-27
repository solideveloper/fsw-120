import React from "react"
import "./style.css"


function Properties(props){
     return (
          <div className = "box">
         
               <h2>{props.place}</h2>
               <p>{props.time} ${props.price}.00</p>
      
          </div>
     )
}

export default Properties