const mongoose = require('mongoose')
const { Schema } = mongoose

const Interaction = new Schema({
  userId: {
    type: String
  },
  interaction:{
    type: String
  }
})

module.exports = {
  Interaction
}