import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram"
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href='https://www.instagram.com/william.h.nguyen/'
              target = "_blank"
            >
              <InstagramIcon/>
            </a>
            <a href = "https://github.com/whn2007" 
                target = "_blank">
              <GitHubIcon/>
            </a>
            <a href = "https://www.youtube.com/channel/UCBgL-BN69gR9PdAQoR6kcNA" 
                target = "_blank">
              <YouTubeIcon/>
            </a>
            <a href = "https://www.linkedin.com/in/william-nguyen-1207811ba/"
                target = "_blank">
              <LinkedInIcon/>
            </a>


        </div>
        <p> &copy; 2022 whn2007.github.io </p>
    </div>
  )
}

export default Footer