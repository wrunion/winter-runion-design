import React from 'react'
import avatar from './meRound500.png';
import './About.css';
// import AboutText from './AboutText';

function About() {
  return (
    <div className="About">
      <img src={avatar} alt="" />
      {/* <AboutText /> */}
      <div className="AboutText">
        <div className="header">
          <h1>Winter A. Runion</h1>
          <h2 className="subheader">Web Dev & Software Engineering</h2>
        </div>
        <p className="location">Portland, Oregon</p>
        {/* <div><button type="button">Github</button> <button type="button">LinkedIn</button></div> */}
        <p className="links"><a href="https://github.com/wrunion" target="_blank" rel="noopener noreferrer">Github</a> | <a href="https://www.linkedin.com/in/wrunion/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        <p>winter@winterrunion.com</p>
      </div>
    </div>
  );
}

export default About;