import React from 'react'
import AboutContainer from '../AboutContainer/AboutContainer'
import '../../main.scss'

export default function About() {
  return (
    <section className="about-container">
      <h1>about</h1>
      <img src="./assets/about-cover.jpg" alt="Mad Wallace in front of Denver skyline" />
      <p>Who is Mad Wallace? A person? A place? A specter in the night? You’re on the right track. Mad Wallace is a family that entered into a legally binding agreement to split everything from food and shelter, to showers and future children. Sometimes they love each other and sometimes they don’t. Mad Wallace is a couple of ornery Jakes, an unflappable Jamie, and a super nice dude named Cory. Formed in the Spring of 2017, this group has perfected the art of bringing the overwhelming energy of house parties to whatever venue they play. Mad Wallace’s dynamic sound keeps audiences dancing through rock-y, heav-y, Latin-y, and hipp-y grooves that somehow wind their way into a coherent set. Based out of Denver, Mad Wallace has made its home along the Front Range, playing at venues like Cervantes, Summit Music Hall, and Larimer Lounge while sharing the stage with bands like Perpetual Groove and Legato. However, the band is most at home in a grungy house playing into the wee hours of the nightfall.</p>
      <p className="center-p">“So if you are feeling down and kinda beat, just grab a hold of your old friend Pete.</p>
      <p className="center-p">If you are feeling hungry and need to eat, 
      just grab a hold of your old friend Pete.</p>
      <p className="center-p">If you’re feeling tired and need to sleep,
      just grab a hold of your old friend Pete.”</p>
      <p className="center-p">If you’re feeling lost and can’t find the beat, 
      Grab a hold of your old friend Pete!”</p>
      <p className="center-p"><strong>And Pete </strong>
      - Mad Wallace</p>
      <div className="photo-container">
        {
          ['Sabetta', 'Lauer', 'Jamie', 'Cory'].map(name => {
            return <AboutContainer name={name} key={name} />
          })
        }
      </div>
      <a href="http://www.ciphermagazine.com/mad-wallace/" target="_blank" rel="noopener noreferrer">
        <button>
          Want to know more about the band?
        </button>
      </a>
    </section>
  )
}