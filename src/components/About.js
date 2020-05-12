import React from 'react'
import avatar from './meRound500.png';
import './About.css';
import AboutText from './AboutText';

function About() {
  return (
    <div className="About">
      <img src={avatar} alt="" />
      <AboutText />
    </div>
  );
}

export default About;