import React from 'react'
import AboutContainer from '../AboutContainer/AboutContainer'
import '../../main.scss'

export default function About() {
  return (
    <section className="about-container">
      <h1>about</h1>
      <img src="./assets/about-cover.jpg" alt="Mad Wallace in front of Denver skyline" />
      <p>In the fall of 2014, a young boy named "Jamie" stumbled upon another young boy named "Jake #1." They talked about the weather and the origins of their family names for a while until they discovered their mutual love for the guitar. They jammed together for the first time that night, and what started out as a chance encounter budded into a full on sonorous connection. The technical riffs and tasty licks that emanated from Jamie and Jake's sweet sweet fingers formed some of the most beautiful music the residents of Slocum dormitory had ever heard.</p>
      <p>Several days later, the two jammed again, this time with the addition of Jake #1's roommate: "Jake #2". Jake #2 and Jake #1 did everything together: sleep, eat, shower. This friendship provided the foundation to what was already a profound musical connection. The rate at which Jamie picked up on the harmonious stylings of Jake #1 and Jake #2 surprised everyone. The compatibility was undeniable… though that would be the last time the three played together for over a year. </p>
      <p>Spring, 2016. As fate would have it the three found their way back into each other's arms with the addition of a bass player "Kyle". It seemed as though the timing was finally right. In no time, these bad larrys whipped up the beginnings of what would become "Clover," "Westlandia," and "Hook Line & Sinker." Though just as things began to pick up, Jake #1 suffered a brutal head injury while climbing a pile of rocks and returned to his homeland of New Jersey to recover. Jamie and Jake #2 continued to play together over the following months with a different bass player named "David", all the while longing for Jake #1's return. </p>
      <p>David brought the much needed funk to the table. His slap lines and rhythmic thumping made dancing irresistible despite the sometimes complex compositions being performed. That summer, Jamie, Jake #2, and David played almost every day. And with each passing hour, their tightness increased along with the belief that this band might live on after graduation. But yet again, the timing proved incorrect. Just as Jake #1 returned, Jake #2 left to study in Italy, and David left to study in Los Angeles. …the fire was reduced to embers… but never quite died.</p>
      <p>Winter, 2017. Jake #1, Jamie, Jake #2, and David were finally together in CO. In that first jam together, sparks flew as the four locked eyes with each other all at once, defying physics. It was as if everyone knew exactly what the other was thinking. While the music created that night was never recorded, it is said you can still hear the faint echoes of the fateful jam ringing through that lonely basement if you listen hard enough. With graduation looming, and the deep seeded fear of working behind a desk beginning to set in, the foursome decided that it was now or never. It was time to make this band work. In no time, the four friends were completing each other's phrases as sweet tune after sweet tune was written and Mad Wallace was finally birthed. </p>
      <div className="photo-container">
        {
          ['Sabetta', 'Lauer', 'Jamie', 'David'].map(name => {
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