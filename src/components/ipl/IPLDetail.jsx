import React from 'react'

export const IPLDetail = (props) => {
    //{sponcer:"",,org:{},teams:[]}
    console.log("IPL DETAIL PROPS",props)
  return (
    <div>
        <h1>IPL DETAIL</h1>
        <h1>Sponcer = {props.sponcer}</h1>
        <h1>{props.org.name}</h1>
        <h1>{props.org.year}</h1>
        <h1>{props.org.host}</h1>
        <ul>
            {
                props.teams.map((team)=>{
                    return <li>{team}</li>
                })
            }
        </ul>

    </div>
  )
}
