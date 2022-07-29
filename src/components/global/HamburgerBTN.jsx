import React from 'react'

export default function HamburgerBTN({ open, toggleSidebar }) {
  return (
    <li className={open ? 'hamburger__btn hide-for-desktop ' + 'active' : 'hamburger__btn hide-for-desktop'} onClick={() => toggleSidebar()}>
        <span></span>
        <span></span>
        <span></span>
    </li>
  )
}
