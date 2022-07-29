import React from 'react'
import Sidebar from './Sidebar'

export default function Header({ ToggleMenu, status, headerStatus}) {
  return (
    <>
        <header className={'header ' + headerStatus}>
            <nav className='header__nav container padding__aL'>
                <Sidebar status={status} ToggleMenu={ToggleMenu}/>
                <ul className='header__list'>
                    <li className='header__list__left'>
                        <a href="#">
                            Deaf Church Online
                        </a>
                    </li>
                    <li className='header__list__right'>
                        <ul>
                            <li className='hide-for-mobile'>
                                <a href="/">Home</a>
                            </li>
                            <li className='hide-for-mobile'>
                                <a href="/about">About</a>
                            </li>
                            <li className='hide-for-mobile'>
                                <a href="/gallery">Gallery</a>
                            </li>
                            <li className='hide-for-mobile'>
                                <a href="/contact">Contact</a>
                            </li>
                            <li className='hide-for-mobile'>
                                <a href="/donations">Donations</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className={'header__menuBtn ' + status} onClick={() => ToggleMenu()}>
                    <span className="hide-for-desktop"></span>
                    <span className="hide-for-desktop"></span>
                    <span className="hide-for-desktop"></span>
                </div>
            </nav>
        </header>
    </>
  )
}
