import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/favicon.ico'

function Nav() {

  return (
    <nav>
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </Link>
      <ul>
        <li> 
          <Link to="/projects">Projects</Link>
        </li>
        <li> 
          <Link to="/skills">Skills</Link>
        </li>
        <li> 
          <Link to="/about">About Me</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav