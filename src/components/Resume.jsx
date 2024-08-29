import React from 'react'
import ResumeImg from '../assets/resume.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import './Resume.css'

export default function Resume({openResume}) {
    return (
        <div className='resume-container'>
            <img src={ResumeImg}></img>
            <FontAwesomeIcon icon={faXmark} style={{fontSize:'30px', color:'white'}} onClick={() => openResume()} id='close-resume'/>
        </div>
    )
}