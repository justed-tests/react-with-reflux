let HTTP = require('../services/httpservice.js')
let Reflux = require('reflux')
let Actions = require('./actions.jsx')

let IngredientsStore = Reflux.createStore({
  listenables: [Actions],
  getIngredients: function () {
  },
  postIngredient: function (text) {
  },
  fireUpdate: function () {
    this.trigger('change', this.ingredients)
  }
})

module.exports = IngredientsStore
