const router = require('express').Router()
const {
  getOrders,
  createOrder
} = require('../controllers/order')
const userAuth = require('../middlewares/userAuth')

router.get('/',userAuth,getOrders)
router.post('/',userAuth,createOrder)

module.exports = router
