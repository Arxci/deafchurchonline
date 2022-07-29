import React, { useEffect } from 'react'
import ButtonCTA from '../global/ButtonCTA'
import HamburgerBTN from '../global/HamburgerBTN'
import Sidebar from './Sidebar'

export default function Header({ toggleSidebar, sidebarState, currentHeaderIndex }) {

    return (
        <header className='header'>
            <Sidebar sidebarState={sidebarState} toggleSidebar={toggleSidebar}/>
            <nav className='header__nav container__L padding__aL'>
                <ul className='header__list'>
                    <li className='header__logo'>
                        <a href="/">Deaf Church Online</a>
                    </li>
                    <li className='header__link hide-for-mobile'>
                        <a className={currentHeaderIndex === 1 ? 'header__link__text ' + 'current__page' : 'header__link__text'} href="/">HOME</a>
                    </li>
                    <li className='header__link hide-for-mobile'>
                        <a className={currentHeaderIndex === 2 ? 'header__link__text ' + 'current__page' : 'header__link__text'} href="/about">ABOUT</a>
                    </li>
                    <li className='header__link hide-for-mobile'>
                        <a className={currentHeaderIndex === 3 ? 'header__link__text ' + 'current__page' : 'header__link__text'} href="/gallery">GALLERY</a>
                    </li>
                    <li className='header__link hide-for-mobile'>
                        <a className={currentHeaderIndex === 4 ? 'header__link__text ' + 'current__page' : 'header__link__text'} href="/contact">CONTACT</a>
                    </li>
                    <li className='header__link hide-for-mobile'>
                        <ButtonCTA buttonLink={'/donations'} buttonText={'DONATIONS'}/>
                    </li>
                    <HamburgerBTN open={false} toggleSidebar={toggleSidebar}/>
                </ul>
            </nav>
        </header>
    )
}