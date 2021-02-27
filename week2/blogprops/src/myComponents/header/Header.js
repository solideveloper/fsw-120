import React from 'react'
import Navbar from '../navbar/Navbar'
import './header.css';

function Header() {
    return (
        <div className="header-container">
            <Navbar />
            <h1 className="clean-blog">Clean Blog</h1>
            <h4 className="subtitle">A Blog Theme by Start Bootstrap</h4>
        </div>
    )
}

export default Header