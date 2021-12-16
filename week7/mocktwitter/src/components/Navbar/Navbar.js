import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../../providers/AuthProvider';
import './navbar.css';

const Navbar = () => {

    return ( 
    <div>
        <ul className = 'navbarContainer'>
            <Link to = '/home' className = 'links'> Home </Link> 
            <Link to = '/tweets' className = 'links'> Tweets </Link>  
            <Link to = '/login' className = 'links'> Log in </Link> 
        </ul> 
    </div>
    );
}

export default withAuth(Navbar);
