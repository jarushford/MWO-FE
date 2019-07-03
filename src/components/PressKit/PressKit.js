import React from 'react'
import { Link } from 'react-router-dom'

export default function PressKit() {
  document.title = 'Mad Wallace | Press Kit'
  return (
    <main className="press-kit">
      <Link to="/contact">
        <button className="back-btn">
          <i className="far fa-hand-point-left" />
          Back
        </button>
      </Link>
      <section>MAD WALLACE</section>
      <div className="grid-container">
        <div className="bios">
          <h2>Band Bios</h2>
          <p>Jake, Jake, Jamie, and David comprise the family that is Mad Wallace. Based out of Denver, this group of friends formed the band in the Spring of 2017 and have been playing their asses off ever since. Connecting elements of heavy guitar riffage, distinctly unique lyricism, long form jams, and a grunge rock attitude, the fellas in Mad Wallace live for music. They draw inspiration from prog rock, jam, funk, and Dwayne "The Rock" Johnson creating a style that is unique, powerful, and best experienced live. Find them on Spotify, Bandcamp, YouTube, or climbing tall piles of rock in the Sunshine State.</p>
          <hr />
          <p>Ripping right out of Denver, Colorado, Mad Wallace has made a name for themselves in the Colorado jam scene. Following years of playing house parties at Colorado College and local venues in Colorado Springs, the band moved to Denver in Spring of 2017 to pursue the next step in their musical journey. They quickly became regular performers at local venues including Summit Music Hall, Cervantes, and Herman's Hideaway.</p>
          <p>With two studio albums and a few years of gigging under their belt Mad Wallace is in constant creation mode. Whether it be a song or an improvised jam, the Mad Men of proggroovian-jamrock are quick to read each other and compose powerful music in the moment, as if they were simply conversing. Their presence on stage reflects more than musical technique, it sheds a light on the friendship that lies at the core of the band. It is this love, for one another, the audience, and the music that has fans coming back for more and more as Mad Wallace hurtles their way across the fertile musical landscape of the jam scene.</p>
        </div>
        <div className="pictures">
          <img className="bigpic" src="./assets/sabetta.jpg" alt="Sabetta singing" />
          <img src="./assets/globe.jpg" alt="Globe Hall 6/15" />
          <img src="./assets/outside.jpg" alt="CC Battle of the Bands" />
          <img src="./assets/singing.jpg" alt="Jamie and David singing" />
          <img src="./assets/goggles.jpg" alt="goggles" />
        </div>
        <div className="pk-video">
          <h2>Video</h2>
          <a href="https://www.youtube.com/embed/_EjPLSCx0LY"><iframe src="https://www.youtube.com/embed/_EjPLSCx0LY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></a>
          <p>Check out this video and more on our <a id="vidlink" href="https://www.youtube.com/channel/UC6N29y6h0Fqh7VmEObN6LHA/videos">YouTube channel</a></p>
        </div>
        <div className="pk-music">
          <h2>Music</h2>
          <img src="./assets/hookline-album-art.jpg" alt="hookline album art" />
          <p>Check out our latest album
            <a href="https://open.spotify.com/album/2aMYMSJ1p6wbmiINndEKSt"> Hook Line & Sinker</a>
          </p>
        </div>
        <div className="press">
          <h2>Press</h2>
          <p id="cipher"><em>"Their live performances resonate in your ears long after they've left the stage."</em></p>
			    <p id="author"> - Clare Ende, <a href="http://www.ciphermagazine.com/mad-wallace/"><strong>Cipher Magazine</strong></a></p>
			    <p id="cipher"><em>"The sonic sound of this band is somewhere between Jam and Progressive. (Mad Wallace) all bring their own unique style and point of view to this album; working together symbiotically to create something greater than any single member can bring."</em></p>
			    <p id="author"> - Robert Fadley, <a href="https://www.jambandpurist.com/home/mad-wallace-hook-line-and-sinker-album-review"><strong>Jam Band Purist</strong></a></p>
			    <p id="best">2018 - Performed in Best of the West Finals at Herman's Hideaway in Denver, CO</p>
			    <p id="best">2019 - Performed in Summer Camp On The Road at Cervantes' Masterpiece Ballroom in Denver, CO</p>
        </div>
      </div>
    </main>
  )
}