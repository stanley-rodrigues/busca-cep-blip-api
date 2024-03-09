const axios = require('axios')
class BuscaCEPController {
  async index(req, res) {
    try {
      const { cep } = req.params

      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      

      const objResponse = {
        cep: response.data.cep,
        logradouro: response.data.logradouro,
        complemento: response.data.complemento,
        bairro: response.data.bairro,
        localidade: response.data.localidade,
        uf: response.data.uf
      }
      res.status(200).json(objResponse)
      console.log(objResponse)
    } catch (error) {
      res.status(500).json({ error: "Erro ao consultar o CEP" })

    }



  }
}

module.exports = new BuscaCEPController()