import React,{ createContext, useState } from 'react'
import axios from 'axios'
const url = 'http://localhost:1000/api'

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [cart,setCart] = useState(null)
  const [orders,setOrders] = useState(null)


  const getOrders = async () => {
    const get = await axios.get(`${url}/order`)
    if(get){
      setOrders(get.data)
    }
  }

  const createOrder = async () => {
    try{
      const get = await axios.post(`${url}/order`,{ items: cart.items })
      orders.push(get.data)
      setOrders([...orders])
      clearItems()
    }catch(err){
      console.log(err.response.data);
    }
  }

  const getCart = async () => {
    const get = await axios.get(`${url}/cart`)
    if(get){
      setCart(get.data)
    }
  }

  const clearItems = async () => {
    const get = await axios.delete(`${url}/cart/clear`)
    if(get){
      cart.items = get.data
      setCart({...cart})
    }
  }

  const addItem = async (item) => {
    try{
      const get = await axios.post(`${url}/cart`,{ item, quantity: 1 })
      cart.items.push(get.data)
      setCart({...cart})
    }catch(err){
      console.log(err.response.data)
    }
  }

  const removeItem = async (itemId) => {
    try{
      const get = await axios.delete(`${url}/cart/${itemId}`)
      const index = cart.items.findIndex(i => i.item._id === get.data.item)
      cart.items.splice(index,1)
      setCart({...cart})
    }catch(err){
      console.log(err.response.data);
    }
  }

  const increaseQty = (id) => {
    const item = cart.items.find(i => i._id === id)
    item.quantity += 1
    setCart({...cart})
  }

  const decreaseQty = (id) => {
    const item = cart.items.find(i => i._id === id)
    if(item.quantity > 1){
      item.quantity -= 1
      setCart({...cart})
    }
  }

  return(
    <CartContext.Provider value={{
      cart,
      getCart,
      addItem,
      removeItem,
      clearItems,
      increaseQty,
      decreaseQty,
      orders,
      getOrders,
      createOrder
    }}>
      { children }
    </CartContext.Provider>
  )
}
export default CartContextProvider
