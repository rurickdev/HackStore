const AddInteraction = require('../middlewares/adding_interaccion')
const User = require('../usecases/user')

server.post('/user/personality', (req, res) => {
  const { id } = req.body

  const user = User.get
  // const userHistory = 
})