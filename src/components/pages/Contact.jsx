import React, { useEffect } from 'react'

export default function Contact({setCurrentHeaderIndex}) {
  useEffect(() => {
    setCurrentHeaderIndex(4)
  })

  return (
    <div>Contact</div>
  )
}
