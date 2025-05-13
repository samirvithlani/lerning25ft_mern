import React from 'react'

export const MapDemo3 = () => {

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
        <h1>MAP DEMO 3</h1>
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
                        return <tr style={{backgroundColor:user.gender=="female" && "pink"}}>
                            <td>{user.id}</td>
                            <td style={{color:user.name.length>3 ? "red":"white"}}>{user.name}</td>
                            {/* <td style={{backgroundColor:user.age>23 ? "blue":"white"}}>{user.age}</td> */}
                            <td style={{backgroundColor:user.age>23 && "blue"}}>{user.age}</td>
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
