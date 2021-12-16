import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import TweetPost from './components/TweetPost/tweetPost';
import Login from './components/Login/Login';


const App = () => {

    return ( 
    <div>
        <Navbar/>
        <Routes>
            <Route 
                path = "/home"
                element = { < Home / > }/> 
            <Route 
                path = "/login"
                element = { < Login / > }/> 
            <Route 
                path = "/tweets"
                element = { < TweetPost / > }/> 
        </Routes>

        <div className = "footer-container" >

            <img className = "footerimg"
            src = "https://user-images.githubusercontent.com/72266712/111890201-9fef0c80-89bd-11eb-8e84-ff06eeaed2d0.png"
            alt = "facebook" / >
            <img className = "footerimg"
            src = "https://user-images.githubusercontent.com/72266712/111890202-9fef0c80-89bd-11eb-9b7e-be65cf93ba6f.png"
            alt = "instagram" / >
            <img className = "footerimg"
            src = "https://user-images.githubusercontent.com/72266712/111890203-9fef0c80-89bd-11eb-904a-986da2a4fc54.png"
            alt = "twitter icon" / >
            <br / >
            &
            copy; 2021 - Stephanie Olivares 
        </div> 
    </div>

    );
}

export default App;