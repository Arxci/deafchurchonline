import React from 'react'
import HamburgerBTN from '../global/HamburgerBTN'
import ButtonCTA from '../global/ButtonCTA'

export default function sidebar({sidebarState, toggleSidebar, currentHeaderIndex}) {
  return (
    <div className={'sidebar ' + sidebarState + " padding__aM"}>
        <div className={'sidebar__background ' + sidebarState} onClick={() => toggleSidebar()}/>
        <HamburgerBTN open={true} toggleSidebar={toggleSidebar}/>
        <ul className='sidebar__list'>
          <li  className='sidebar__links'>
            <a href='/' className={currentHeaderIndex === 1 ? 'padding__uS ' + 'sidebar__current__page' : 'padding__uS'}>
              Home
            </a>
          </li>
          <li  className='sidebar__links'>
            <a href='/about' className={currentHeaderIndex === 2 ? 'padding__uS ' + 'sidebar__current__page' : 'padding__uS'}>
              About
            </a>
          </li>
          <li  className='sidebar__links'>
            <a href='/gallery' className={currentHeaderIndex === 3 ? 'padding__uS ' + 'sidebar__current__page' : 'padding__uS'}>
              Gallery
            </a>
          </li>
          <li className='sidebar__links'>
            <a href='/contact' className={currentHeaderIndex === 4 ? 'padding__uS ' + 'sidebar__current__page' : 'padding__uS'}>
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
