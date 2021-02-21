import React from 'react'
//import { Link } from 'react-router-dom'
import GA from '../images/ga.ico'
import logo from '../images/favicon.ico'
import wes from '../images/wes-bos.png'
import piekea from '../images/piekea-home.gif'
import reimagined from '../images/reimagined-home.gif'
import cookie from '../images/eat-home.png'
import shark from '../images/pac-shark-home.png'
import wedding from '../images/wedding-home.png'
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
          <ul>
            <li>
              <h5>1W</h5>
              <p>One Week</p>
            </li>
            <li>
              <i className="material-icons">group</i>
              <p>Pair Project</p>
            </li>
            <li>
              <i className="devicon-django-plain"></i>
              <p>Django</p>
            </li>
            <li>
              <i className="devicon-postgresql-plain"></i>
              <p>PostgresSQL</p>
            </li>
            <li>
              <i className="devicon-react-original"></i>
              <p>React</p>
            </li>
            <li>
              <i className="devicon-sass-original"></i>
              <p>SASS</p>
            </li>
            <li>
              <i className="devicon-heroku-original"></i>
              <p>Heroku</p>
            </li>
          </ul>
          <p>A Django, PostgresSQL, React full-stack app. My final project for General Assembly&apos;s Software Engineering Immersive.</p>
          <div className="project-btn-wrapper">
            <a href="http://piekea.herokuapp.com/" target="_blank" rel="noreferrer">Website</a>
            <a href="https://github.com/penelopecj/sei-project-4" target="_blank" rel="noreferrer">Readme</a>
          </div>
        </div>

        <div>
          <h3>Project 3: 2020 Reimagined</h3>
          <figure>
            <img src={reimagined} alt="project homepage" />
          </figure> 
          <ul>
            <li>
              <h5>9D</h5>
              <p>Nine Days</p>
            </li>
            <li>
              <i className="material-icons">groups</i>
              <p>Group Project</p>
            </li>
            <li>
              <i className="devicon-mongodb-plain"></i>
              <p>MongoDB</p>
            </li>
            <li>
              <i className="devicon-express-original"></i>
              <p>Express.js</p>
            </li>
            <li>
              <i className="devicon-react-original"></i>
              <p>React</p>
            </li>
            <li>
              <i className="devicon-nodejs-plain"></i>
              <p>Node.js</p>
            </li>
            <li>
              <i className="devicon-sass-original"></i>
              <p>SASS</p>
            </li>
            <li>
              <i className="devicon-heroku-original"></i>
              <p>Heroku</p>
            </li>
          </ul>
          <p>A MERN full-stack app. My first group project for General Assembly&apos;s Software Engineering Immersive.</p>
          <div className="project-btn-wrapper">
            <a href="https://reimagined2020.herokuapp.com/" target="_blank" rel="noreferrer">Website</a>
            <a href="https://github.com/penelopecj/sei-project-3" target="_blank" rel="noreferrer">Readme</a>
          </div>
        </div>

        <div>
          <h3>Project 2: Can I Eat This?</h3>
          <figure>
            <img src={cookie} alt="project homepage" />
          </figure> 
          <ul>
            <li>
              <h5>48Hr</h5>
              <p>Two Days</p>
            </li>
            <li>
              <i className="material-icons">group</i>
              <p>Pair Project</p>
            </li>
            <li>
              <i className="devicon-react-original"></i>
              <p>React</p>
            </li>
            <li>
              <i className="devicon-javascript-plain"></i>
              <p>JavaScript</p>
            </li>
            <li>
              <i className="devicon-css3-plain"></i>
              <p>Bulma CSS</p>
            </li>
            <li>
              <i className="material-icons">laptop_mac</i>
              <p>Netlify</p>
            </li>
          </ul>
          <p>A React app built during a 48hr hackathon. My first pair project for General Assembly&apos;s Software Engineering Immersive.</p>
          <div className="project-btn-wrapper">
            <a href="https://recipe-allergies.netlify.app/" target="_blank" rel="noreferrer">Website</a>
            <a href="https://github.com/penelopecj/sei-project-2" target="_blank" rel="noreferrer">Readme</a>
          </div>
        </div>

        <div>
          <h3>Project 1: Pac-Shark</h3>
          <figure>
            <img src={shark} alt="project homepage" />
          </figure> 
          <ul>
            <li>
              <h5>10D</h5>
              <p>Ten Days</p>
            </li>
            <li>
              <i className="material-icons">person</i>
              <p>Solo Project</p>
            </li>
            <li>
              <i className="devicon-javascript-plain"></i>
              <p>JavaScript</p>
            </li>
            <li>
              <i className="devicon-css3-plain"></i>
              <p>CSS3</p>
            </li>
            <li>
              <i className="devicon-html5-plain"></i>
              <p>HTML5</p>
            </li>
            <li>
              <i className="devicon-github-original"></i>
              <p>GitHub Pages</p>
            </li>
          </ul>
          <p>A JavaScript web-based game. My first solo project for General Assembly&apos;s Software Engineering Immersive.</p>
          <div className="project-btn-wrapper">
            <a href="https://penelopecj.github.io/sei-project-1/" target="_blank" rel="noreferrer">Website</a>
            <a href="https://github.com/penelopecj/sei-project-1" target="_blank" rel="noreferrer">Readme</a>
          </div>
        </div>

        <div className="project-category flex-box">
          <img className="small-logo" src={logo} alt="GA logo" />
          <h2>Personal Projects</h2>
        </div>

        <div>
          <h3>Save the Date</h3>
          <figure>
            <img src={wedding} alt="project homepage" />
          </figure> 
          <ul>
            <li>
              <h5>??</h5>
              <p>Ongoing</p>
            </li>
            <li>
              <i className="material-icons">person</i>
              <p>Solo Project</p>
            </li>
            <li>
              <i className="devicon-react-original"></i>
              <p>React</p>
            </li>
            <li>
              <i className="devicon-javascript-plain"></i>
              <p>JavaScript</p>
            </li>
            <li>
              <i className="devicon-sass-original"></i>
              <p>SASS</p>
            </li>
            <li>
              <i className="material-icons">laptop_mac</i>
              <p>Netlify</p>
            </li>
          </ul>
          <p>A front-end React project. My first side project after General Assembly&apos;s Software Engineering Immersive. Currently working on adding a backend with Django and PostgresSQL.</p>
          <div className="project-btn-wrapper">
            <a href="http://pennyandzac.com/" target="_blank" rel="noreferrer">Website</a>
            <a href="https://github.com/penelopecj/save-the-date" target="_blank" rel="noreferrer">Readme</a>
          </div>
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
          <ul>
            <li>
              <h5>3M</h5>
              <p>Three Months</p>
            </li>
            <li>
              <i className="material-icons">person</i>
              <p>Solo Project</p>
            </li>
            <li>
              <i className="devicon-javascript-plain"></i>
              <p>JavaScript</p>
            </li>
            <li>
              <i className="devicon-css3-plain"></i>
              <p>CSS</p>
            </li>
            <li>
              <i className="devicon-html5-plain"></i>
              <p>HTML5</p>
            </li>
            <li>
              <i className="material-icons">laptop_mac</i>
              <p>Netlify</p>
            </li>
          </ul>
          <p>Informational website to shed light on the scandal at 15 Zenith Close. My final project for General Assembly&apos;s Front-End Web Developement course.</p>
          <div className="project-btn-wrapper">
            <a href="https://15zenith.co.uk/" target="_blank" rel="noreferrer">Website</a>
            <a href="https://github.com/penelopecj/15Zenith" target="_blank" rel="noreferrer">Readme</a>
          </div>
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