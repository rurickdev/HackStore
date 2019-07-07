const mongoose = require('mongoose')
const { Schema } = mongoose

const Item = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  shippingCost: {
    type: Number,
    required: true
  },
  keyWords: {
    type: [String],
    required: true
  },
  categories: {
    type: [String],
    required: true
  },
  pictures: {
    type: [String],
    required: true
  },
  seller: {
    type: String,
    required: true
  }

})

module.exports = {
  model: mongoose.model('Item', Item),
  Item
}