const router = require('express').Router()
const {
  getCart,
  addItem,
  removeItem,
  clearItems
} = require('../controllers/cart')
const userAuth = require('../middlewares/userAuth')

router.get('/',userAuth,getCart)
router.post('/',userAuth,addItem)
router.delete('/clear',userAuth,clearItems)
router.delete('/:itemId',userAuth,removeItem)

module.exports = router
