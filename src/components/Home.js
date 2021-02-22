import React from 'react'
//import { Link } from 'react-router-dom'

function Home() {

  return (
    <>
      <div className="home">
        <section className="hero">
          <h1>Penelope Jungreis</h1>
          <p className="code-block">
            &quot;Jungreis&quot; === &quot;young&quot; + &quot;rice&quot;
          </p>
          <h4>Full-Stack Software Engineer</h4>
          
        </section>
        <section className="contact">
          <div>
            <i className="material-icons">email</i>
            <a href="mailto:penelope.jungreis@gmail.com"> penelope.jungreis@gmail.com</a>
          </div>
          <div>
            <i className="devicon-linkedin-plain"></i>
            <a href="https://www.linkedin.com/in/penelopejungreis/" target="_blank" rel="noreferrer"> linkedin.com/in/penelopejungreis</a>
          </div>
          <div>
            <i className="devicon-github-original"></i>
            <a href="https://github.com/penelopecj" target="_blank" rel="noreferrer"> github.com/penelopecj</a>
          </div>
        </section>

      </div>
    </>
  )
}

export default Home