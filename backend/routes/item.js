const express = require('express');

const router = express.Router();

const AddInteraction = require('../middlewares/adding_interaccion').addingInteraction
const Item = require('../usecases/item')

router.post('/', AddInteraction, (req, res) => {
  const { itemId } = req.body

  const item = Item.getItemById(itemId)

  if (item) {
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
  } else {
    res.body = {
      success: false,
      message: `Item not found`
    }
  }
});

router.post('/new', async (req, res) => {
  try {
    const { name, description, price, shippingCost, keyWords, categories, pictures, seller } = req.body;
    await Item.create({ name, description, price, shippingCost, keyWords, categories, pictures, seller });
    res.json({
      success: true,
      message: `New item created successfully`
    });
  } catch (error) {
    res.status(500);
    res.json({
      success: false,
      message: `Could not create new item`,
      error: [error]
    })
  }
});

router.get('/all', async (req, res) => {
  try {
    const items = await Item.getAll();
    res.json({
      success: true,
      payload: items
    });
  } catch (error) {
    res.status(500);
    res.json({
      success: false,
      message: `Could not find items`,
      error: [error]
    })
  }
});

module.exports = router;