import React,{ useContext, useEffect } from 'react'
import { CartContext } from '../../contexts/CartContext'
import OrderItem from './OrderItem'


const Orders = (props) => {
  const { orders, getOrders } = useContext(CartContext)

  useEffect(() =>{
    getOrders()
  },[])

  return(
    <div className="col-md-8 p-4 mt-5 bg-light rounded border light-shadow">
      <div className="list-group">
        {orders && orders.map((order,i) => <OrderItem key={i} {...order} />)}
      </div>
    </div>
  )
}
export default Orders
