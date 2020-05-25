import React,{ createContext, useState } from 'react'
import axios from 'axios'
const url = 'http://localhost:1000/api'


export const ProductContext = createContext()

const ProductContextProvider = ({ children }) => {
   const [products,setProducts] = useState(null)

   const getProducts = async ({ page, items }) => {
     const get = await axios.get(`${url}/product?page=${page}&items=${items}`)
     if(get){
       setProducts(get.data)
     }
   }

  return(
    <ProductContext.Provider value={{
      products, getProducts
    }}>
      { children }
    </ProductContext.Provider>
  )
}
export default ProductContextProvider
