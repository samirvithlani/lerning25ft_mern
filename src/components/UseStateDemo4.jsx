import React, { useState } from 'react'

export const UseStateDemo4 = () => {
    const [user,setUser] =useState({id:101,name:"ram",age:24})
    //user -->varible
    //setUser -->
    const leap =() =>{
        //setUser({id:101,name:"ram",age:25})
        setUser({...user,age:user.age+1,child:1})
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>USE STATE DEMO 4</h1>
        <h1>Name = {user.name}</h1>
        <h2>Id = {user.id}</h2>
        <h3>age = {user.age}</h3>
        <h4>child = {user.child}</h4>
        <button onClick={()=>{leap()}}>1 yaer leap</button>
    </div>
  )
}
