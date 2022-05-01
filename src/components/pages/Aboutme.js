import React from 'react';
import Image from '../assets/profile2.JPG';


export default function Aboutme() {


  return (
    <div className="profile-container">
      <h1>About me</h1>
      <div className="profile-contents">  
        <div>
            <img className="profile-image" src={Image} alt='profileimage'></img>
        </div>
        <div className="profile-content">
            <p>
            My name is Roman Acharya. I'm from Sydney Australia and i live in Northern Beaches, undoubtely one of the 
            beautiful places in sydney. I come from business background and have spent most of my career in Automobile 
            industry. I have undertaken the Full Stack Flex (part-time) course with the University of Sydney and its one of 
            the best decision i've ever made. I had, in my head for a very longtime,dream to learn coding pursue my career
            as a Developer. So here i am.
            </p>
        </div>
        </div>
    </div>
  );
}
