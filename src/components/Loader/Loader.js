import React from 'react'
import '../../main.scss'

export default function Loader() {
  return (
    <div className="loader-container">
      <section className="ripple" />
      <div>
        <img alt="mw-logo" src="./assets/main-logo.png" />
        <span>Loading ...</span>
      </div>
    </div>
  )
}