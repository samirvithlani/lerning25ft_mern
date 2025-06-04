import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { depositAction } from '../redux/BankSlice'

export const BankComponent = () => {

    const [depositAmount, setdepositAmount] = useState(0)
    const dispatch = useDispatch()

    const depositHandler = ()=>{
        console.log(depositAmount)
        //dispatch(depositAction(depositAmount))
        dispatch(depositAction(parseInt(depositAmount)))
    }

  return (
    <div style={{textAlign:"center", marginTop:"20px"}}>
        <h1>BankComponent</h1>
        <div>
            <label>DEPOSIT</label>
            <input type='text' onChange={(event)=>{setdepositAmount(event.target.value)}}></input>
            <button onClick={()=>{depositHandler()}} className='btn btn-primary'>DEPOSIT</button>
        </div>
    </div>
  )
}
