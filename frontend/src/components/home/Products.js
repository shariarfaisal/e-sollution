import React,{ useEffect, useContext, useState } from 'react'
import ProductItem from './ProductItem'
import { ProductContext } from '../../contexts/ProductContext'
import { CartContext } from '../../contexts/CartContext'
import Pagination from './Pagination'
import { useHistory } from 'react-router-dom'

const arrToObj = (arr) => {
  return arr.reduce((a,b) => {
    a[b.item._id] = b
    return a
  },{})
}

const Products = (props) => {
  const getPage = new URL(document.URL).searchParams.get('page')?.match(/^[0-9]+$/)
  const { products, getProducts } = useContext(ProductContext)
  const { cart, getCart, addItem } = useContext(CartContext)
  const [page,setPage] = useState(getPage? Number(getPage[0]) : 1)
  const items = 6

  useEffect(() =>{
    getProducts({ page, items })
  },[ page ])

  useEffect(() => {
    getCart()
  },[])

  return(
    <div className="products col-md-8 p-2">
      <div className="row m-0 w-100">
        {products && products.length > 0 &&  cart &&  products.map((product) => <ProductItem addItem={addItem} items={arrToObj(cart.items)}  key={product._id} {...product} /> )}
        {products && products.length === 0 && <div className="col-12 d-flex justify-content-center align-items-center" style={{minHeight: '70vh'}}>
          <h1 className="text-muted text-center">Not Found</h1>
        </div>}
      </div>
      <Pagination page={page} setPage={setPage} notFound={products && products.length === 0 ? true : false}/>
    </div>
  )
}
export default Products
