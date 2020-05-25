import React from 'react'
import { Link } from 'react-router-dom'
const url = 'http://localhost:1000/'

const ProductItem = ({ _id, image, name, price, quality, items, addItem }) => {
  const nameStr = (name) => name.length > 48 ? name.substr(0,48)+'...' : name

  return(
    <div className="products-item col-sm-6 col-xl-4 my-3 px-3">
      <div className="item">
        <img src={url+image} className="item-img" alt="img-title" />
        <div className="item-body border">
          <h4 className="name"><Link className="text-dark" to={`/products/${_id}`}>{nameStr(name)}</Link></h4>
          <small className="quality text-muted">Quality: {quality}</small>
          <div className="footer d-flex justify-content-between align-items-center">
            <span className="price">${price}</span>
            <span className="add-cart">
              {!items[_id] && <i onClick={e => addItem(_id)} className="fa fa-cart-plus"></i>}
              {items[_id] && <i className="fa fa-check-circle text-green"></i>}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductItem
