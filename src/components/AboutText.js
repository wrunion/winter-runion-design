import React from 'react';

function AboutText() {
  return (
    <div className="AboutText">
      <div className="header">
        <h1>Winter A. Runion</h1>
        <h2 className="subheader">Web Dev & Software Engineering</h2>
      </div>
      <p className="location">Portland, Oregon</p>
      {/* <div><button type="button">Github</button> <button type="button">LinkedIn</button></div> */}
      <p className="links"><a href="https://github.com/wrunion" target="_blank" rel="noopener noreferrer">Github</a> | <a href="https://github.com/wrunion" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      <p id="email"><em>Contact: winter@winterrunion.com</em></p>
    </div>
  )
}

export default AboutText;