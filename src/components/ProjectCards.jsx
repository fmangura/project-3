import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ListofProjects from '../assets/ListofProjects'

import './ProjectCards.css'

export default function ProjectCards() {
    const [projects, setProjects] = useState(ListofProjects)
    const navigate = useNavigate()

    return(
        <div className='project-cards'>
            {projects.map((proj) => {return (
                <div className='project-card' key={`${proj.name}`}>
                    <img src={`${proj.img}`} alt='Project img' className='project-logo'></img>
                    <section className='card-content'>
                        <h1>{proj.name}</h1>
                        <p>{proj.summary} <a className='readme-link' onClick={() => navigate(`${proj.bloglink}`)}>Read more..</a> </p> 
                        <div className='project-stack'>
                            {proj.stack}
                        </div>
                        <section className='button-links'>
                            <a href={`${proj.demolink}`} className='demo-link'>View Demo</a>
                            <a href={`${proj.gitlink}`} className='git-link'>Github</a>
                        </section>
                    </section>
                </div>)
            })}
        </div>
    )
}