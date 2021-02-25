import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/skills" component={Skills}/>
        <Route exact path="/about" component={About}/>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
