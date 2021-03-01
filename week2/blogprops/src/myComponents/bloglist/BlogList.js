import React from 'react'
import BlogPost from '../blogpost/BlogPost'
import blogText from '../blogtext/blogText'
import './blogList.css'

function BlogList() {

    const blogPosts = blogText.map(
        blog => <BlogPost 
        key={blog.id} 
        title={blog.title} 
        subtitle={blog.subtitle} 
        author={blog.author} 
        date={blog.date} />)

    return (
        <div>
            {blogPosts}
            <button>Older Posts &rarr;</button>
        </div>
    )
}

export default BlogList