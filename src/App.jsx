import React from 'react'
import Topbar from './components/Topbar/Topbar'
import Intro from './components/Intro/Intro'
import Portfolio from './components/Portfolio/Portfolio'
import Testmonials from './components/TestMonials/Testmonials'
import Works from './components/Works/Works'
import Contact from './components/Contact/Contact'

import "./app.scss"

const App = () => {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testmonials/>
        <Contact/> 
      </div>
    </div>
  );
}

export default App
