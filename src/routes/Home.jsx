import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ExperienceContext } from '../context/ExperienceContext'
import ContentMain from '../components/ContentMain'
import AboutInfo from '../components/AboutInfo'
import Projects from '../components/Projects'
import Blogs from '../components/Blogs'

import './Home.css'
import Resume from '../components/Resume'


export default function Home () {
    const { 
            currExpInfo,
            currExperience,
            togMCD,
            togPH,
            togSE,   } = useContext(ExperienceContext)

    const [showResume, setShowResume] = useState(false)

    function openResume() {
        setShowResume(showResume => showResume = !showResume)
    }

    return (
        <div className='title-section'>
            <div className={showResume ? '' : 'hidden'}>
                <Resume openResume={openResume}/>
            </div>
            <ContentMain currActive={currExperience} openResume={openResume} togMCD={togMCD} togPH={togPH} togSE={togSE}/>
            <div className='about-section' id='about-section'>
                <AboutInfo currActive={currExpInfo} />
            </div>
            <Projects currActive={currExperience} />
            <div id='blogs-section'>
                <Blogs />
            </div>
        </div>
    )
}