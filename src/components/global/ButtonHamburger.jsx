import React from 'react'

export default function ButtonHamburger({ open, toggleSidebar }) {
  return (
    <button className={open ? 'button__hamburger ' + 'active' : 'button__hamburger'} onClick={() => toggleSidebar()}>
        <span></span>
        <span></span>
        <span></span>
    </button>
  )
}
