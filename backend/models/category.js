const mongoose = require('mongoose')
const { Schema } = mongoose

const Category = new Schema({
  name: {
    type: String,
    unique: true
  },
})

module.exports = {
  Category
}