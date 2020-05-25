const Product = require('../models/Product')
const { createValidator } = require('../validators/product')

/* Get Products */
const getProducts = async (req,res) => {
  console.log(req.query);
  let page = req.query.page ? req.query.page : 0
  let limit = req.query.items ? req.query.items : 0
  const products = await Product.find()
                                .skip((Number(page)-1) * Number(limit))
                                .limit(Number(limit))
  return res.status(200).send(products)
}


/* Get Product By ID */
const getProduct = async (req,res) => {
  const product = await Product.findById(req.params.id)
  if(!product) return res.status(404).send({ msg: 'Not found!'})
  return res.status(200).send(product)
}


/* Create new Product */
const createProduct = async (req,res) => {
  const { error, isValid } = createValidator({...req.body,file: req.file, fileError: req.fileError })
  if(!isValid) return res.status(400).send(error) // Checking error existence ...

  const { name, description, price, quality } = req.body
  const product = new Product({name, description, price: Number(price), quality ,image: req.file.filename}); // Create new product ...
  await product.save(); // Save product to databse ...
  res.status(201).send(product);
}


/* Delte product by ID */
const deleteProduct = async (req,res) => {
  const product = await Product.findByIdAndDelete(req.params.id)
  if(!product) return res.status(404).send({ msg: 'Not found!' })
  return res.status(200).send(product)
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct
}
