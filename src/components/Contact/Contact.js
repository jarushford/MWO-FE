import React from 'react'
import { Link } from 'react-router-dom'
import '../../main.scss'

export default function Contact() {
  return (
    <section className="contact-page">
      <h1>contact</h1>
      <div className="contact-container">
        <h4>for booking, merch, and general inquiries email us at:</h4>
        <h3><a href="mailto:madwallaceband@gmail.com?subject=Hello Mad Wallace!">madwallaceband@gmail.com</a></h3>
        <Link to="/presskit">
          <button>View EPK</button>
        </Link>
      </div>
    </section>
  )
}