import { col, em } from 'framer-motion/client'
import React, { useState } from 'react'

export const InputHandleDemo1 = () => {
    const [name, setname] = useState("")
    const [age, setage] = useState()
    const [email, setemail] = useState("")
    const [color, setcolor] = useState("black")
    const [isSubbmited, setisSubbmited] = useState(false)

    const nameHandler = (event)=>{
        console.log(event.target.value)
        setname(event.target.value)
    }
    const ageHandler =(event)=>{
        setage(event.target.value)
    }

    const displayData = () =>{
        //alert("Name - "+name + "\nemail ="+email + "\nage = "+age)
        setisSubbmited(true)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>INPUT HANDLING...</h1>
        <div>
            <label>NAME</label>
            <input type='text' placeholder='enter name' onChange={(event)=>{nameHandler(event)}}></input>
            {name}
        </div>
        <div>
            <label>AGE</label>
            <input type='text' placeholder='enter age' onChange={(event)=>{ageHandler(event)}}></input>
            {age}
        </div>
        <div>
            <label>Email</label>
            <input type='text' placeholder='enter email' onChange={(event)=>{setemail(event.target.value)}}></input>
            {email}
        </div>
        <div>
            <label>COLOR</label>
            <input type='color' onChange={(event)=>{setcolor(event.target.value)}}></input>
        </div>
        <div>
            <button onClick={()=>{displayData()}}>SUBMIT</button>
        </div>
        {
            isSubbmited == true && <div style={{color:color}}>
            <h1>OUTPUT:</h1>
            <h1>NAME = {name}</h1>
            <h2>AGE = {age}</h2>
            <h2>EMAIL ={email}</h2>
            <h2>color = {color}</h2>
        </div>
        }
        
    </div>
  )
}
