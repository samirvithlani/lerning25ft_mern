import React from 'react'

export const MapDemo = () => {

    var users = [
        {
            id:101,
            name:"Ram",
            age:22,
            status:true,
            gender:"male"
        },
        {
            id:102,
            name:"Seeta",
            age:23,
            status:true,
            gender:"female"
        },
        {
            id:103,
            name:"Shyam",
            age:24,
            status:false,
            gender:"male"
        },


    ]

  return (
    <div style={{textAlign:"center"}}>
        <h1>MAP DEMO 1</h1>
        {
            users.map((user)=>{
                return <li>{user.name}-{user.age}</li>
            })
        }
    </div>
  )
}
