import React,{useState} from 'react'
import Topbar from './components/Topbar/Topbar'
import Menu from './components/Menu/Menu'
import Intro from './components/Intro/Intro'
import Portfolio from './components/Portfolio/Portfolio'
import Testmonials from './components/TestMonials/Testmonials'
import Works from './components/Works/Works'
import Contact from './components/Contact/Contact'

import "./app.scss"

const App = () => {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
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
