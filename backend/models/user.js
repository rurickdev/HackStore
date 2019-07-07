const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
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
  password: {
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
  },
  interactions: {
    type: [String]
  }
})

module.exports = {
  model: mongoose.model('user', userSchema),
  schema: userSchema
}
