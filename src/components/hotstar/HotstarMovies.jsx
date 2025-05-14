import React from 'react'
import { Link } from 'react-router-dom'

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

  return (
    <div style={{textAlign:"center"}}>
        <h1>HOTSTART MOVIES</h1>
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
