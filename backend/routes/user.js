const router = require('express').Router()
const {
  login,
  signup,
  getUsers,
  getUserById,
  getProfile,
  getDelete
} = require('../controllers/user')
const userAuth = require('../middlewares/userAuth')

router.get('/',getUsers)
router.get('/profile',userAuth,getProfile)
router.get('/:id',getUserById)
router.post('/login',login)
router.post('/signup',signup)
router.delete('/:id',userAuth,getDelete)

module.exports = router
