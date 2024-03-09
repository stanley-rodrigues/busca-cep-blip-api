const {Router} = require("express")
const BuscaCEPController = require("./controllers/BuscaCEPController")
const routes = new Router()

routes.get('/', (_, res) => {
  return res.json({ message: 'Alive api!' })
})

routes.get('/:cep', BuscaCEPController.index)

module.exports = routes