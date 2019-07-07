const mongoose = require('mongoose')
const { Schema } = mongoose

const Item = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: Text,
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
  category: {
    type: [String],
    required: true
  },
  pictures: {
    type: [String],
    required: true
  }

})

model.exports = { 
  Item 
}