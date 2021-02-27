import React from 'react';
import './App.css';
import BlogList from './myComponents/bloglist/BlogList'
import Header from './myComponents/header/Header'
import Footer from './myComponents/footer/Footer'

function App() {
  
    return (
        <div>
            <Header />
            <BlogList />
            <Footer />
        </div>
    )
}

export default App