import React, { useState } from 'react'

export const UseMemoDemo2 = () => {
    const [fruits, setfruits] = useState(["apple","banana","watermelon","litchi","mango","kiwi"])
    const [query, setquery] = useState("")
    const searchFruit =(event)=>{
        console.log(event.target.value) //w
        //a
        var filtFruits = fruits.filter((f)=>{
            return f.includes(event.target.value)
        })
        //["",""]
        console.log(filtFruits)
        setfruits(filtFruits)

    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>USE MEMO DEMO 2</h1>
        
        <input type='text' placeholder='search' onChange={(event)=>{searchFruit(event)}} ></input>
        {
            fruits.map((f)=>{
                return <li>{f}</li>
            })
        }
    </div>
  )
}
