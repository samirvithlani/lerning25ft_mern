import React from 'react'

export const MapDemo2 = () => {

    var users = [
        {
            id:101,
            name:"Ram",
            age:22,
            status:true,
            gender:"male"
        },
        {
            id:102,
            name:"Seeta",
            age:23,
            status:true,
            gender:"female"
        },
        {
            id:103,
            name:"Shyam",
            age:24,
            status:false,
            gender:"male"
        },


    ]

  return (
    <div style={{textAlign:"center"}}>
        <h1>MAP DEMO 1</h1>
        <table className='table table-striped table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>GENDER</th>
                    <th>STATUS</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user)=>{
                        return <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.gender}</td>
                            <td>{user.status == true?"Active":"Not active"}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
