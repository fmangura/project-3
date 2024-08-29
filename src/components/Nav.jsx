import React, { useEffect, useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ExperienceList from './ExperienceList'
import { ExperienceContext } from '../context/ExperienceContext'
import './Nav.css'

export default function Nav () {
    const [extend, setExtend] = useState('')
    const {
        currExperience,
        togMCD,
        togPH,
        togSE } = useContext(ExperienceContext)

    const extendNav = () => {

        if (window.scrollY > 85){
            setExtend('extend')
        } else if (window.scrollY < 85) {
            setExtend('revert')
        } else {
            setExtend('')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', extendNav);

        return () => window.removeEventListener('scroll', extendNav);
    }, []);
    
    return (
        <div className={`Navbar ${extend}`}>
            <h1>FM (not radio)</h1>
            {(extend == 'extend' ) ?  
                <div className='exp-list-nav'>
                    <ExperienceList currActive={currExperience} togMCD={togMCD} togPH={togPH} togSE={togSE}/>
                </div>
                : null}
        </div>
    )
}