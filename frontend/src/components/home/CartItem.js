import React from 'react'
const url = 'http://localhost:1000/'

export const nameStr = (name) => {
  return name.length > 20 ? name.substr(0,20)+'...' : name
}

const CartItem = ({ _id, item:{ _id: itemId, name, image, price }, quantity, removeItem,increaseQty, decreaseQty }) => {
  return(
    <div className="cart-items-item d-flex justify-content-between align-items-center">
      <img className="image" src={url+image} alt="hello world" />
      <small className="name text-muted mx-2">{ nameStr(name) }</small>
      <div className="d-flex justify-content-between align-items-center">
        <ul className="quantity px-2">
          <li><i onClick={e => increaseQty(_id)} className="fa fa-plus text-muted dark-h"></i></li>
          <li className="num">{quantity}</li>
          <li><i onClick={e => decreaseQty(_id)} className="fa fa-minus text-muted dark-h"></i></li>
        </ul>
        <input type="hidden" name="" value="" />
        <small className="price px-2">${price}</small>
        <small className="cancel px-2"><i onClick={e => removeItem(itemId)} className="fa fa-times text-danger"></i></small>
      </div>
    </div>
  )
}
export default CartItem
