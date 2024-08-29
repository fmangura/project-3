import React, { useState } from 'react'
import './ExperienceList.css'

export default function ExperienceList({currActive, togSE, togMCD, togPH}) {
    return (
        <ul className='exp-list'>
            <li className={currActive == 'SE' ? 'active-exp' : null} onClick={() => togSE()}>SOFTWARE ENGINEERING</li>
            <li className={currActive == 'MCD' ? 'active-exp' : null} onClick={() => togMCD()}>MCD BIOLOGY</li>
            <li className={currActive == 'PH' ? 'active-exp' : null} onClick={() => togPH()} style={{borderRight:'0'}}>PHOTOGRAPHY</li>
        </ul>
    )
}