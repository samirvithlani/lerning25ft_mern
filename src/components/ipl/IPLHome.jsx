import React, { useState } from 'react'
import { IPLDetail } from './IPLDetail'

export const IPLHome = () => {
    var sponcer = "TATA"

    var org ={
        name:"BCCI",
        year:2025,
        host:"JAY SHAH"
    }
    const [teams, setteams] = useState(["CSK","MI","RCB","PKB","DL","GT"])
  return (
    <div style={{textAlign:"center"}}>
        <h1 style={{color:"blue"}}>IPL</h1>
        {/* child component */}
        <IPLDetail sponcer = {sponcer} org={org} teams={teams}></IPLDetail>
    </div>
  )
}
