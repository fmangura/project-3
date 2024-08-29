import React from 'react'
import { useNavigate } from 'react-router-dom'

import './BlogsCard.css'

export default function BlogsCard({blog, blogid}) {
    const navigate = useNavigate()

    return (
        <li className='blogs-card'>
            <div className='header-blog'>
                <h1>{blog.title}</h1>
                {blog.subtitle ? <h6>{blog.subtitle}</h6> : null}
                <p>{blog.date}</p>
            </div>
            <div className='text-blog'>
                <p>{blog.text}</p>
                <a onClick={() => navigate(`blog/${blogid}`)}>Read further</a>
            </div>
        </li>
    )
}