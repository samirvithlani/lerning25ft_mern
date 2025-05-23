import React, { useMemo, useState } from 'react'

export const UseMemoDemo2 = () => {
    //const [fruits, setfruits] = useState(["apple","banana","watermelon","litchi","mango","kiwi"])
    const fruits = useMemo(()=>["apple","banana","watermelon","litchi","mango","kiwi"],[])
    const [query, setquery] = useState("") //cmponent...
    
    const searchFruit =(event)=>{
        
        setquery(event.target.value) //w
    }

    const filterFruits = fruits.filter((f)=>{
        return f.includes(query) //""
    })
  return (
    <div style={{textAlign:"center"}}>
        <h1>USE MEMO DEMO 2</h1>
        
        <input type='text' placeholder='search' onChange={(event)=>{searchFruit(event)}} ></input>
        {
            filterFruits.map((f)=>{
                return <li>{f}</li>
            })
        }
    </div>
  )
}
