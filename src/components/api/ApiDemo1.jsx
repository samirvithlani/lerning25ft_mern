import axios from 'axios'
import React, { useState } from 'react'
import { Loader } from '../Loader'



export const ApiDemo1 = () => {
    //axios
    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const getUserData = async()=>{

        setisLoading(true)
        const res = await axios.get("https://node5.onrender.com/user/user")
        //res --> axios object..
        console.log("axios object..",res)
        console.log("api response",res.data)
        console.log(res.data.message)
        console.log(res.data.data)
        setmessage(res.data.message)
        setusers(res.data.data)
        setisLoading(false)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO 1</h1>
        {
            isLoading && <Loader/>
        }
        <button onClick={()=>{getUserData()}}>GET</button>
        {message}
       <table className='table table-dark'>
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>EMAIL</th>
                <th>STATUS</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((user)=>{
                    return<tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.email}</td>
                        <td>{user.isActive ? "Active" :"NOt Active"}</td>
                    </tr>
                })
            }
        </tbody>
       </table>
    </div>
  )
}
