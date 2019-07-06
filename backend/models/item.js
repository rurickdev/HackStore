const mongoose = require('mongoose')
const { Schema } = mongoose

const Item = new Schema({
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
  },
  pictires: {
    type: [String]
  }

})

model.exports = { 
  Item 
}