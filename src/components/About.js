import React from 'react'
//import { Link } from &apos;react-router-dom&apos;
import codecademy from '../images/codecademy.svg'
//import CodecademyPro from '../images/codecademy-pro.png'
import GeneralAssembly from '../images/general-assembly.png'
import efdss from '../images/efdss.png'
import aim from '../images/aim.jpg'
import sshrishti from '../images/sshrishti.jpg'
import wagner from '../images/wagner.jpg'
import roehampton from '../images/roehampton.png'
import springs from '../images/springs.jpg'
import cruises from '../images/cruises.png'
import zenith from '../images/zenith.png'
import cookie from '../images/cookie-monster-emoji.png'
import reimagined from '../images/2020.png'
import piekea from '../images/pikea-logo-nav.png'
import pacshark from '../images/pac-shark.png'

function About() {

  return (
    <>
      <main className="line-height">
      
        <div className="black-border bio-box">
          <h1>Who I Am</h1>
          <p className="bio">Hello world! I am a dancer, turned project coordinator, turned event planner, turned digital marketer, turned software engineer with 8 years experience in the performing arts industry. You can see a brief timeline of my professional career below or the full history on <a href="https://www.linkedin.com/in/penelopejungreis/" target="_blank" rel="noreferrer" className="linked-in">LinkedIn</a> ↩︎</p>
          <p className="bio">I aspire to make a positive impact through technology and to improve people&apos;s quality of life through automation. I grew up in a family of software developers and have valued solving complex problems from a young age. I have recently made a career pivot into full-stack engineering, where I hope to find new challenges, rewards, and software that will solve everyday problems for people like you and me.</p>
          <p className="bio">When not at home reading discussions on StackOverflow, I can be found in exotic lands scuba diving, skiing, and salsa dancing.</p>
        </div> 
        <section id="timeline">
          <section className="content timeline-section">
            <div className="history flex-box column centered">
              <h2>Career History</h2>
              <p>(Reverse Chronological Order)</p>
            </div>
            <section className="timeline">

              <article className="container left-panel">
                <h4 className="bold">25th February 2021</h4>
                <figure>
                  <img src={GeneralAssembly} alt="General Assembly" />
                </figure>
                <p>Completed General Assembly&apos;s Software Engineering Immersive (SEI): a 12-week, full-time, software engineering bootcamp. Developed full-stack web applications through pair coding, testing, daily standups, Trello project management, Slack, and group Git. Deployed apps on GitHub, Netlify, and Heroku.</p>
              </article>

              <article className="container right-panel">
                <h4 className="bold">3rd February 2021</h4>
                <figure>
                  <a href="http://piekea.herokuapp.com/" target="_blank" rel="noreferrer">
                    <img src={piekea} alt="PIEKEA" />
                  </a>
                </figure>
                <p>Built <a href="http://piekea.herokuapp.com/" target="_blank" rel="noreferrer">PIEKEA</a>, my final project for GA&apos;s SEI. Seven days. Built a full-stack e-commerce platform using Python and Django for the back end, PostgresSQL for the database, and React for the front end. Worked with a partner sharing code through GitHub. <a href="https://github.com/penelopecj/sei-project-4" target="_blank" rel="noreferrer" className="readme">Readme</a></p>
              </article>

              <article className="container left-panel">
                <h4 className="bold">15th January 2021</h4>
                <figure>
                  <a href="http://reimagined2020.herokuapp.com/" target="_blank" rel="noreferrer">
                    <img src={reimagined} alt="2020 Reimagined" />
                  </a>
                </figure>
                <p>Built <a href="http://reimagined2020.herokuapp.com/" target="_blank" rel="noreferrer">2020 REIMAGINED</a>, my third project for GA&apos;s SEI. Eight days. Group Git in a team of three to build a complete MERN full-stack website using a database of events we built in Express, a Mongo back-end, and React front-end, which allowed users to create an account and CRUD their own events. Included map view, event reviews and ratings, average ratings, and top-rated sections. <a href="https://github.com/penelopecj/sei-project-3" target="_blank" rel="noreferrer" className="readme">Readme</a></p>
              </article>

              <article className="container right-panel">
                <h4 className="bold">17th December 2020</h4>
                <figure>
                  <a href="https://recipe-allergies.netlify.app/" target="_blank" rel="noreferrer">
                    <img src={cookie} alt="Cookie Monster" />
                  </a>
                </figure>
                <p>Built <a href="https://recipe-allergies.netlify.app/" target="_blank" rel="noreferrer">CAN I EAT THIS?</a>, my second project for GA&apos;s SEI. Two days. Pair coded in a 48-hour hackathon to build a full-stack React application using an open-source recipes API. Could check any online recipe for ingredients that the user is allergic to.<a href="https://github.com/penelopecj/sei-project-2" target="_blank" rel="noreferrer" className="readme">Readme</a></p>
              </article>

              <article className="container left-panel">
                <h4 className="bold">15th November 2020</h4>
                <figure>
                  <a href="https://penelopecj.github.io/sei-project-1/" target="_blank" rel="noreferrer">
                    <img src={pacshark} alt="Pac-Shark" />
                  </a>
                </figure>
                <p>Built <a href="https://penelopecj.github.io/sei-project-1/" target="_blank" rel="noreferrer">PAC-SHARK</a>, my first project for GA&apos;s SEI. Ten days. Worked solo for one week to build a Pac-Man game using Vanilla JS, CSS, and HTML. Game included use of arrow keys, sound effects, score tracker, win and lose pages, and intelligent movement for the ghost enemies. <a href="https://github.com/penelopecj/sei-project-1" target="_blank" rel="noreferrer" className="readme">Readme</a></p>
              </article>

              <article className="container right-panel">
                <h4 className="bold">2nd November 2020</h4>
                <figure>
                  <img src={GeneralAssembly} alt="General Assembly" />
                </figure>
                <p>Enrolled on General Assembly&apos;s 12-week, full-time Software Engineering Immersive boot camp.</p>
              </article>

              <article className="container left-panel">
                <h4 className="bold">5th September 2020</h4>
                <figure>
                  <img src={GeneralAssembly} alt="General Assembly" />
                </figure>
                <p>Completed General Assembly&apos;s Front End Web Development Course. 10-week, part-time course taught over Zoom and Slack. Covered in-depth, front-end development in HTML5, CSS3, and JS. Learnt to use Firebase and Netlify.</p>
              </article>

              <article className="container right-panel">
                <h4 className="bold">31st August 2020</h4>
                <figure>
                  <a href="https://15zenith.co.uk/" target="_blank" rel="noreferrer">
                    <img src={zenith} alt="Zenith Close Residents Association" />
                  </a>
                </figure>
                <p>Built <a href="https://15zenith.co.uk/" target="_blank" rel="noreferrer">CLADDING SCANDAL</a>, an informational website to shed light on the scandal at Zenith Close. Worked for three months before and during my web development course to build a static site on Netlify using HTML, CSS, and JavaScript. This was my first website and required extensive online research on StackOverflow, W3Schools, and Codecademy in addition to the material I learned at GA. I created five pages, including interactive resident stories, a timeline of events, and a fully mobile-responsive design. <a href="https://github.com/penelopecj/15zenith" target="_blank" rel="noreferrer"className="readme">Readme</a></p>
              </article>

              <article className="container left-panel">
                <h4 className="bold">10th March 2020</h4>
                <figure>
                  <img src={codecademy} alt="Codecademy" />
                </figure>
                <p>Began working from home full time and joined Codecademy Pro Web Development track to learn the fundamentals of JavaScript and front-end web development.</p>
              </article>

              <article className="container right-panel">
                <h4 className="bold">10th January 2020</h4>
                <figure>
                  <img src={codecademy} alt="Codecademy" />
                </figure>
                <p>Began exploring coding as a career, starting with HTML, CSS, JavaScript, and Ruby on Codecademy.</p>
              </article>

              <article className="container left-panel">
                <h4 className="bold">1st May 2019</h4>
                <figure>
                  <img src={efdss} alt="Cecil Sharp House" />
                </figure>
                <p>Began additional part-time job working in Venue Sales and Events at Cecil Sharp House, England’s oldest folk music venue.</p>
              </article>

              <article className="container right-panel">
                <h4 className="bold">28th February 2019</h4>
                <figure>
                  <img src={aim} alt="Art in Motion" />
                </figure>
                <p>Founded Art in Motion to provide websites and digital marketing to increase the audience of emerging artists enabling them to produce new virtual work.</p>
              </article>

              <article className="container left-panel">
                <h4 className="bold">31st August 2018</h4>
                <figure>
                  <img src={roehampton} alt="University of Roehampton" />
                </figure>
                <p>Graduated with Merit from University of Roehampton, the number one dance research institute in the world, and was awarded a MA in Dance Anthropolgy.</p>
              </article>
              
              <article className="container right-panel">
                <h4 className="bold">19th April 2018</h4>
                <figure>
                  <img src={springs} alt="Springs Dance Company" />
                </figure>
                <p>Joined Springs Dance Company as Company Administrator to coordinate timetables, travel, meals, per diems, and accommodation for three nationally touring productions. In 2019, was promoted to Performance and Workshop Coordinator.</p>
              </article>

              <article className="container left-panel">
                <h4 className="bold">15th September 2017</h4>
                <figure>
                  <img src={roehampton} alt="University of Roehampton" />
                </figure>
                <p>Moved from Boston to London to enroll in a Masters programme.</p>
              </article>

              <article className="container right-panel">
                <h4 className="bold">13th April 2017</h4>
                <figure>
                  <img src={cruises} alt="Entertainment Cruises" />
                </figure>
                <p>Began working as wedding and events coordinator at Entertainment Cruises (now Hornblower Cruises) in Boston, USA.</p>
              </article>

              <article className="container left-panel">
                <h4 className="bold">19th May 2017</h4>
                <figure>
                  <img src={wagner} alt="Wagner College" />
                </figure>
                <p>Graduated Summa Cum Laude (1:1) from Wagner College, the top-ranked musical theatre university in New York, and was awarded BSc in Arts Management.</p>
              </article>

              <article className="container right-panel">
                <h4 className="bold">15th January 2015</h4>
                <figure>
                  <img src={sshrishti} alt="Sshrishti" />
                </figure>
                <p>Moved to New Delhi, India to study computer literacy in Muslim communities and Indian classical performing arts.</p>
              </article>

              <article className="container left-panel">
                <h4 className="bold">12th September 2013</h4>
                <figure>
                  <img src={wagner} alt="Wagner College" />
                </figure>
                <p>Moved from Boston to New York City and enrolled at Wagner College.</p>
              </article>

            </section>
          </section>
        </section>
      </main>
    </>
  )
}

export default About