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

function App() {
  


  return (
   <div>
      <Header></Header>
      {/* <MapDemo></MapDemo> */}
      {/* <MapDemo2></MapDemo2> */}
      <MapDemo3></MapDemo3>
      {/* <Content></Content>
      <Footer></Footer>   */}
   </div>
  )
}

export default App
