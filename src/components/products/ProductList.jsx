import React, { useContext } from 'react'
import { ProductContext } from './ProductContext'
import { ProductSubList } from './ProductSubList'

export const ProductList = () => {
    const {products} = useContext(ProductContext)
  return (
    <div>
        <h1>ProductList</h1>
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
        <ProductSubList></ProductSubList>
    </div>
  )
}

