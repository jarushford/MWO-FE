import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../../main.scss'

export default function MainNav() {
  const [menu, setMenu] = useState(false)

  return (
    <section>
      <header className="main-nav nav">
        <NavLink to="/tour">tour</NavLink>
        <NavLink to="/media">media</NavLink>
        <Link to="/">
          <div className="header-logo">
            <img alt="mw-logo" src="./assets/main-logo.png" />
          </div>
        </Link>  
        <NavLink to="/about">about</NavLink>
        <NavLink to="/contact">contact</NavLink>
      </header>
      <header className="mobile-nav nav">
        <Link to="/" onClick={() => setMenu(false)}>
          <div className="header-logo">
            <img alt="mw-logo" src="./assets/main-logo.png" />
          </div>
        </Link>
        <div
          className={`burger ${menu && 'open'}`}
          onClick={() => setMenu(!menu)}
        >
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />
        </div>
        <div className={`dropdown-container ${menu && 'show'}`}>
          <NavLink
            onClick={() => setMenu(false)}
            to="/tour"
          >
            tour
          </NavLink>
          <NavLink
            onClick={() => setMenu(false)}
            to="/media"
          >
            media
          </NavLink>
          <NavLink
            onClick={() => setMenu(false)}
            to="/about"
          >
            about
          </NavLink>
          <NavLink
            onClick={() => setMenu(false)}
            to="/contact"
          >
            contact
          </NavLink>
        </div>  
      </header>
    </section>
  )
}