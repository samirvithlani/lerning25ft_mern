import { button } from 'framer-motion/client'
import React, { useState } from 'react'

export const UseStateDemo4 = () => {
    const [user,setUser] =useState({id:101,name:"ram",age:24})
    const [buttonCLicked, setbuttonCLicked] = useState(false)
    //user -->varible
    //setUser -->
    const leap =(year) =>{
        //setUser({id:101,name:"ram",age:25})
        setUser({...user,age:user.age+year,child:1})
        setbuttonCLicked(true)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>USE STATE DEMO 4</h1>
        <h1>Name = {user.name}</h1>
        <h2>Id = {user.id}</h2>
        <h3>age = {user.age}</h3>
        {
            buttonCLicked == true &&<h4>child = {user.child}</h4>
        }
        
        <button onClick={()=>{leap(2)}}>1 yaer leap</button>
    </div>
  )
}
