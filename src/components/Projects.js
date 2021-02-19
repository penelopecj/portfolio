import React from 'react'
//import { Link } from 'react-router-dom'
import GA from '../images/ga.ico'
import logo from '../images/favicon.ico'
import wes from '../images/wes-bos.png'
import piekea from '../images/piekea-home.gif'
import reimagined from '../images/reimagined-home.gif'
import cookie from '../images/eat-home.png'
import shark from '../images/pac-shark-home.png'
import zenith from '../images/zenith-home.png'








function Projects() {

  return (
    <>
      <main className="projects-page">
        <h1>Projects</h1>
        <div className="project-category flex-box">
          <img className="small-logo" src={GA} alt="GA logo" />
          <h2>Software Engineering Immersive</h2>
        </div>
        <div>
          <h3>Project 4: PIEKEA</h3>
          <figure>
            <img src={piekea} alt="project homepage" />
          </figure> 
          <h5>One-week - pair - Django</h5>
          <p>A Django, PostgresSQL, React full-stack app. My final project for General Assembly&apos;s Software Engineering Immersive.</p>
        </div>
        <div>
          <h3>Project 3: 2020 Reimagined</h3>
          <figure>
            <img src={reimagined} alt="project homepage" />
          </figure> 
          <h5>Nine-days - group - MERN</h5>
          <p>A MERN full-stack app. My first group project for General Assembly&apos;s Software Engineering Immersive.</p>
        </div>
        <div>
          <h3>Project 2: Can I Eat This?</h3>
          <figure>
            <img src={cookie} alt="project homepage" />
          </figure> 
          <h5>Two-days - pair - React</h5>
          <p>A React app built during a 48hr hackathon. My first pair project for General Assembly&apos;s Software Engineering Immersive.</p>
        </div>
        <div>
          <h3>Project 1: Pac-Shark</h3>
          <figure>
            <img src={shark} alt="project homepage" />
          </figure> 
          <h5>One-week - solo - JS</h5>
          <p>A JavaScript web-based game. My first solo project for General Assembly&apos;s Software Engineering Immersive.</p>
        </div>

        <div className="project-category flex-box">
          <img className="small-logo" src={logo} alt="GA logo" />
          <h2>Personal Projects</h2>
        </div>
        <div>
          <h3>Save the Date</h3>
          <h5>Ongoing - solo - React</h5>
          <p>A front-end React project. My first side project after General Assembly&apos;s Software Engineering Immersive. Currently working on adding a backend with Django and PostgresSQL.</p>
        </div>

        <div className="project-category flex-box">
          <img className="small-logo" src={GA} alt="GA logo" />
          <h2>Front End Web Development Course</h2>
        </div>
        <div>
          <h3>Final Project: Cladding Scandal</h3>
          <figure>
            <img src={zenith} alt="project homepage" />
          </figure>
          <h5>Three-months - solo - JS</h5>
          <p>Informational website to shed light on the scandal at 15 Zenith Close. My final project for General Assembly&apos;s Front-End Web Developement course.</p>
        </div>

        <div className="project-category flex-box">
          <img className="small-logo" src={wes} alt="JavaScript 30 logo" />
          <h2>JavaScript 30</h2>
        </div>
        <div>
          <h3>name</h3>
          <h5> One day - solo - JS</h5>
          <p>JavaScript 30.</p>
        </div>

      </main>
    </>
  )
}

export default Projects