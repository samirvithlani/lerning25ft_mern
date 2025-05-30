import React, { useContext } from 'react'
import { ProductContext } from './ProductContext'
import { ProductSubList } from './ProductSubList'

export const ProductList = () => {
    const {products,deleteUser} = useContext(ProductContext)
  return (
    <div>
        <h1>ProductList</h1>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((prod)=>{
                        return <tr>
                            <td>{prod.id}</td>
                            <td>{prod.name}</td>
                            <td>{prod.price}</td>
                            <td>
                                <button onClick={()=>{deleteUser(prod.id)}} className='btn btn-danger'>DELETE</button>
                                </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        <ProductSubList></ProductSubList>
    </div>
  )
}

