import React, { useState } from 'react'

export const UseStateDemo3 = () => {
    //var users = ["ram","shyam","amit","sumit"]
    const [users, setusers] = useState(["ram","shyam","amit","sumit"])

    const addUser=()=>{
        //spread operators..
        //random name...
        var text = "abcdefghijklmnopqrstuvwxyz"
        var name ="";
        for(let i=0;i<5;i++){
            var randomIndex = Math.floor(Math.random()*text.length)
            name = name + text[randomIndex]; //1=b 5=5 
        }

        //var x =[...users,"abc"]
        var x =[...users,name] //spread operator...
        setusers(x)
        //x = ["ram","....","abc"]
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>USESTATE DEMO 3</h1>
        <button onClick={()=>{addUser()}} className='btn btn-primary'>add</button>
        <ul>
            {
                users.map((user)=>{
                    return <li>{user}</li>
                })
            }
        </ul>
    </div>
  )
}
