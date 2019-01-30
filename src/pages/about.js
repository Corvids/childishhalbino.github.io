import React from 'react'
import Bubble from '../components/bubble'
import NavBar from '../components/NavBar'
import Subble from '../components/subble'
// import Link from 'gatsby-link'
import style from '../components/subble.module.scss'
import IntroSubble from '../components/IntroSubble';
import BioSubble from '../components/bioSubble';

const AboutPage = () => (
  <Bubble>
    <NavBar />
    <IntroSubble></IntroSubble>
    <Subble styling={[style.One, style.shadow]}>
      <div className={style.aboutBody}>
        <Subble styling={[style.Two, style.shadow]}>
          <BioSubble toggle={true} title="More than the tl;dr:">
            <h2><i>The Computer Guy:</i></h2>
            <p>
              Since a young age; I've been interested in - and very good with computers. My Dad work in IT when I was born and
              I look back fondly on memories of building my first desktop (with his help of course) or the shock on his face when a five-year-old me worked out how to install a PC game (Monster's Inc.) I wanted to play because he wouldn't install it for me. Looking back, that would be a reoccuring theme in my life.
            </p>
            <br></br>
            <p>
              Because of those early experiences; I've always loved computers. I've become the person people turn to for hardware and software inquiries. During my early teens - I developed a passion for building computers and helped many friends enter into PC gaming. Recently, I've helepd two close friends build their relative high-end computers from start to finish, and both were incredibly satisfied with the results and appreciative of my skillset.
            </p>
            <br></br>
            <h2><i>Why Software then?</i></h2>
            <p>
              You might be asking yourself - <i>'why did he choose to be a Software Developer then?"</i> The answer is simple
              - Minecraft. Thirteen-year-old me LOVED Minecraft. I loved building Redstone (similar to electrical circuitry) contraptions especially. It was at this point that I decided to learn how to 'mod' the game. Using a YouTube tutorial - I customized the game and added blocks for no reason other than my own enjoyment. While I never actually fleshed out these mods - it ignited a spark for programming that has lasted to this day.
            </p>
            <br></br>
            <p>
              Python was where I really learned programming. Year 9 IST quickly became myself and my friend rapidly accelerating past the class and even our teacher. We pushed each other to learn new things and while they weren't pretty to look at, they taught us the fundamentals of coding. In hindsight, this is the point I decided I'd become a Software Developer.
            </p>
            <br></br>
            <p>
              Going forward from that point; especially as High School came to a close, I'd use every excuse to program. There were many times I'd write a Python script to solve repetive problems in Physics or Maths, or use spare time in my other classes to finish off scripts that played games like Rock, Paper, Scissors. It was really fun and I still find myself doing this now.
            </p>
            <br></br>
            <h2><i>Confidence Boost:</i></h2>
            <p>
              Despite how often I programmed; I didn't consider myself that <i>good</i> at it until my major project of IPT. We had to produce some form of Information System, and being a basketball fan - I designed an application that allowed our school basketball team to score and time the games rather than using a paper system. After a recommendation to try Unity, I looked into it and quickly picked up C# and the Unity interface to develop a prototype in roughly a week. Looking back at the code now; I can easily pick out hundreds of errors, but it taught me about objective oriented programming and software architechture. I went on to learn more about those topics at TAFE - cementing my passion for programming and Sofware Developement. I'm eager to enter the industry and improve even more as a developer and as a person.
            </p>
            <br></br>
            <h2><i>Outside of the Industry:</i></h2>
            <p>
              When I'm not programming or developing side projects - I'm an avid basketball fan. I've been playing since I was in Year 9. I also like playing video games such as League of Legends, and I'm fond of esports.
            </p>
          </BioSubble>
          <BioSubble toggle={false} title="Education:">
            <ul>
              <h3><li>Diploma of Software Development <i>(completed, June 2018)</i></li></h3>
              <h3><li>Higher School Certificate - Greystanes High School <i>(graduated, 2017)</i>
              </li></h3>
              <ul>
                <li>Band 5 in Hospitality</li>
                <li>Band 4 in Physics</li>
                <li>Band 4 in English</li>
                <li>Band 4 in IPT</li>
              </ul>
              <h3><li>Certificate II in Hospitality <i>(SIT20213)</i></li></h3>
            </ul>
          </BioSubble>
        </Subble>
      </div>
    </Subble>
  </Bubble>
)

export default AboutPage
