var React = require('react')
var ListItem = require('./list_item.jsx')

let HTTP = require('./../services/httpservice.js')

var List = React.createClass({
  render: function () {
    var items = this.state.ingredients.map(function (item) {
      return <ListItem key={item.key} ingredient={item.text} />
    })
    return (
      <ul>
        {items}
      </ul>
    )
  },
  getInitialState: function () {
    return {
      ingredients: []
    }
  },
  componentWillMount: function () {
    HTTP
      .get('/ingredients')
      .then(function (items) {
        this.setState({
          ingredients: items
        })
      }.bind(this))
  }
})

module.exports = List
