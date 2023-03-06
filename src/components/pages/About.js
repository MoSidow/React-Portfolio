import React from 'react';
import avatar from'../images/20220715_190418 (1).jpg';

export default function About() {
  return (

    <div className='back'>
    <div className='aboutme'>
    <h2>About Me</h2>
    <p>Hi 👋 My name is <span className='name'>Mohamed</span><br/><br/> <img src={avatar} alt='avatar'></img><br/><br/>
    (You can call me Mo Sidow)
       I live In Birmingham, West Midlands.
       My highest level of education is A levels, I am not  that technical.
      IT Skills probably 2 or 3. I have some basic knowledge of Simple HTML and CSS.
    I took this Course, because I've always wanted to know what really is behind in Creating a website and I have an eager to learn how it is done, So I can hopefully get into a Career of Web development.
  Fun Fact: I enjoy Playing Football</p>
 </ div>
 </div>
  );
}
