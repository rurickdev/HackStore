const mongoose = require('mongoose')
const { Schema } = mongoose

const Usuario = new Schema({
  name: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: [Object],
    required: true
  },
  rol: {
    type: [Number],
    required: true,
    default: 0
  },
  wishLists: {
    type: [Object]
  }
})

const Articule = new Schema({
  name: {
    type: String
  },
  description: {
    type: Text
  },
  price: {
    type: Number
  },
  shippingCost: {
    type: Number
  },
  keyWords: {
    type: [String]
  }

})

module.exports = {
  Usuario,
  Articule
}