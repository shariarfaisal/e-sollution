const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  name:{
    type: String,
    required: true,
    max: 100,
    trim: true
  },
  description:{
    type: String,
    required: false,
    max: 1000
  },
  image:{
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true
  },
  quality:{
    type: String,
    required: false
  }
})

module.exports = mongoose.model('product',productSchema)
