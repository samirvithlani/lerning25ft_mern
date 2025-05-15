import React from 'react'
import { Link } from 'react-router-dom'
import { MyButton } from '../MyButton'

export const HotstarMovies = () => {

  var movies = [
    {
      id:1003,
      name:"mufasa"
    },
    {
      id:1004,
      name:"sindoor"
    }
  ]

  const playMovie = ()=>{
    alert("playing movie...")
  }

  return (
    <div style={{textAlign:"center"}}>
        <h1>HOTSTART MOVIES</h1>
        <MyButton name ={"play"} class = "btn btn-warning" funName={playMovie}></MyButton>

        <ul>
          <li>
            <Link to="/playcontent/1001">Avatar</Link>
          </li>
          <li>
            <Link to="/playcontent/1002">Titanic</Link>
          </li>
          {
            movies.map((movie)=>{
              return <li>
                <Link to ={`/playcontent/${movie.id}`}>{movie.name}</Link>
              </li>
            })
          }
        </ul>
    </div>
  )
}
