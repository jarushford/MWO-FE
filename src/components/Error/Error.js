import React from 'react'
import { Link } from 'react-router-dom'
import '../../main.scss'

export default function ErrorPage({ message }) {
  const body = `Hi, I ran into some issues while trying to use madwallace.com that I would like to provide you further details on. Here are some details from the error on the site: ${message}. If you would like to include any additional comments please do to here: `

  return (
    <section className="error-container">
      <h2>Something has gone terribly wrong...</h2>
      <img src="https://media.giphy.com/media/IR24B7tPNFk2c/giphy.gif" alt="Error GIF" />
      <Link to="/"><button>Reload Site</button></Link>
      <p>If you think that something is wrong on our end feel free to <a href={`mailto:madwallace@gmail.com?subject=Report Issue&body=${body}`}>let us know</a> too and we'll get right on it. Thanks!</p>
    </section>
  )
}