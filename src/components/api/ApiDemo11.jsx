import React from 'react'
import { useFetchApi } from '../../hooks/FetchApiHook'

export const ApiDemo11 = () => {

    const {data,loding} =useFetchApi("https://node5.onrender.com/product/getall")
    console.log(data)
    console.log(loding)

  return (
    <div>
        <h1>API DEMO 11</h1>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((product)=>{
                        return <tr>
                            <td>{product._id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
