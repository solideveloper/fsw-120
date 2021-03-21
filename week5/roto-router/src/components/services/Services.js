import React from 'react';
import './services.css';

function Services() {

  return (
      <div className="mainContainer">
        <h1 id =" serviceTitle" className="serviceTitle">Services
          
        </h1>
        
        <h2 id ="services" className="services">Installation, Repair or Replacement:
          <ul className="serviceList">
              <li>All Home Drains & Pipes</li>
              <li>Showers</li>
              <li>Washers</li>
              <li>Water Lines</li>
              <li>Sump Pump</li>
              <li>Septic Systems</li>
          </ul>
        </h2>

        <h2 className="services">Drain Cleaning and Sewers:
          <ul className="serviceList">
              <li>Main Line</li>
              <li>Toliets</li>
              <li>Drain/Sewer Line</li>
              <li>Floor Drains</li>
              <li>Grease Traps</li>
              <li>Pipe Repair</li>
              <li>Septic Tanks</li>
              <li>Clear Lines</li>
          </ul>
        </h2>


        <h2 className="services">Maintenace, Repair and Care:
          <ul className="serviceList">
              <li>Drain and Sewer Cleaning</li>
              <li>Update to Code</li>
              <li>Pipe Repair and Replacement</li>
              <li>Trap Cleaning and/or Removal</li>
              <li>Low Water Pressure Diagnostics and Repair</li>
          </ul>
        </h2>

        <img className = "serviceImg" src="https://user-images.githubusercontent.com/72266712/111890957-b6e52d00-89c4-11eb-9dbe-feaf10ac1708.png" alt="servicephoto"/>
    
    </div>
  );
}

export default Services;