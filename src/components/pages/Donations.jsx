import React, { useEffect } from 'react'

export default function Donations({setCurrentHeaderIndex}) {
  useEffect(() => {
    setCurrentHeaderIndex(5)
  })

  return (
    <div>Donations</div>
  )
}
