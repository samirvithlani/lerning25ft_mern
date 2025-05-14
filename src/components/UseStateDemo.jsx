import React, { useState } from 'react'

export const UseStateDemo = () => {
  //var count =0; //state variable...
  //[count] ->variable..
  //setCount --> function -->count change ->setCount use chnage
  //useState(0) --0 -->intialValue
  //0 -> number
  const[count,setCount]=useState(0)
  const increseCount = ()=>{
    //count++
    setCount(count+1)
    console.log('aftter increse count ',count)
  }
  return (
    <div style={{textAlign:"center"}}>
        <h1>USE STATE DEMO</h1>
        <h1>count = {count}</h1>
        {/* <button onClick={increseCount}>increse</button>  */}
        <button onClick={()=>{increseCount()}}>increse</button>
    </div>
  )
}
