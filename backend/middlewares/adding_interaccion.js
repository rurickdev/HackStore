const Item = require('../usecases/item')
const Interaction = require('../usecases/interaction')

const addingInteraction = async (req, res, next) => {
  const { userId, interactionType, itemId } = req.body
  let statement = ''
  let keyWordsString = ''
  const { name, keyWords } = await Item.getItemById(itemId)

  keyWords.forEach(keyWord => {
    keyWords = keyWords + ', ' + keyWord
  });

  switch (interactionType) {
    case 'visit':
      statement = `Me interesa ${name} con las siguientes caracteristicas ${keyWordsString}`
      break
    case 'buy':
      statement = `Compré ${name} con las siguientes caracteristicas ${keyWordsString}`
      break
    case 'like':
      statement = `Me gusta ${name} con las siguientes caracteristicas ${keyWordsString}`
      break
    case 'dislike':
      statement = `Ya no me gusta ${name} con las siguientes caracteristicas ${keyWordsString}`
      break
    case 'notInterested':
      statement = `No me interesa ${name} con las siguientes caracteristicas ${keyWordsString}`
      break
    default:
    //code here
  }

  const newInteraction = await Interaction.create({ userId, interaccion: statement })

  next()
}

module.exports = {
  addingInteraction
}