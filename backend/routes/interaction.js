const express = require('express')

const AddInteraction = require('../middlewares/adding_interaccion')
const User = require('../usecases/user')

const server = express()

server.post('/user/personality', (req, res) => {
  const { id } = req.body

  const user = User.get
  // const userHistory = 
})

server.get('/item', AddInteraction, (req, res) => {
  const { itemId } = req.body

  
})