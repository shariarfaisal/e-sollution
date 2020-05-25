import React,{ Fragment, useState } from 'react'
import timeConverter from '../../utils/timeConverter'
import OrderItemModal from './OrderItemModal'


const OrderItem = ({ _id, createdAt, items, status }) => {
  const [show,setShow] = useState(false)
  const { date, result } = timeConverter(createdAt)
  return(
    <Fragment>
      <div onClick={e => setShow(true)} className="list-group-item list-group-item-action my-1 pointer rounded d-flex justify-content-between">
        <p  className="mb-0">{`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`} <small className="badge badge-info">{status}</small> </p>
        <small className="text-muted">{result}</small>
      </div>
      <OrderItemModal
        show={show}
        setShow={setShow}
        items={items}
        createdAt={createdAt}
        status={status}
      />
    </Fragment>
  )
}

export default OrderItem
