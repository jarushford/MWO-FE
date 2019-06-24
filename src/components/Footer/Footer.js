import React, { Component } from 'react'
import '../../main.scss'

export default class Footer extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      error: false,
      success: false
    }
  }

  updateEmail = e => {
    this.setState({ email: e.target.value })
  }

  handleSubmit = async () => {
    const url = 'https://mwo-be.herokuapp.com/api/v1/mailing'
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: this.state.email })
    })

    if (!response.ok) {
      this.setState({ error: true })
    } else {
      this.setState({
        error: false,
        success: true,
        email: ''
      })
      setTimeout(() => {
        this.setState({ success: false })
      }, 4000)
    }
  }

  render() {
    return (
      <footer>
        <section className="subscribe-section">
          <h3>Subscribe for tour updates and more!</h3>
          <input
            type="text"
            placeholder="mad@wallacemail.com"
            value={this.state.email} 
            onChange={this.updateEmail}
          />
          <p className={`error-msg ${this.state.error && 'errored'}`}>
            Sorry, something went wrong! Feel free to try again later.
          </p>
          <p className={`success-msg ${this.state.success && 'success'}`}>
            Added Successfully, yay!
          </p>
          <button className="btn rounded" onClick={this.handleSubmit}>
            <span className="text-green">Subscribe</span>
          </button>
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
          <img src="./assets/blue-logo.png" alt="blue mad wallace logo" />
          <p>copyright © 2019</p>
        </section>
      </footer>
    )
  }
}