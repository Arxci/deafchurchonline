import React from 'react'

export default function ButtonCTA({ buttonLink, buttonText }) {
  return (
    <a href={buttonLink} className="button__cta">
        {buttonText}
    </a>
  )
}
