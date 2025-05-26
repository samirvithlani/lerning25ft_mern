import React, { useEffect, useState } from 'react'

export const UseEffectDemo = () => {

    const [count, setcount] = useState(0)

    useEffect(()=>{
        console.log("use effect called....")
    },[count])

    //()=>{} callback function
    //[] -->depedancy array
    //[count] if any changes done in count var useEffect call again...

  return (
    <div>
    <h1>USE EFFECT DEMO</h1>
    <button onClick={()=>{setcount(count+1)}}>BUTTON</button>
    <h1>COUNT = {count}</h1>
    </div>
  )
}
