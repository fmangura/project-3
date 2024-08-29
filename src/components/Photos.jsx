import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Photos.css'

export default function Photos() {
    const [allPhotos, setAllPhotos] = useState(Object.values(import.meta.glob('../../public/Photos/*.jpg',{eager: true, import: 'default'})))

    const navigate = useNavigate()

    const handleContextMenu = (e) => {
        e.preventDefault();

    }

    return (
        <div className='photos-list' onContextMenu={handleContextMenu} onMouseDown={handleContextMenu}>
            {allPhotos.map((image, id) => <img src={image} key={`${image}-${id}`} className='photos-in-list'></img>)}
        </div>
    )
}