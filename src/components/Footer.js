import React from 'react'
import Gmail from './images/gml.png'
import LinkedIn from './images/lil.png'
import Github from './images/ghl.png'
export default function Footer(){
    return(
        <footer className='footer-sec'>
        <ul className='footer-itms'>
        <li><a href="https://github.com/MoSidow"><img class="img" src= {Github} alt="Github logo"/></a></li>
        <li><a href="https://www.linkedin.com/in/mohamed-sidow-890133269/"><img class="img" src= {LinkedIn} alt="LinkedIn logo"/></a></li>
        <li><a href="mailto:sidowmohamed35@gmail.com"><img class="img" src= {Gmail} alt="Gmail logo"/></a></li>
        </ul>
      </footer>
    )
}