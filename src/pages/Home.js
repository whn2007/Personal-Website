import React from 'react'
import {Link} from "react-router-dom"
import BannerImage from "../assets/bean.JPG"
import "../styles/Home.css"


function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${BannerImage})`}}>
        <div className='headerContainer'>
          <h1>William Nguyen</h1>
          <p>Check out what I'm up to!</p>
          <Link to = "/menu">
            <button>PROJECTS</button>
          </Link>
        </div>
    </div>
  )
}

export default Home