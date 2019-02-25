import React from 'react'
import '../../main.scss'
import { NavLink } from 'react-router-dom'

export default function AdminHome() {
  return (
    <div className="admin-home">
      <header>
        <NavLink to="/" className="nav-item">Tour</NavLink>
        <NavLink to="/" className="nav-item">Videos</NavLink>
        <NavLink to="/" className="nav-item">News</NavLink>
        <NavLink to="/" className="nav-item">Photos</NavLink>
        <NavLink to="/" className="nav-item">Mailing</NavLink>
      </header>
    </div>
  )
}