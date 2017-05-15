const React = require('react');
const AddBar = require('AddBar');
const SearchBar = require('SearchBar');

var Inputer = React.createClass({
  propTypes: {
    showAddBar: React.PropTypes.bool.isRequired,
    onEnter: React.PropTypes.func.isRequired,
    onSearch: React.PropTypes.func.isRequired
  },
  render: function() {
    var {showAddBar, onEnter, onSearch} = this.props;
    function rendererInputer() {
      if (showAddBar) {
        return (<AddBar onEnter={onEnter}/>);
      } else {
        return (<SearchBar onSearch={onSearch}/>);
      }
    }
    return (
      <div className='inputer'>
        {rendererInputer()}
      </div>
    );
  }
});

module.exports = Inputer;
