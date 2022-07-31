import React from 'react'
import ButtonCTA from '../../global/ButtonCTA'

export default function banner({ image, title, subtext, buttonText, buttonLink }) {
  return (
    <div className='banner' data-aos='fade-in'>
        <img src={image}></img>
        <div className='banner__content padding__aL'>
            <div className='banner__title'>
                {title}
            </div>
            <div className='banner__subtext'>
                {subtext}
            </div>
            <div className='banner__btn'>
                <ButtonCTA buttonLink={buttonLink} buttonText={buttonText}/>
            </div>
        </div>
    </div>
  )
}
