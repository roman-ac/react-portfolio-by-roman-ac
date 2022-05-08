import React from 'react';

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 style={{textAlign: "center"}}>Contact</h1>
      <div className="contact-box">
        <div>
            <div>
                <h3 className='contact-header'>Contact number</h3>
                <a className='contact-content' href="tel:+61468871713">+61 468 871 713</a>
            </div>
            <div>
                <h3 className='contact-header'>Email</h3>
                <a className='contact-content' href="mailto:roman25xx@gmail.com">roman25xx@gmail.com</a>
            </div>
            <div>
                <h3 className='contact-header'>Github</h3>
                <a className='contact-content' href="https://github.com/roman-ac/" target="blank">Roman Ac</a>
            </div>
            <div>
                <h3 className='contact-header'>LinkedIn</h3>
                <a className='contact-content' href="https://www.linkedin.com/in/roman-acharya-326967222/" target="blank">Roman-Acharya</a>
            </div>
            
        </div>
      </div>
    </div>
    );
}
