import React from 'react'

export default function PressKit() {
  document.title = 'Mad Wallace | Press Kit'
  return (
    <main className="press-kit">
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
        <div className="press"></div>
        <div className="pk-music"></div>
        <div className="pk-video"></div>
      </div>
    </main>
  )
}