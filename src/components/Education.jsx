import React, {useContext} from 'react'
import './Education.css'
import { ExperienceContext } from '../context/ExperienceContext'

export default function Education() {
    const { currExperience } = useContext(ExperienceContext)

    return (
        <div>
        { currExperience == 'SE' ?  
            <div className='education'>
                <div className='Springboard'>
                    <section className='text'>
                        <h1 className='degree'>Software Engineer Certification</h1>
                        <h5>Springboard</h5>
                        <p>July 2023 - June 2024</p>
                    </section>
                    <img src='Certificate.png'></img>
                </div>
                <div className='UCSC'>
                    <section className='text'>
                        <h1 className='degree'>B.S. Molecular, Cellular, and Developmental Biology</h1>
                        <h5>University of California, Santa Cruz</h5>
                        <p>September 2015 - June 2020</p>
                    </section>
                </div>
            </div>
            :
            <div className='education'>
                <div className='UCSC'>
                    <section className='text'>
                        <h1 className='degree'>B.S. Molecular, Cellular, and Developmental Biology</h1>
                        <h5>University of California, Santa Cruz</h5>
                        <p>September 2015 - June 2020</p>
                    </section>
                </div>
                <div className='Springboard'>
                    <section className='text'>
                        <h1 className='degree'>Software Engineer Certification</h1>
                        <h5>Springboard</h5>
                        <p>July 2023 - June 2024</p>
                    </section>
                    <img src='Certificate.png'></img>
                </div>
            </div>
        }
        </div>
    )
}