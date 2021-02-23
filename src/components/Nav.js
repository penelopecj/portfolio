import React from 'react'
import { Link } from 'react-router-dom'
//import logo from '../images/favicon.ico'

function Nav() {

  return (
    <nav>
      <Link to="/">
        <div className="logo">
          <p>Code Penny</p>
        </div>
      </Link>
      <ul>
        <li> 
          <Link to="/projects">Projects</Link>
          <p>✖︎</p>
        </li>
        <li> 
          <Link to="/skills">Skills</Link>
          <p>✖︎</p>
        </li>
        <li> 
          <Link to="/about">About Me</Link>
          <p>✖︎</p>
        </li>
        <span className="flex-box">
          <li className="mind-the-gap"> 
            <a href="https://www.linkedin.com/in/penelopejungreis/" target="_blank" rel="noreferrer" className="turquoise">
              <i className="devicon-linkedin-plain"></i>
            </a>
          </li>
          <li> 
            <a href="https://github.com/penelopecj" target="_blank" rel="noreferrer" className="turquoise">
              <i className="devicon-github-plain"></i>
            </a>
          </li>
        </span>
      </ul>
    </nav>
  )
}

export default Nav