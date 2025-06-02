import axios from 'axios'
import React, { useEffect } from 'react'
import { get } from 'react-hook-form'

export const ApiDemo4 = () => {
    const getApi  =async()=>{
        const res = await axios.get("https://node5.onrender.com/user/filter2",{
            params:{
                name:"ajay"
            }
        })
        console.log(res)
    }
    useEffect(() => {
      
        getApi()
    
      
    }, [])
    
  return (
    <div>
        <h1>ApiDemo4</h1>
            
    </div>
  )
}
