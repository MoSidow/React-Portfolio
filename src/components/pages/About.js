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
       I live In Birmingham, West Midlands.
       My highest level of education is A levels.
      IT Skills probably 8 out of 10. I am currently studying Full Stack Web development at Birmingham City University, graduating this month.
    I took this Course, because I've always wanted to know what really is behind in Creating a website and I have an eager to learn how it is done, So I can hopefully get into a Career of Web development.
  Fun Fact: I enjoy Playing Football</p>
 </ div>
 </div>
 </div>
  );
}
