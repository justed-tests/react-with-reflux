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
      <div>
        <input
          type="text"
          placeholder="add new item"
          value={this.state.newText}
          onChange={this.onInputChange}
        />
        <button type="button" onClick={this.onClick}>Submit</button>
        <ul>
          {items}
        </ul>
      </div>
    )
  },

  onChange: function (ingredients) {
    this.setState({ingredients: ingredients})
  },

  onClick: function () {
    let newText = this.state.newText
    if (newText) {
      Actions.postIngredient(newText)
      this.setState({newText: ''})
    }
  },

  onInputChange: function (e) {
    let val = e.target.value
    this.setState({newText: val})
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
