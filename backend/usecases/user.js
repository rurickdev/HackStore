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

const update = (userId, { name, lastname, email, address, role }) => {
  const userUpdated = User.findByIdAndUpdate(userId, { name, lastname, email, address, role })
}

const updatePersonality = (userId, personality) => {
  const updatedUser = User.findByIdAndUpdate(userId, personality)
}

const addWhishList = ( id, { name, items, public }) => {
  const { wishLists } = User.findById(id)
  const newWishList = { name, items, public }
  wishLists.push(newWishList)
  const updatedWishList = User.findByIdAndUpdate(id, { wishLists: newWishList })
}

const deleteWishlist = (userId, index) => {
  let { wishLists } = User.findById(userId)
  wishLists  = wishLists.splice(index, 1)
  const updatedWishList = User.findByIdAndUpdate(userId, { wishLists: updatedWishList })
}

const toggleWishListPrivacy = (userId, wishListIndex) => {
  const { wishLists } = User.findById(userId)
  wishLists[wishListIndex].public = !(wishLists[wishListIndex].public)
}


//ToDo: 
const removeItemFromWishList = (userId, wishListIndex, itenIndex) => {

}