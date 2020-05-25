import React from 'react'
import { Modal } from 'react-bootstrap'
import { nameStr } from '../home/CartItem'
import { grandTotal } from '../home/Showcase'
import  timeConverter from '../../utils/timeConverter'
const url = 'http://localhost:1000/'


const OrderItemModal = ({ show, setShow, items, createdAt, status }) => {
  return(
    <Modal
        show={show}
        onHide={e => setShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
      <Modal.Body>
        <div className="order-item-modal text-center" style={{fontSize: '1.6rem'}}>
          <div className="d-flex justify-content-end mb-4">
            <small className="badge badge-info mx-3">{status}</small>
            <small className="text-muted">{timeConverter(createdAt).result}</small>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {items.map(({ item, quantity },i) => {
                return(
                  <tr key={i}>
                    <th scope="row">{i+1}</th>
                    <td><img src={url+item.image} width="80px" alt={item.name} /></td>
                    <td><small>{nameStr(item.name)}</small></td>
                    <td><small>{item.price}</small></td>
                    <td><small>{quantity}</small></td>
                    <td><small className="font-5">{quantity * item.price}</small></td>
                  </tr>
                )
              })}
              <tr>
                <td className="text-right" colSpan="6">total = <strong className="mr-5 pr-5">{grandTotal(items)}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-5 mb-3 text-right">
          <button onClick={e => setShow(false)} type="button" className="btn btn-lg btn-light border px-4 mr-3 font-6">close</button>
        </div>
      </Modal.Body>
    </Modal>
  )
}
export default OrderItemModal
