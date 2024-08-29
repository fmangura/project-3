import React, {useContext, useState} from 'react'
import { ExperienceContext } from '../context/ExperienceContext'
import allBlogs from '../assets/ListofBlogs'
import BlogsCard from './BlogsCard'

import './Blogs.css'

export default function Blogs() {
    const [blogsList, setBlogsList] = useState(allBlogs)

    return (
        <div className='section-blogs' id='blogs-section' >
            <h1>Blogs</h1>
            <ul className='allBlogs'>
                {blogsList.map((blog, blogid) => <BlogsCard key={`${blogid}`} blog={blog} blogid={blogid}/>)}
            </ul>
        </div>
    )
}