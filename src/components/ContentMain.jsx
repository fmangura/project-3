import React, {useState} from 'react'

import photo1 from '../assets/photo1.jpg'
import laptopimg from '../assets/laptop-icon.png'
import gogglesimg from '../assets/goggles-icon.png'
import cameraimg from '../assets/camera-icon.png'
import ExperienceList from './ExperienceList'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faFileLines, faLaptopCode, faFlaskVial, faCamera} from '@fortawesome/free-solid-svg-icons'



import './ContentMain.css'
import Resume from './Resume'

export default function ContentMain({currActive, openResume, togMCD, togPH, togSE }) {
    const [linkHover, setLinkHover] = useState()

    const openLink = (url) => {
        window.open(url, "_blank", "noreferrer")
    }

    const hovering = (idx) => {
        if (linkHover != idx) {
            setTimeout(() => {
                setLinkHover(idx)
            }, 500);
        } else {
            clearTimeout()
        }
    }

    const clearHover = () => {
        clearTimeout()
        setLinkHover()
    }

    return (
        <div className='main-content'>
            <div className='background-image-filter'></div>
            <div className='exp-list' id='main-exp'>
                <ExperienceList currActive={currActive} togMCD={togMCD} togPH={togPH} togSE={togSE}/>
            </div>
            <div id='content-items'>
                <div id='title-container'>
                    <div id='title-name'>
                        <h1>FNM</h1>
                        <h6>Franz Nicole Manguray</h6>
                        <div className='symbols'>
                            <FontAwesomeIcon className={`${currActive == 'SE' ? 'active-sym' : ''} symbol`} icon={faLaptopCode}/>
                            <FontAwesomeIcon className={`${currActive == 'MCD' ? 'active-sym' : ''} symbol`} icon={faFlaskVial}/>
                            <FontAwesomeIcon className={`${currActive == 'PH' ? 'active-sym' : ''} symbol`} icon={faCamera} />
                        </div>
                    </div>
                    <div id='message-container'>
                        <p>Welcome to my site!</p>
                        <p>You’ll find the variety of skills and experiences I have to offer. I am currently <b>open to work</b> and would love to hear from any open opportunities. Feel free to read about me, explore my different projects, or read about my journey.</p>
                    </div>
                </div>
                <div className='photo1-frame'>
                    <img src={photo1} alt="" className='photos' id='photo1'/>
                    <span id='exp-identifier'>
                        <ul className='exp-img-list'>
                            <li className={currActive == 'SE' ? 'active-exp' : 'inactive-exp'}>
                                <img src={laptopimg} id='laptop'></img>
                            </li>
                            <li className={currActive == 'MCD' ? 'active-exp' : 'inactive-exp'}>
                                <img src={gogglesimg} id='goggles'></img>
                            </li>
                            <li className={currActive == 'PH' ? 'active-exp' : 'inactive-exp'}>
                                <img src={cameraimg} id='camera'></img>
                            </li>
                        </ul>
                    </span> 
                </div>
                <div className='contact-icons' onMouseLeave={() => clearHover()}>
                    <section>
                        <FontAwesomeIcon className='icons' id='linkedin' icon={faLinkedin} style={{color: "#0b66c2",}} onClick={() => openLink("https://www.linkedin.com/in/franz-manguray/")} onMouseOver={() => hovering(0)} />
                        <p className={linkHover == 0 ? 'hovered' : 'silenced'}>Tour LinkedIn</p>
                    </section>
                    <section>
                        <FontAwesomeIcon className='icons' id='github' icon={faGithub} onClick={() => openLink("https://github.com/fmangura")} onMouseOver={() => hovering(1)}/>
                        <p className={linkHover == 1 ? 'hovered' : 'silenced'}>Visit Github</p>
                    </section>
                    <section>
                        <FontAwesomeIcon className='icons' id='mail' icon={faEnvelope} onClick={() => window.location = 'mailto:franznmanguray@gmail.com'} onMouseOver={() => hovering(2)}/>
                        <p className={linkHover == 2 ? 'hovered' : 'silenced'}>Send Email</p>
                    </section>
                    <section>
                        <FontAwesomeIcon className='icons' id='resume' icon={faFileLines} onClick={openResume} onMouseOver={() => hovering(3)}/>
                        <p className={linkHover == 3 ? 'hovered' : 'silenced'}>View Resume</p>
                    </section>
                </div>
            </div>
        </div>
    )
}