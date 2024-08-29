import {React, useState} from 'react';
import { ExperienceContext } from '../context/ExperienceContext.jsx';
import AboutStack from './AboutStack.jsx';
import Education from './Education.jsx';


function ExperienceProvider({children}) {
    const experiences = {
        'SoftwareEngineering' : 'SE',
        'MCDBio' : 'MCD',
        'Photography' : 'PH'
    }

    const expInfo  = {
        'SE': [ 
                {
                    'Tab': 'About Me',
                    'Content' : `What I love most about software engineering is the development of forward-facing technology. Every project is started with advancement in mind and focuses on finding solutions. Programming and its design combine logic and creativity to reach those solutions. \n
                    In my year of developing with React, Flask, Node.js, Express, and PostgreSQL, I've completed two main projects that have allowed me to explore possible solutions to questions I’ve wondered about. \n
                    I enjoy the data-driven, logic-based, the unsung hero role—of being a back-end developer. I also appreciate the creativity, finding functional ways users interact, and seeing my work come to life that front-end development brings.\n
                    At the end of the day, I just love figuring out problems, testing my capabilities, and learning along the way.`
                },
                {
                    'Tab': 'Stack',
                    'Content' : <AboutStack />,
                },
                {
                    'Tab': 'Education',
                    'Content' : <Education />
                },
            ],
        'MCD': [ 
                {
                    'Tab': 'About Me',
                    'Content' : `Graduated from the University of California, Santa Cruz, with a B.S. in Molecular, Cellular, and Developmental Biology. Worked at Flow Health as a Lead Laboratory Technician, where I conducted employee training, ensured proper lab protocols were followed, organized work schedules, developed and maintained lab inventory systems, and conducted testing for RPP, RT-qPCR, STI, UTI, and HIV/HBV/HCV. Additionally, I collaborated with CLSs and directors on the research and development of new testing assays. I have experience in PCR, aseptic techniques, gel electrophoresis, cell culture, distillation, extraction, and purification from both university and professional settings. \n                   
                    s a lead, I sought effective ways to enhance my team and the functionality of the company in accordance with HIPAA and GLP standards. I've worked closely with management and my peers to create a supportive environment that provides consistent results. I am able to utilize my various talents and proactively solve problems in the day-to-day.`
                },
                {
                    'Tab': 'Skills',
                    'Content' : `Software: MS Office, Google Workspace, LIS \n
                                    Equipment: Fume Hoods, Ultra-low Freezers, Centrifuge, QuantStudio5, QS12K Flex \n
                                    Skills: PCR, purification, R&D, Aseptic tqchnique`
                },
                {
                    'Tab': 'Education',
                    'Content' : <Education />
                },
            ],
        'PH': [ 
            {
                'Tab': 'About Me',
                'Content' : `My favorite part of photography is the connection between me and the subject, whether it's interacting with people and helping them overcome their anxiety about being awkward or experiencing the peace and awe of a landscape. Then, after the photography, comes the post-production and the artistry that goes into it. I just love figuring out how to make something more realistic, colorful, or funky. \n               
                As a hobby, I enjoy traveling and taking photos of beautiful scenery that I can look back on or share with the world. On occasion, I take photos for graduations, portraits, and wedding announcements.\n               
                If you have any interest in photography and want to talk about it, share your photos, or need photos taken, please feel free to reach out! I love meeting other creatives! I do warn you that I do not work with film, although I would like to someday.`
            },
            {
                'Tab': 'Equipment',
                'Content' : 'Sony Aiii ; Sigma 35mm || Sony 50mm '
            },
        ],
    }



    const [currExperience, setCurrExp] = useState(experiences['SoftwareEngineering'])
    const [currExpInfo, setcurrExpInfo] = useState(expInfo[currExperience])

    const togSE = () => {
        setCurrExp(experiences['SoftwareEngineering'])
        setcurrExpInfo(expInfo[experiences['SoftwareEngineering']])
    }
    const togMCD = () => {
        setCurrExp(experiences['MCDBio'])
        setcurrExpInfo(expInfo[experiences['MCDBio']])
    }
    const togPH = () => {
        setCurrExp(experiences['Photography'])
        setcurrExpInfo(expInfo[experiences['Photography']])
    }

    return (
        <ExperienceContext.Provider value={{
            currExperience,
            currExpInfo,
            togMCD,
            togPH,
            togSE,
        }}> 
            {children}
        </ExperienceContext.Provider>
    )
}

export default ExperienceProvider;