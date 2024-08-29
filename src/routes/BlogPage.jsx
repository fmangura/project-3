import React, { useState, useEffect, useContext } from 'react'
import allBlogs from '../assets/ListofBlogs'
import { useNavigate, useParams } from 'react-router-dom'

import './BlogPage.css'

export default function BlogPage(){
    useEffect(() => {
        window.scrollTo({top: 0})
    },[])

    const params = useParams();
    const id = parseInt(params.blogid)
    const navigate = useNavigate()

    const [blogsList, setBlog] = useState(allBlogs)

    const { title,
            subtitle, 
            date, 
            images, 
            text } = blogsList[id]


    const [imgFocus, setImgFocus] = useState(0)


    return (
        <div className='blog-page'>
            <a onClick={() => navigate('/')} id='home'>Home</a>
            <div className='blog-background'>
                <h1>{title}</h1>
                {subtitle ? <h2 id='subtitle'>{subtitle}</h2> : null}
                <p id='date'>{date}</p>
                <hr />
                { images.length > 0 ? 
                    <div className='carousel-container'>
                        <div className='image-carousel'>
                            <img src={images[imgFocus]} className='focused-image'></img>
                            <div className='image-list'>
                                {images.map((image, id) => <img src={image} key={`${image}-${id}`} className='images-in-list' onClick={() => setImgFocus(id)}></img>)}
                            </div>
                        </div>
                    </div>
                :
                    null
                }
                <div className='blog-text'>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}