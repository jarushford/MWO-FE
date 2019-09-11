import React from 'react'
import { members } from './members'
import PropTypes from 'prop-types'
import '../../main.scss'

export default function AboutContainer({ name }) {
  const memberCopy = members[name]

  return (
    <div className="about-photo-container">
      <div className="photo" style={{
        background: `url('${memberCopy.img}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center' 
      }}>
        <i className="fas fa-angle-up"></i>
        <p>{memberCopy.bio}</p>
      </div>
      <h3>{memberCopy.name}</h3>
      <h4>{memberCopy.inst}</h4>
    </div>
  )
}

AboutContainer.propTypes = {
  name: PropTypes.string.isRequired
}