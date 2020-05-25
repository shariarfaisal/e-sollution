const Cart = require('../models/Cart')
const Product = require('../models/Product')
const mongoose = require('mongoose')


const getCart = async (req,res) => {
  const get = await Cart.findOne({ user: req.user._id}).populate('items.item')
  if(!get) return res.status(404).send({msg: 'Not found!'})
  return res.status(200).send(get)
}

const addItem = async (req,res) => {
  const { item, quantity } = req.body

  /* Checking error existence ... */
  const error = {}
  if(!item) error.item = "Item required!"
  if(!mongoose.Types.ObjectId.isValid(item)) error.item = "Item ID isn't valid!"
  if(!quantity) error.quantity = "Quantity required!"
  if(Object.keys(error).length > 0) return res.status(400).send(error)

  const cart = await Cart.findOne({ user: req.user._id }) // Get cart by user ID ...
  if(!cart) return res.status(404).send({msg: 'Not found!'})

  const itemExists = cart.items.find(i => i.item === item)
  if(itemExists) return res.status(400).send({msg: 'Item exists!'})

  const index = cart.items.push({ item, quantity }) // Insert new item into cart ...
  await cart.save() // Save cart ...

  const getItem = await Product.findById(item)
  return res.status(201).send({...cart.items[index -1]._doc,item: getItem})
}

const removeItem = async (req,res) => {
  const cart = await Cart.findOne({ user: req.user._id }) // Get cart by user ID ...
  if(!cart) return res.status(404).send({msg: 'Not found!'})

  const index = cart.items.findIndex(i => i.item.toString() === req.params.itemId)
  if(index === -1) return res.status(404).send({msg: 'Not found!'})
  const result = cart.items[index]
  cart.items.splice(index,1)

  await cart.save()
  return res.status(200).send(result)
}

const clearItems = async (req,res) => {
  const cart = await Cart.findOne({ user: req.user._id }) // Get cart by user ID ...
  if(!cart) return res.status(404).send({msg: 'Not found!'})

  cart.items = []
  await cart.save()
  return res.status(200).send(cart.items)
}

module.exports = {
  getCart,
  addItem,
  removeItem,
  clearItems
}
