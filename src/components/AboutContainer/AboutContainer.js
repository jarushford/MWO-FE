import React from 'react'
import { members } from './members'
import '../../main.scss'

export default function AboutContainer({ name }) {
  const memberCopy = members[name]

  return (
    <div className="about-photo-container">
      <div className="photo" style={{ background: `url(${memberCopy.image})` }}>
        <p>{memberCopy.bio}</p>
        
      </div>
      <h3>{memberCopy.name}</h3>
      <h4>{memberCopy.inst}</h4>
    </div>
  )
}