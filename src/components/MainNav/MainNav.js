import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../../main.scss'

export default function MainNav() {
  const [menu, setMenu] = useState(false)

  return (
    <section>
      <header className="main-nav nav">
        <NavLink to="/tour" onClick={() => window.scrollTo(0, 0)}>tour</NavLink>
        <NavLink to="/media" onClick={() => window.scrollTo(0, 0)}>media</NavLink>
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <div className="header-logo">
            <img alt="mw-logo" src="./assets/main-logo.png" />
          </div>
        </Link>  
        <NavLink to="/about" onClick={() => window.scrollTo(0, 0)}>about</NavLink>
        <NavLink to="/contact" onClick={() => window.scrollTo(0, 0)}>contact</NavLink>
      </header>
      <header className="mobile-nav nav">
        <Link to="/" onClick={() => {
          setMenu(false)
          window.scrollTo(0, 0)
        }}>
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
            onClick={() => {
              setMenu(false)
              window.scrollTo(0, 0)
            }}
            to="/tour"
          >
            tour
          </NavLink>
          <NavLink
            onClick={() => {
              setMenu(false)
              window.scrollTo(0, 0)
            }}
            to="/media"
          >
            media
          </NavLink>
          <NavLink
            onClick={() => {
              setMenu(false)
              window.scrollTo(0, 0)
            }}
            to="/about"
          >
            about
          </NavLink>
          <NavLink
            onClick={() => {
              setMenu(false)
              window.scrollTo(0, 0)
            }}
            to="/contact"
          >
            contact
          </NavLink>
        </div>  
      </header>
      <div className="banner-img" />
    </section>
  )
}