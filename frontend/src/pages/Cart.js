import React from 'react'
import Layout from '../components/Layout'
import Orders from '../components/cart/Orders'


const Cart = (props) => {
  return(
    <Layout>
      <div className="cart row justify-content-center w-100" style={{minHeight: '80vh'}}>
        <Orders />
      </div>
    </Layout>
  )
}
export default Cart
