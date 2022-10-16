import React from 'react'

import './Card.css'

const Card = ({ src,title,description,logoBgColor }) => {
    return (
        <div className='card'>
            <div className='card-oval' style={{backgroundColor:logoBgColor}}>
                <img className='card-icon' src={src} />
            </div>
            <div className='title'>
                {title}
            </div>
            <div className='discription'>
                {description}
            </div>



        </div>
    )
}

export default Card
