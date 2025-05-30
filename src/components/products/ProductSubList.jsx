import React, { useContext } from 'react'
import { ProductContext } from './ProductContext'

export const ProductSubList = () => {
    const {products,title} = useContext(ProductContext)
  return (
    <div>
        <h1>ProductSubList [most child component of product] {title}</h1>

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
                    products.map((prod)=>{
                        return <tr>
                            <td>{prod.id}</td>
                            <td>{prod.name}</td>
                            <td>{prod.price}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
