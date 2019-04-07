import React from 'react'
import '../../../main.scss'
import { NavLink, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

export function AdminHome({ user }) {
  if (!user) {
    return <Redirect to="/admin" />
  } else {
    return (
      <div className="admin-home">
        <header>
          <NavLink to="/admin/tour" className="nav-item">Tour</NavLink>
          <NavLink to="/admin/videos" className="nav-item">Videos</NavLink>
          <NavLink to="/admin/news" className="nav-item">News</NavLink>
          <NavLink to="/admin/photos" className="nav-item">Photos</NavLink>
          <NavLink to="/admin/mailing" className="nav-item">Mailing</NavLink>
        </header>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(AdminHome)