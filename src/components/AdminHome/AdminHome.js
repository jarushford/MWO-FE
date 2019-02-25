import React from 'react'
import '../../main.scss'
import { NavLink, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

export function AdminHome({ user }) {
  if (!user) {
    return <Redirect to="/admin" />
  } else {
    return (
      <div className="admin-home">
        <header>
          <NavLink to="/" className="nav-item">Tour</NavLink>
          <NavLink to="/" className="nav-item">Videos</NavLink>
          <NavLink to="/" className="nav-item">News</NavLink>
          <NavLink to="/" className="nav-item">Photos</NavLink>
          <NavLink to="/" className="nav-item">Mailing</NavLink>
        </header>
        <h1 className="title">Welcome to the Mad Wallace Admin Portal</h1>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(AdminHome)