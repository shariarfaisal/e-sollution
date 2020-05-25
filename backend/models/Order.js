const mongoose = require('mongoose')
const Schema = mongoose.Schema


const orderSchema = new Schema({
  user:{
    type: Schema.Types.ObjectId,
    ref:'user',
    required: true
  },
  items:[{
    item:{
      type: Schema.Types.ObjectId,
      ref: 'product',
      required: true
    },
    quantity:{
      type: Number,
      default: 1
    }
  }],
  status:{
    type: String,
    enum: ['pending','process','complete'],
    default: 'pending'
  },
  createdAt:{
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('order',orderSchema)
