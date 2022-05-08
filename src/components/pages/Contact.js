import React from 'react';

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 style={{textAlign: "center"}}>Contact</h1>
      <div className="contact-contents">
        <div>
            <div>
                <h3>Contact number</h3>
                <a href="tel:+61419090527">+61 468 871 713</a>
            </div>
            <div>
                <h3>Email</h3>
                <a href="mailto:roman25xx@gmail.com">roman25xx@gmail.com</a>
            </div>
            <div>
                <h3>Github</h3>
                <a href="https://github.com/roman-ac/" target="blank">Roman Ac</a>
            </div>
            <div>
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/roman-acharya-326967222/" target="blank">Roman-Acharya</a>
            </div>
            
        </div>
      </div>
    </div>
    );
}
