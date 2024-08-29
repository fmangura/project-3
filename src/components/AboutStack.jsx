import React from 'react'
import Stack from '../helper/Stack'

import './AboutStack.css'

export default function AboutStack() {
    return (
        <div className='about-stack'>
            <h5>Front-end</h5>
                <section className='front-end'>
                    <Stack codeStack={['html','javascript','css','react','vite']} />
                </section>
            <h5>Back-end</h5>
                <Stack codeStack={['python','javascript','flask','node','express']} />
            <h5>Database</h5>
                <Stack codeStack={['sql','postgres']} />
        </div>
    )
}