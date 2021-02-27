import React from 'react'
import './navbar.css';

function Navbar() {
    return (
        <div className="navbar-container">
            <a className="start-bootstrap" href="#">Start Bootstrap</a>
            <a className="navbar-options" href="#">HOME</a>
            <a className="navbar-options" href="#">ABOUT</a>
            <a className="navbar-options" href="#">SAMPLE POST</a>
            <a className="navbar-options" href="#">CONTACT</a>
        </div>
    )
}

export default Navbar