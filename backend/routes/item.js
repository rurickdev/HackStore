const AddInteraction = require('../middlewares/adding_interaccion')
const Item = require('../usecases/item')

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