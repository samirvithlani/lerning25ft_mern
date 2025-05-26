import axios from 'axios'
import React from 'react'

export const ApiDemo2 = () => {

    //https://node5.onrender.com/user/user ; post

    const addUser = async()=>{

        const user = {
            name:"ajay",
            age:24,
            email:"ajay@gmail.com",
            isActive:true
        }

        const res = await axios.post("https://node5.onrender.com/user/user",user)
        console.log(res) //axios object
        console.log(res.status)
        console.log(res.data)//api response...
        if(res.status ==201){
            alert("user added successfully!!")
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO 2</h1>
        <button onClick={()=>{addUser()}}>add user</button>
    </div>
  )
}
