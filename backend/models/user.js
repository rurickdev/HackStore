const mongoose = require('mongoose')
const { Schema } = mongoose

const User = new Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
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
  role: {
    type: [Number],
    required: true,
    default: 0
  },
  wishLists: {
    type: [Object],
    default: []
  },
  interactions: {
    type: [String]
  }
})

module.exports = {
  Usuario: User
}