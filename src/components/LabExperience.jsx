import React from 'react'
import './LabExperience.css'

export default function LabExperience() {
    return (
        <div className='exp-section'>
            <div className='exp-card' id='lead'>
                <h1>Lead Lab Technician</h1>
                <h2>Flow Health</h2>
                <p>Feb. 2022 - Feb. 2024</p>
                <ul>
                    <li>Redesigned inventory system and procedure using Google Sheets, App Script, and JavaScript for automated organization and ease of use which gave management visibility of over 500 laboratory supplies.</li>
                    <li>Authored/edited over 20+ lab protocols, reports and logs</li>
                    <li>Directed weekly team meetings to collaborate with and inform peers of 8+ people</li>
                    <li>Analyzed error data, initiated tests, and formulated reports to resolve mechanical and technical issues.</li>
                </ul>
            </div>
            <div className='exp-card' id='assistant'>
                <h1>Lab Assistant</h1>
                <h2>Flow Health</h2>
                <p>Feb. 2022 - Feb. 2024</p>
                <ul>
                    <li>Achieved excellent rapport with visiting clients to receive and process patient samples and paperwork being delivered to the point of becoming a person of contact when problems occurred</li>
                    <li>Accurately organized and entered patient data into company database and carefully corrected any information discrepancies of over 100 patients per day</li>
                    <li>Resolved various daily problems quickly and effectively. Typically issues pertained to employee organization, sample tracking, and were consistently different each day</li>
                </ul>
            </div>
        </div>
    )
}