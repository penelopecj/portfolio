import React from 'react'
import { Link } from 'react-router-dom'
//import logo from '../images/favicon.ico'

function Nav() {

  return (
    <nav>
      <Link to="/">
        <div className="logo">
          <p>CodePenny</p>
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
      </ul>
    </nav>
  )
}

export default Nav