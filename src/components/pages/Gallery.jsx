import React, {useEffect} from 'react'

export default function Gallery({ setCurrentHeaderIndex}) {
    useEffect(() => {
      setCurrentHeaderIndex(3)
    })

    return (
      <div>Gallery</div>
    )
}
