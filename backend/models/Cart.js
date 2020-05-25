const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartSchema = new Schema({
  user:{
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  items:[{
    item:{
      type: Schema.Types.ObjectId,
      ref: 'product',
      required: true,
      unique: true
    },
    quantity:{
      type: Number,
      default: 1
    }
  }]
})

module.exports = mongoose.model('cart',cartSchema)
