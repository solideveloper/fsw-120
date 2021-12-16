import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { withAuth } from '../../providers/AuthProvider';
import './navbar.css';

const Navbar = () => {

    return ( <
        div >
        <
        ul className = 'navbarContainer' >
        <
        BrowserRouter >
        <
        Link to = '/'
        className = 'links' > Home < /Link> <
        Link to = '/tweets'
        className = 'links' > Tweets < /Link>  <
        Link to = '/login'
        className = 'links' > Log in < /Link> <
        /BrowserRouter> <
        /ul> <
        /div>
    );
}

export default withAuth(Navbar);