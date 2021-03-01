import React from 'react'
//import { Link } from 'react-router-dom'

function Home() {

  return (
    <>
      <div className="home">
        <section className="hero">
          <h1>Penelope <span className="mind-the-gap"> </span> Jungreis</h1>
          <p className="code-block">
            &apos;Jungreis&apos; === &apos;young&apos; + &apos;rice&apos;
          </p>
          <h4>London-Based Fullstack Software Engineer</h4>
          <h2>Get In Touch</h2>
        </section>
        <section className="contact">
          
          <div className="flex-box items-center">
            <i className="material-icons">email</i>
            <a href="mailto:penelope.jungreis@gmail.com">penelope.jungreis@gmail.com</a>
          </div>
          <div className="flex-box items-center">
            <i className="devicon-linkedin-plain"></i>
            <a href="https://www.linkedin.com/in/penelopejungreis/" target="_blank" rel="noreferrer">linkedin.com/in/penelopejungreis</a>
          </div>
          <div className="flex-box items-center">
            <i className="devicon-github-original"></i>
            <a href="https://github.com/penelopecj" target="_blank" rel="noreferrer">github.com/penelopecj</a>
          </div>
        </section>

      </div>
    </>
  )
}

export default Home