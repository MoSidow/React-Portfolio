import React from 'react';
import CV from '../images/CVi.PNG'
export default function Resume() {
  return (
    <div>
    <h2 className='portfolio'>Resume</h2>
    <div className='project'>
      <div>
      <a href="https://drive.google.com/file/d/1VzkOQbrmcgDEBMf870ROXTb4JCUw2b0y/view?usp=share_link"><img classname="Cimg"src={CV} alt="Cv cover"/></a>
    </div>
    </div>
    </div>
  );
}
