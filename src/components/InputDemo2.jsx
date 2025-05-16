import React, { useState } from 'react'

export const InputDemo2 = () => {
    const [recipeName, setrecipeName] = useState("")
    const [ingredients, setingredients] = useState("")
    const [isSubbmited, setisSubbmited] = useState(false)
    const [time, setTime] = useState(0)
    const displayData = ()=>{
        setisSubbmited(true)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>INPUT DEMO 2</h1>
        <div>
            <label>RECIPE NAME</label>
            <input type='text' onChange={(event)=>{setrecipeName(event.target.value)}}></input>
        </div>
        <div>
            <label>INGREDIENTS</label>
            <input type='text' onChange={(event)=>{setingredients(event.target.value)}}></input>
        </div>
        <div>
            <label>TIME</label>
            <input type='text' onChange={(event)=>{setTime(event.target.value)}}></input>
        </div>
        <div>
            <button onClick={()=>{displayData()}}>submit</button>
        </div>
        {
            isSubbmited && <div>
            <h1>OUTPUT</h1>
                <h1>NAME = {recipeName}</h1>
                <h1>INGREDIENTS</h1>
                <ul>
                    {
                        ingredients.split(",").map((ingredient)=>{
                            return <li>{ingredient}</li>
                        })
                    }
                </ul>
                <h1 style={{color:time>30 && "red"}}>{time}</h1>
            </div>
        }
        
    </div>
  )
}
