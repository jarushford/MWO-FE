import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../../main.scss'

export default function MainNav() {
  return (
    <section>
      <header className="main-nav">
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
      <div className="banner-img" />
    </section>
  )
}