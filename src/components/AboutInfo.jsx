import React, { useEffect, useState } from 'react'
import './AboutInfo.css'


export default function AboutInfo({currActive}) {
    const [currScroll, setCurrScroll] = useState(0)

    useEffect(() => {
        const setScroll = () => {
            setCurrScroll(0)
        }
        setScroll()
    },[currActive])


    return (
        <div className='info-card'>
            <div className='tab-selector'>
                {currActive.map(({Tab}, idx) => <h1 key={`${idx}-${Tab}`} id={`${idx}`} className={idx == currScroll ? 'tabs-selected' : 'tabs'} onClick={() => setCurrScroll(idx)} onMouseEnter={() => setCurrScroll(idx)}>{Tab}</h1>)}
            </div>
            <div className='content-card' >
                {currActive[currScroll]?currActive[currScroll]['Content']:null}
            </div>
        </div>
    )
}