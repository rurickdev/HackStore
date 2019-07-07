const Item = require('../models/item').model

const create = ({ name, description, price, shippingCost, keyWords, categories, pictures, seller }) => {
  const newItem = new Item({ name, description, price, shippingCost, keyWords, categories, pictures, seller });
  return newItem.save();

}

const getKeyWordsById = (id) => {
  const { keyWords } = Item.findById(id)
}

const getItemById = (id) => {
  const item = Item.findById(id)
}

const deleteItemById = (id) => {
  const item = Item.findByIdAndRemove(id)
}

const getAll = () => Item.find({}).exec()

module.exports = {
  create,
  getItemById,
  getKeyWordsById,
  deleteItemById,
  getAll
}