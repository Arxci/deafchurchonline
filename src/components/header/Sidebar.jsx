import React from 'react'
import HamburgerBTN from '../global/HamburgerBTN'
import ButtonCTA from '../global/ButtonCTA'

export default function sidebar({sidebarState, toggleSidebar, currentHeaderIndex}) {
  return (
    <div className={'sidebar ' + sidebarState}>
        <div className={'sidebar__background ' + sidebarState} onClick={() => toggleSidebar()}/>
        <HamburgerBTN open={true} toggleSidebar={toggleSidebar}/>
        <ul className='sidebar__list'>
          <li  className='sidebar__links'>
            <a href='/' className={currentHeaderIndex === 1 ? 'sidebar__current__page' : ''}>
              Home
            </a>
          </li>
          <li  className='sidebar__links'>
            <a href='/about' className={currentHeaderIndex === 2 ? 'sidebar__current__page' : ''}>
              About
            </a>
          </li>
          <li  className='sidebar__links'>
            <a href='/gallery' className={currentHeaderIndex === 3 ? + 'sidebar__current__page' : ''}>
              Gallery
            </a>
          </li>
          <li className='sidebar__links'>
            <a href='/contact' className={currentHeaderIndex === 4 ? + 'sidebar__current__page' : ''}>
              Contact
            </a>
          </li>
          <li>
              <ButtonCTA buttonLink={'/donations'} buttonText={'DONATIONS'}/>
          </li>
        </ul>
    </div>
  )
}
