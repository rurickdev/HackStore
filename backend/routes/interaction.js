const express = require('express')

const AddInteraction = require('../middlewares/adding_interaccion')
const User = require('../usecases/user')
const item = require('../usecases/item')

const server = express()

server.post('/user/personality', (req, res) => {
  const { id } = req.body

  const user = User.get
  // const userHistory = 
})

server.get('/item', AddInteraction, (req, res) => {
  const { itemId } = req.body

  const item = Item.getItemById(itemId)

  if (item){  
    res.body = {
      success: true,
      payload: {
        name: item.name,
        description: item.description,
        price: item.price,
        shippingCost: item.shippingCost,
        keyWords: item.keyWords,
        categories: item.categories,
        pictures: item.pictures,
        seller: item.seller
      }
    }
  }else{
    res.body = {
      success: false,
      message: `Item not found`
    }
  }
})