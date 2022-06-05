import React from 'react'
import BeanAndBun from "../assets/beanandbun.jpg"
import "../styles/About.css"

function About() {
  return (
    <div className='about'>
        <div 
            className='aboutTop' 
            style ={{backgroundImage: `url(${BeanAndBun})`}}
        ></div>
        <div className='aboutBottom'>
            <h1>ABOUT ME</h1>
            <p>
                Hi! My name is William Nguyen, and I am a computer scientist aspiring to 
                pursue a career in front-end development. I have a variety of side hobbies,
                such as playing video games and making games! I love animals, especially my
                dogs Bean and Bun, who you can see on this website. If you have any business 
                inquiries feel free to reach out! 
            </p>
        </div>
    </div>
  )
}

export default About