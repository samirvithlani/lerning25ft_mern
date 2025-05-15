import React from 'react'
import { MyButton } from '../MyButton'

export const HotstarShows = () => {
  const playShow = ()=>{
    alert("paying show...")
  }
  return (
    <div>
        <h1>SHOWS</h1>
        <MyButton class= "btn btn-info" funName={playShow}></MyButton>
    </div>
  )
}
