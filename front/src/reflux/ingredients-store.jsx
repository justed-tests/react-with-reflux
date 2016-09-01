let HTTP = require('../services/httpservice.js')
let Reflux = require('reflux')
let Actions = require('./actions.jsx')

let IngredientsStore = Reflux.createStore({
  listenables: [Actions],
  getIngredients: function () {
    HTTP
      .get('/ingredients')
      .then((data) => {
        this.ingredients = data
        this.fireUpdate()
      })
  },

  postIngredient: function (text) {
  },

  fireUpdate: function () {
    //this.trigger('change', this.ingredients)
    this.trigger(this.ingredients)
  }
})

module.exports = IngredientsStore
