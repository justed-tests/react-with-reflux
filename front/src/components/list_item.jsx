let React = require('react')

let ListItem = React.createClass({
  propTypes: {
    ingredient: React.PropTypes.string
  },
  render: function () {
    return (
      <li>
        <h4>{this.props.ingredient}</h4>
      </li>
    )
  }
})

module.exports = ListItem
