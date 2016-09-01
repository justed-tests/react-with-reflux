let React = require('react')
let ListItem = require('./list_item.jsx')
let Reflux = require('reflux')
let Actions = require('../reflux/actions.jsx')
let IngredientsStore = require('../reflux/ingredients-store.jsx')

let List = React.createClass({
  mixins: [Reflux.listenTo(IngredientsStore, 'onChange')],
  render: function () {
    let items = this.state.ingredients.map(function (item) {
      return <ListItem key={item.key} ingredient={item.text} />
    })
    return (
      <ul>
        {items}
      </ul>
    )
  },
  onChange: function (ingredients) {
    this.setState({ingredients: ingredients})
  },
  getInitialState: function () {
    return {
      ingredients: []
    }
  },
  componentWillMount: function () {
    Actions.getIngredients()
  }
})

module.exports = List
