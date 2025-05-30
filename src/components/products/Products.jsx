import React, { useState } from 'react'
import { ProductList } from './ProductList'
import { ProductContext } from './ProductContext'
import { Footer } from '../Footer'

export const Products = () => {
    const [products, setproducts] = useState([
        {
            id:1,
            name:"iphone16",
            price:1200
        },
        {
            id:2,
            name:"ipad",
            price:900
        },
        {
            id:3,
            name:"charger",
            price:200
        }
    ])
    var title ="CONTEXT"

    const deleteUser = (id)=>{
        //filter...
        var x = products.filter((prod)=>prod.id !== id)
        setproducts(x)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>PRODUCT COMPONENT[parent component]</h1>
        <ProductContext.Provider value={{products,title,deleteUser}}>
            <ProductList></ProductList>
        </ProductContext.Provider>
    </div>
  )
}
