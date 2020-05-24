import './App.css';
import './Home.css';
import React from 'react';
import gradPhoto from './img/grad.png';
import resume from './docs/resume.pdf';

function Home() {
    return (
      <div className="Home">
        <div className="container">
          <div className="text">
            <p>
            Hi, I'm <b>Elise</b>! <br></br>
            <br></br>
            I’m a software engineer at NerdWallet and a UC Berkeley CS grad. 
            I’ve been involved with Berkeley CodeBase, Theta Tau, and Girls Who Code.<br></br>
            <br></br>
            Here’s my <a href={resume} target="_blank">resume</a>. 
            Hopefully this <a href="https://github.com/elisexu" target="_blank">github</a> will have 
            cool things soon. And check out my favorite Jenna Marbles <a href="https://www.youtube.com/watch?v=EG2_RQ0kT7o" target="_blank">video</a>!
            </p>
          </div>
          <div className="image">
            <img src={gradPhoto} alt="Elise smiling for a graduation photo. Go Bears!"></img>
          </div>
        </div>
      </div>
     
    );
  }
  
  export default Home;