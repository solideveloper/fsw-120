import React from 'react'
import './blogpost.css';

function BlogPost(props) {

    return (
        <div className="blog-container">
            <h2 className="blog-title">{props.title}</h2>
            <h3 className="blog-subtitle">{props.subtitle}</h3>
            <span className="blog-author">Posted by <strong>{props.author}</strong></span>
            <span className="blog-date"> on {props.date}</span>
            <hr/>
        </div>
    )
}

export default BlogPost