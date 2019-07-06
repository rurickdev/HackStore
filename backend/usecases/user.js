const User = require('../models/user')

const create = ({ name, lastname, email, address, role }) => {
  const user = User.create({
    name,
    lastname,
    email,
    address,
    role
  })
}

const getById = ( id ) => User.findById(id)

const update = (id, { name, lastname, email, address, role }) => {
  const userUpdated = User.findByIdAndUpdate(id, { name, lastname, email, address, role })
}

const createAWhishList = () => {
  
}