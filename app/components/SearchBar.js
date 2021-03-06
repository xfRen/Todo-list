const React = require('react');

var SearchBar = React.createClass({
  propTypes: {
    onSearch: React.PropTypes.func.isRequired
  },
  render: function() {
    return (
      <input type='text' className='search-input'
        placeholder='Search'
        onChange={this.onChange}/>
    );
  },
  onChange: function(event) {
    if (event !== null) {
      if (event.target !== null) {
        var input = event.target;
        var value = input.value;
        this.props.onSearch(value);
      }
    }
  }
});

module.exports = SearchBar;
