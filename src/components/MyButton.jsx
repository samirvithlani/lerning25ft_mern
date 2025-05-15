import React from 'react'

export const MyButton = (props) => {
  return (
    <button className={props.class || "btn btn-primary"} onClick={()=>{props.funName()}}>{props.name || "test"}</button>
  )
}
