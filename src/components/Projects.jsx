import React, { useState } from 'react'
import ProjectCards from './ProjectCards'
import LabExperience from './LabExperience'
import Photos from './Photos'
import './ExperienceList.css'

export default function Projects({currActive}) {
    const projects = {
        'SE': {'Title': 'Projects',
                'Content': <ProjectCards />,         
            },
        'MCD': {'Title': 'Experience',
                'Content': <LabExperience />,
            },
        'PH': {'Title': 'Photos',
                'Content': <Photos />,
            },
    }
    return (
        <div className='project-section' id='projects-section' style={{display:'flex', alignContent:'center', flexDirection:'column'}}>
            <h1 style={{textAlign:'center'}} className='project-section-title'>{projects[currActive]['Title']}</h1>
            <div className='project-container' style={{justifyContent:'center', display:'flex'}}>
                {projects[currActive]['Content']}
            </div>
        </div>
    )
}