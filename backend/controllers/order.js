const Order = require('../models/Order')

const getOrders = async (req,res) => {
  const orders = await Order.find({ user: req.user._id }).populate('items.item')
  return res.status(200).send(orders)
}

const createOrder = async (req,res) => {
  const { items } = req.body
  if(!items || items.length === 0) return res.status(400).send({ msg: "Items can't be empty"})

  const order = new Order({ user: req.user._id, items })
  await order.save()
  console.log(order);
  return res.status(201).send(order)
}

module.exports = {
  getOrders,
  createOrder
}
