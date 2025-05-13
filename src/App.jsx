import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import {Header} from "./components/Header.jsx"
import { Content } from './components/Content.jsx'
import { Footer } from './components/Footer.jsx'
import { MapDemo } from './components/MapDemo.jsx'
import { MapDemo2 } from './components/MapDemo2.jsx'
import { MapDemo3 } from './components/MaoDemo3.jsx'
import { HotstarMovies } from './components/hotstar/HotstarMovies.jsx'
import { Route, Routes } from 'react-router-dom'
import { HotstarShows } from './components/hotstar/HotstarShows.jsx'
import { Navbar } from './components/Navbar.jsx'
import { HotstarHome } from './components/hotstar/HotstarHome.jsx'
import { Error404 } from './components/Error404.jsx'

function App() {
  


  return (
   <div>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' element = {<HotstarHome/>}></Route>
        <Route path='/movies' element = {<HotstarMovies/>}></Route>
        <Route path='/shows' element = {<HotstarShows/>}></Route>
        {/* <Route path='/*' element={<h1>404</h1>}></Route> */}
        <Route path='/*' element = {<Error404/>}></Route>
      </Routes>
   </div>
  )
}

export default App
