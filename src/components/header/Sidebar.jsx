import React from 'react'

export default function Sidebar({ status, ToggleMenu }) {
  return (
    <div className={'sidebar ' + status}>
            <div className={'sidebar__background ' + status } onClick={() => ToggleMenu()}/>
            <div className='sidebar__title'>
                <a href="/" onClick={() => ToggleMenu()}>Deaf Church Online</a>
            </div>
            <ul className='sidebar__list'>
                <li>
                    <a href="/" onClick={() => ToggleMenu()}>Home</a>
                    <div className='divider'/>
                </li>
                <li>
                    <a href="/about" onClick={() => ToggleMenu()}>About</a>
                    <div className='divider'/>
                </li>
                <li>
                    <a href="/gallery" onClick={() => ToggleMenu()}>Gallery</a>
                    <div className='divider'/>
                </li>
                <li>
                    <a href="/contact" onClick={() => ToggleMenu()}>Contact</a>
                    <div className='divider'/>
                </li>
                <li>
                    <a href="/donations" onClick={() => ToggleMenu()}>Donations</a>
                    <div className='divider'/>
                </li>
            </ul>
    </div>
  )
}
