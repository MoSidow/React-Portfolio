import React from 'react';
import P1 from '../images/pro1.PNG'
import P2 from '../images/screenshot1.png'
import P3 from '../images/2022-10-25_00-31-21.png'
import P4 from '../images/ssh1.PNG'
import P5 from '../images/Screenshot 2022-11-17 215221.png'
import P6 from '../images/123.png'

export default function Portfolio() {
  return (
    <div>
    <h2 className='portfolio'>Portfolio</h2>
    <div className='border'>
      <div className='project'>
        <div>
          <h2 className='Ptitle'>WeatherForYou</h2>
          <p className='desc'>5-Day Weather Forecast</p>
          <a href="https://mosidow.github.io/React-GroupWork/"><img src={P1} alt="Screenshot of application"/></a>
        <h3><a href="https://github.com/MoSidow/React-GroupWork">See Code On GitHub!</a></h3><br/><br/><br/></div>
        <div>
          <h2 className='Ptitle'>Platinum Pre-loved</h2>
          <p className='desc'>Sell your second hand jewellery</p>
          <a href="https://platinum-pre-loved.herokuapp.com/"><img src={P2} alt="Screenshot of application"/></a>
          <h3><a href="https://github.com/MoSidow/Postgres">See Code On GitHub!</a></h3><br/><br/><br/></div>
        
         <div>
         <h2 className='Ptitle'>Code-Quix</h2>
          <p className='desc'>A quiz based on Coding</p>
          <a href="https://mosidow.github.io/Code-Quiz/"><img src={P3} alt="Screenshot of application"/></a>
          <h3><a href="https://github.com/MoSidow/Code-Quiz">See Code On GitHub!</a></h3><br/><br/><br/></div>
        <div>
        <h2 className='Ptitle'>JATE Text Editor</h2>
          <p className='desc'>Just Another Text Editor</p>
          <a href="https://pwa-text-editor190.herokuapp.com/"><img src={P4} alt="Screenshot of application"/></a>
          <h3><a href="https://github.com/MoSidow/A-PWA-Text-Editor">See Code On GitHub!</a></h3><br/><br/><br/></div>
        <div>
        <h2 className='Ptitle'>Weather Dashboard</h2>
          <p className='desc'>Simple Weather Dashboard</p>
          <a href="https://mosidow.github.io/Weather-Dashboard/"><img src={P5} alt="Screenshot of application"/></a>
          <h3><a href="https://github.com/MoSidow/Weather-Dashboard">See Code On GitHub!</a></h3><br/><br/><br/></div>
        <div>
        <h2 className='Ptitle'>Note-Taker</h2>
          <p className='desc'>Write and Save your Notes</p>
          <a href="https://note-taker098.herokuapp.com/"><img src={P6} alt="Screenshot of application"/></a>
          <h3><a href="https://github.com/MoSidow/Note-Taker">See Code On GitHub!</a></h3><br/><br/><br/></div>
    </div>
    </div>
    </div>
  );
}
