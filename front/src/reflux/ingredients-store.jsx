let HTTP = require('../services/httpservice.js')
let Reflux = require('reflux')
let Actions = require('./actions.jsx')

let IngredientsStore = Reflux.createStore({
  listenables: [Actions],
  init: function () {
    this.ingredients = []
  },
  getIngredients: function () {
    HTTP
      .get('/ingredients')
      .then((data) => {
        this.ingredients = data
        this.fireUpdate()
      })
  },

  postIngredient: function (text) {
    let ingredient = {
      id: new Date().getTime(),
      text: text
    }

    this.ingredients.push(ingredient)
    this.fireUpdate()

    HTTP
      .post('/ingredients', ingredient)
      .then((data) => {
        this.getIngredients()
      })
  },

  fireUpdate: function () {
    this.trigger(this.ingredients)
  }
})

module.exports = IngredientsStore
