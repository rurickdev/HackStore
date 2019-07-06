const Category = require('../models/category')

const create = ( name ) => {
  const nameNoraliced = name
}

const getAll = () => Category.find()

const getNameById = ( id ) => Category.findById( id )

const deleteById = ( id ) => Category.remove({ id })

module.exports = {
  getAll,
  getNameById,
  deleteById
}