import React,{ useContext, useEffect } from 'react'
import CartItem from './CartItem'
import { CartContext } from '../../contexts/CartContext'


export const grandTotal = (items) => {
  return items.reduce((a,b) => {
    a += (b.quantity * b.item.price)
    return a
  },0)
}


const Showcase = (props) => {
  const { cart, getCart, removeItem, clearItems, increaseQty, decreaseQty, orders, getOrders, createOrder } = useContext(CartContext)

  useEffect(() => {
    getCart()
    getOrders()
  },[])

  return(
    <div className="showcase col-md-4">
      <div className="showcase-wrapper">
        <div className="header d-flex justify-content-between align-items-center p-3 border-bottom">
          <h2 className="title">Your Cart</h2>
          <div className="clear">
            {cart && cart.items.length > 0 && <span onClick={ e=> clearItems()} className="pointer red-h"><i className="fa fa-trash"></i> clear</span>}
          </div>
        </div>
        <div className="cart-items px-3">
          {cart && cart.items.map((item,i) => <CartItem
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
            removeItem={removeItem}
            key={i}
            {...item}
          />)}
        </div>
        {cart && <div className="footer d-flex justify-content-between align-items-center p-3 border-top">
        <button disabled={cart.items.length === 0 ? true : false} onClick={e => createOrder()} type="button" className="btn btn-info px-3">Place order</button>
          <span>Grand total <strong>${grandTotal(cart.items)}</strong></span>
        </div>}
      </div>
    </div>
  )
}
export default Showcase
