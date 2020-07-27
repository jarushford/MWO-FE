import MailchimpSubscribe from "react-mailchimp-subscribe"
import React from 'react'
import '../../main.scss'

export default function Footer() {
  const url = "https://madwallace.us17.list-manage.com/subscribe/post?u=f8fb81c993f8ecc4aaa9dde81&amp;id=2824a93352"

    return (
      <footer>
        <section className="subscribe-section">
          <h3>Subscribe for tour updates and more!</h3>
          <MailchimpSubscribe url={url}/>
          <div className="social-container">
            <a href="https://www.facebook.com/madwallaceband/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-square" />
            </a>
            <a href="https://www.instagram.com/mad.wallace/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://open.spotify.com/artist/6H2CmXWubR7YVd6n1hlXq7" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-spotify" />
            </a>
            <a href="mailto:madwallaceband@gmail.com">
              <i className="fas fa-envelope" />
            </a>
            <a href="https://www.youtube.com/channel/UC6N29y6h0Fqh7VmEObN6LHA" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube" />
            </a>
            <a href="https://www.youtube.com/watch?v=_lvB2tHSEG4" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-bath" />
            </a>
          </div>
        </section>
        <section className="sub-footer">
          <img src="./assets/blue-logo.png" className="lazy" alt="blue mad wallace logo" />
          <p>© Mad Wallace 2020</p>
        </section>
      </footer>
    )
}
