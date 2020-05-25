const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const User = require('../routes/user')
const Product = require('../routes/product')
const Cart = require('../routes/cart')
const Order = require('../routes/order')


module.exports = (app) => {
  app.use(cors())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(morgan('dev'))

  app.use(express.static('uploads'))
  app.use('/api/user/',User)
  app.use('/api/product',Product)
  app.use('/api/cart',Cart)
  app.use('/api/order',Order)
}
