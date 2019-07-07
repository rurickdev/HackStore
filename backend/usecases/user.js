const User = require('../models/user').model

const bcrypt = require('../lib/bcrypt')
const jwt = require('../lib/jwt')

async function create({ name, lastname, email, password, address, role }) {
  const hash = await bcrypt.create(password);
  const user = new User({ name, lastname, email, password: hash, address, role })
  return user.save();
}

const validatePassword = async (email, password) => {
  const user = await User.findOne({ email }).exec()
  return bcrypt.verify(password, user.password)
}

const login = async (email, password) => {
  const user = await User.findOne({ email }).exec()
  if (!user) throw new Error('User does not exists')
  const isValidPassword = await validatePassword(user.email, password)

  if (!isValidPassword) throw new Error('Invalid password')
  const token = await jwt.create({ id: user._id });
  return {
    userId: user._id,
    token
  }
}

const getById = (id) => User.findById(id)

const update = (userId, { name, lastname, email, address, role }) => {
  const userUpdated = User.findByIdAndUpdate(userId, { name, lastname, email, address, role })
}

const updatePersonality = (userId, personality) => {
  const updatedUser = User.findByIdAndUpdate(userId, personality)
}

const getHistory = (userId) => {
  const user = User.findById()
}

const addWhishList = (id, { name, items, public }) => {
  const { wishLists } = User.findById(id)
  const newWishList = { name, items, public }
  wishLists.push(newWishList)
  const updatedWishList = User.findByIdAndUpdate(id, { wishLists: newWishList })
}

const deleteWishlist = (userId, index) => {
  let { wishLists } = User.findById(userId)
  wishLists = wishLists.splice(index, 1)
  const updatedWishList = User.findByIdAndUpdate(userId, { wishLists: updatedWishList })
}

const toggleWishListPrivacy = (userId, wishListIndex) => {
  const { wishLists } = User.findById(userId)
  wishLists[wishListIndex].public = !(wishLists[wishListIndex].public)
}


//ToDo: 
const removeItemFromWishList = (userId, wishListIndex, itenIndex) => {

}

module.exports = {
  create,
  validatePassword,
  login
}