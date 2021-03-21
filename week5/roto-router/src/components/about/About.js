import React from 'react';
import './about.css'

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">The Plungeologist</h1> 

      <img className="photo" src="https://user-images.githubusercontent.com/72266712/111893574-0aae4100-89da-11eb-97fb-c54ad6fb08bd.png" alt="family"/>
      <h2 h2 className="info">John, your Certified Plungeologist here, hoping my services were ALL You Needed.. any questions or comments please contact me below!</h2>
      <input placeholder="Questions & Comments" ></input>
      <button>Submit</button>
      <img className="photo" src="https://user-images.githubusercontent.com/72266712/111893816-be640080-89db-11eb-9d2c-559a9ac42b5e.png" alt="family"/> 
    </div>
  );
}

export default About;