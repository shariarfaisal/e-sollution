const router = require('express').Router()
const {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct
} = require('../controllers/product')
const userAuth = require('../middlewares/userAuth')
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req,file,cb) {
    cb(null,'uploads/')
  },
  filename: function(req,file,cb){
    cb(null,`${Date.now()}_${file.originalname}`);
  }
})

const fileFilter = (req,file,cb) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg' ){
    cb(null,true);
  }else{
    req.fileError = "Only jpeg, jpg and png file sufforted!"
    cb(null,false);
  }
}


const upload = multer({storage: storage,limits: {
    fileSize: 1024 * 1024 * 10
  },
  fileFilter: fileFilter
})


router.get('/',userAuth,getProducts)
router.get('/:id',userAuth,getProduct)
router.post('/',upload.single('image'),createProduct)
router.delete('/:id',deleteProduct)

module.exports = router
