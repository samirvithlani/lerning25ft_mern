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
import { PlayContent } from './components/hotstar/PlayContent.jsx'
import { UseStateDemo } from './components/UseStateDemo.jsx'
import { UseStateDemo2 } from './components/UseStateDemo2.jsx'
import { UseStateDemo3 } from './components/UseStateDemo3.jsx'
import { ImageComponent } from './components/ImageComponent.jsx'
import { UseStateDemo4 } from './components/UseStateDemo4.jsx'
import { IPLHome } from './components/ipl/IPLHome.jsx'
import { InputHandleDemo1 } from './components/InputHandleDemo1.jsx'
import { InputDemo2 } from './components/InputDemo2.jsx'
import { FormDemo1 } from './components/form/FormDemo1.jsx'

function App() {

  var title = "React" //parent component --> app.js
  
  return (
   <div>
    {/* //child component */}
    <Navbar title ={title} ></Navbar> 
      <Routes>
        <Route path='/' element = {<HotstarHome/>}></Route>
        <Route path='/movies' element = {<HotstarMovies/>}></Route>
        <Route path='/shows' element = {<HotstarShows/>}></Route>
        <Route path='/playcontent/:id' element={<PlayContent/>}></Route>
        <Route path='/usestatedemo' element = {<UseStateDemo/>}></Route>
        <Route path='/usestatedemo2' element = {<UseStateDemo2/>}></Route>
        <Route path='/usestatedemo3' element = {<UseStateDemo3/>}></Route>
        <Route path='/usestatedemo4' element = {<UseStateDemo4/>}></Route>
        <Route path='/ipl' element = {<IPLHome/>}></Route>
        <Route path='/inputhandling1' element = {<InputHandleDemo1/>}></Route>
        <Route path='/inputhandling2' element = {<InputDemo2/>}></Route>
        <Route path='/formdemo1' element = {<FormDemo1/>}></Route>
        {/* <Route path='/*' element={<h1>404</h1>}></Route> */}
        <Route path='/*' element = {<Error404/>}></Route>
      </Routes>
   </div>
  )
}

export default App
