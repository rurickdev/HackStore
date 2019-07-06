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