import React from 'react';

export default function Contact() {
  return (
    <div>
      <h2 className='portfolio'>Contact Me</h2>
      <form className='form'>
          <div>
            <label className='Ftitle'>Name:</label>
            <input type="text" required placeholder='Enter Your Name' className='input'/>
          </div>

          <div>
            <label className='Ftitle'>Email:</label>
            <input required type='email' placeholder='Enter Your Email' className='input'/>
          </div>

          <div>
            <label className='Ftitle'>Message:</label>
            <textarea required placeholder='Enter Your Message' className='input'/>
          </div>

          <div>
            <button className='button1'>Submit Form</button>
          </div>
        </form>
    </div>
  );
}
