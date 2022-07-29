import React from 'react'
import HamburgerBTN from '../global/HamburgerBTN'

export default function sidebar({sidebarState, toggleSidebar}) {
  return (
    <div className={'sidebar ' + sidebarState}>
        <HamburgerBTN open={true} toggleSidebar={toggleSidebar}/>
    </div>
  )
}
