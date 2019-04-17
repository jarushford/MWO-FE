import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../../main.scss'

export default function MainNav() {
  return (
    <header className="main-nav">
      <NavLink to="/">tour</NavLink>
      <NavLink to="/">media</NavLink>
      <Link to="/">
        <div className="header-logo">
          <img src="./assets/main-logo.png" />
        </div>
      </Link>  
      <NavLink to="/">about</NavLink>
      <NavLink to="/">contact</NavLink>
    </header>
  )
}