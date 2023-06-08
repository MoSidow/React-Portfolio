import React from 'react';
import avatar from'../images/20220715_190418 (1).jpg';

export default function About() {
  return (
    <div>
    <h2 className='portfolio'>About Me</h2>
    <div className='back'>
    <div className='aboutme'>
    <p>Hi 👋 My name is <span className='name'>Mohamed</span><br/><br/> <img src={avatar} alt='avatar'></img><br/><br/>
    (You can call me Mo Sidow)
    As a graduate from University of Birmingham in an intensive 24-week Full Stack Web Development course I have gained the skills and confidence required in working and collaborating with a team to produce outstanding coding projects. An individual with great problem solving skills that contributes to the team for an outcome of success. I have a passion for always learning as I advance further into my Coding career.</p>
 </ div>
 </div>
 </div>
  );
}
