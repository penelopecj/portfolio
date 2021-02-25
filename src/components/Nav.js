import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav>
      <Link to="/">
        <div className="logo">
          <p>Code Penny</p>
        </div>
      </Link>
      <ul className={isOpen ? '' : 'hide-menu'}>
        <li className="mobile-divider"> 
          <Link 
            to="/projects" 
            onClick={handleMenuToggle}
          >
            <span>Projects</span>
            <p>✖︎</p>
          </Link>
          
        </li>
        <li className="mobile-divider"> 
          <Link 
            to="/skills"
            onClick={handleMenuToggle}
          >
            <span>Skills</span>
            <p>✖︎</p>
          </Link>
        </li>
        <li className="mobile-divider"> 
          <Link 
            to="/about"
            onClick={handleMenuToggle}
          >
            <span>About Me</span>
            <p>✖︎</p>
          </Link>
        </li>
      </ul>
      <div className="flex-box social-icons">
        <li className="mind-the-gap"> 
          <a href="https://www.linkedin.com/in/penelopejungreis/" target="_blank" rel="noreferrer" className="turquoise">
            <i className="devicon-linkedin-plain"></i>
          </a>
        </li>
        <li className="mind-the-gap"> 
          <a href="https://github.com/penelopecj" target="_blank" rel="noreferrer" className="turquoise">
            <i className="devicon-github-plain"></i>
          </a>
        </li>
        <li className="mind-the-gap">
          <a href="mailto:penelope.jungreis@gmail.com" className="turquoise">
            <i className="material-icons large-icon">email</i>
          </a>
        </li>
        <li>     
          <div 
            onClick={handleMenuToggle} 
            className={`toggle-btn ${isOpen ? 'close-btn' : 'open-btn'}`}
          >
            <div className="line-one">|</div>
            <div className="line-two">|</div>
            <div className="line-three">|</div>
          </div>
        </li>
      </div>
    </nav>
  )
}

export default Nav