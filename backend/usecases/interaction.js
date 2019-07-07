const Interaction = require('../models/interaction')

const create = ({ userId, interaction }) => {
  const newInteraction = Interaction.create({
    userId,
    interaction
  })
}

const getByUserId = (userId) => {
  const interactions = Interaction.find({ userId })
}

module.exports = {
  create,
  getByUserId
}