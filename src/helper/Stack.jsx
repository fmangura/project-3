import React, {useState} from 'react'

export default function Stack({codeStack}){
    return (
        <div className='icons-list'>
            {codeStack.map((stack, idx) => 
                <img key={`${stack}-${idx}`} src={`/Coding/icon-${stack}.png`} className='lang-icons'></img>
            )}
        </div>
    )
}