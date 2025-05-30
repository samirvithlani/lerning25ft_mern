import React from 'react'
import { useFetchApi } from '../../hooks/FetchApiHook'
import { ProductContext } from './ProductContext'
import { ProductDataList } from './ProductDataList'

export const ProductData = () => {
    const{data,loding}=useFetchApi("https://node5.onrender.com/product/getall")
    
  return (
    <div style={{textAlign:"center"}}>
        <h1>PRODUCT DATA</h1>
        <ProductContext.Provider value={{data}}>
            <ProductDataList></ProductDataList>
        </ProductContext.Provider>
    </div>
  )
}
