import React from 'react'
import { useParams } from 'react-router-dom'

export const PlayContent = () => {

    const id = useParams().id; //.id //.name
    //{id:"urldata"}

  return (
    <div>
        <h1>PLAYING... {id}</h1>
    </div>
  )
}
