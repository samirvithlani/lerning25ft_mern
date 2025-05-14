import React, { useState } from 'react'

export const UseStateDemo2 = () => {
    const[loading,setLoading]=useState(true) //boolean
    const stopLoading = (mils)=>{

        setTimeout(()=>{
            setLoading(false)   
        },mils)
        
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>USE STATE DEMO 2</h1>
        {
            loading == true && <h1>Loading....</h1>
        }
        <button onClick={()=>{stopLoading(3000)}}>stop</button>
    </div>
  )
}
