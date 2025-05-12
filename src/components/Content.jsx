import React from 'react'

export const Content = () => {

    var year =2025
    var name = "Ram"
    var isActive = true
    var user = {
      name:"Shyam",
      age:30,
      salary: 50000,
    }
  return (
    <div>
        <h1>CONTENT</h1>
        <h1>HELLO ALL....</h1>
      <h1>NAME - {name}</h1>
      {year}
      <h1>YEAR - {year}</h1>
      <h2>active ?? {isActive == true ? "Active" :"Not Active"}</h2>
      <h1>USER NAME = {user.name}</h1>
      <h2>user age = {user.age}</h2>
      <h3>user salary = {user.salary}</h3>
      <h1>ALL TAG MUST HAVE CLOSING TAG</h1>
      <h2>AT A TIME WE CAN RETURN ONLY 1 TAG</h2>
      <h2>whatever written in return statment will only display to browser</h2>
    </div>
  )
}
