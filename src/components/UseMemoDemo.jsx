import React, { useMemo, useState } from 'react'

export const UseMemoDemo = () => {

    const [flag, setflag] = useState(false)
    const [flag2, setflag2] = useState(false)

    //var number = Math.floor(Math.random()*1000) //useMemo
    var number  = useMemo(()=>{
        return Math.floor(Math.random()*10000)
    },[flag2])
    //depeencey array
    
    //array --> push,remove,
    
  return (
    <div style={{textAlign:"center"}}>
        <h1>USE MEMO </h1>
        {number}
        <button onClick={()=>{setflag(flag == true ? false :true)}}>CHANGE FLAG</button>
        {flag == true ? "TRUE" : "FALSE"}
        <button onClick={()=>{setflag2(flag2 == true ? false :true)}}>CHANGE FLAG 2</button>
        {flag2 == true ? "TRUE" : "FALSE"}
    </div>
  )
}
