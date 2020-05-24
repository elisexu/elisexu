import './App.css';
import './Projects.css';
import React from 'react';
import cbLogo from './img/chodebase.png';
import cathacks from './img/cathacks.jpg';
import nightlight from './img/nightlight.png';

function Projects() {
    return (
      <div className="Projects">
        <div className="container">
          <div className="codebase">
           <img src={cbLogo} alt="Berkeley CodeBase Logo"></img>
           <a href="https://codebase.berkeley.edu/" target="_blank">
              <div class="overlay">
                <div class="text">codebase</div>
              </div>
            </a>
          </div>
          <div className="cathacks">
            <img src={cathacks} alt="Berkeley CodeBase Logo"></img>
            <a href="https://cathacks2016.github.io/ourshelter/main_page.html" target="_blank">
              <div class="overlay">
                <div class="text">cathacks</div>
              </div>
            </a>
          </div>
          <div className="nightlight">
           <img src={nightlight} alt="Berkeley CodeBase Logo"></img>
           <a href="https://calhacksnightlight.herokuapp.com/" target="_blank">
              <div class="overlay">
                <div class="text">nightlight</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Projects;