import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { ExperienceContext } from '../context/ExperienceContext'
import './Footer.css'


export default function Footer() {
    const { 
        togMCD,
        togPH,
        togSE, } = useContext(ExperienceContext)

    const openLink = (url) => {
        window.open(url, "_blank", "noreferrer")
    }

    const navigate = useNavigate()

    const scroll = async (ref) => {
        const changepage = async () => navigate('/');
        await changepage();
        let element = document.getElementById(ref);
        element?.scrollIntoView({behavior:'smooth', block:'center'});
    }

    return (
        <div className='footer'>
            <div className='quick-nav'>
                <a onClick={() => {togSE(); scroll('about-section')}}>About</a>
                <a onClick={() => scroll('blogs-section')}>Blogs</a>
                <a onClick={() => window.scroll({top: 0, behavior: 'smooth'})}>Contact</a>
                <a onClick={() => {togSE(); scroll('about-section')}}>Education</a>
                <a onClick={() => {togSE(); scroll('projects-section')}}>Projects</a>
                <a onClick={() => {togMCD(); scroll('projects-section')}}>Lab Experience</a>
                <a onClick={()=> {togPH(); scroll('projects-section')}} style={{border:'0'}}>Photos</a>
            </div>
            <hr></hr>
            <div className='quick-links'>
                <a onClick={() => openLink("https://www.linkedin.com/in/franz-manguray/")}>LinkedIn</a>
                <a onClick={() => openLink("https://github.com/fmangura")}>GitHub</a>
                <a style={{border:'0'}} onClick={() => window.location = 'mailto:franznmanguray@gmail.com'}>Email</a>
            </div>
            <div id='copyright-notice'>
                <p>&copy; 2024 Franz Manguray</p>
            </div>
        </div>      
    )
}