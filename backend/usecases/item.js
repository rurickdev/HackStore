const Item = require('../models/item')

const create = ({ name, desciption, price, shippingCost, keyWords, categories, pictures }) =>{
  const item = Item.create({ name, desciption, price, shippingCost, keyWords, categories, pictures })
}

const getKeyWordsById = (id) => {
  const { keyWords }= Item.findById(id)
}

const getItemById = (id) => {
  const item = Item.findById(id)
}

const deleteItemById = (id) => {
  const item = Item.findByIdAndRemove(id)
}

module.exports = {
  create,
  getItemById,
  getKeyWordsById,
  deleteItemById
}