import React from 'react';
import './home.css'

function Home() {
  return (
    <div>
        <div className="home-container" >
        
            <h1 className="title">Plungeologist</h1>
            <h3 className="subtitle">Drain Problems? I'll Solve 'Em!</h3>
            <h2 className="subtitle2">Certified Plungeologist here for all your plumbing needs... Here's some tips to help keep your drains running smoothly...</h2>
        </div>
        <div className="diyBox">
            <ul><h4>DIY Plumbing Tips:</h4></ul>
            <li></li>
            <ul>1. Oil + Drains = Clog</ul>
            <li>Grease and oil build up will clog your pipes. Safer disposal option? Let the grease dry and toss it in your compost instead!</li>
            <ul>2. Flush Rule #1</ul>
            <li>DO NOT FLUSH WHAT YOUR TOILET CANNOT HANDLE</li>
            <ul>3. Winterize Your Pipes!</ul>
            <li>Proper insulation for your plumbing lines is essential to avoid plumbing issues.</li>
        </div>
    </div>

  );
}

export default Home;