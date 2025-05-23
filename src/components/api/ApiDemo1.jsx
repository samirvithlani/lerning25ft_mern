import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo1 = () => {
    //axios
    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])
    const getUserData = async()=>{

        const res = await axios.get("https://node5.onrender.com/user/user")
        //res --> axios object..
        console.log("axios object..",res)
        console.log("api response",res.data)
        console.log(res.data.message)
        console.log(res.data.data)
        setmessage(res.data.message)
        setusers(res.data.data)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO 1</h1>
        <button onClick={()=>{getUserData()}}>GET</button>
        {message}
        {
            users.map((user)=>{
                return <ul>
                    <li>{user.name} - {user.age}</li>
                </ul>
            })
        }
    </div>
  )
}
