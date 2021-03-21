import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import Services from './components/services/Services'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
