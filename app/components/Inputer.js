const React = require('react');
const AddBar = require('AddBar');
const SearchBar = require('SearchBar');

var Inputer = React.createClass({
  propTypes: {
    showAddBar: React.PropTypes.bool.isRequired,
    onEnter: React.PropTypes.func.isRequired,
    onSearch: React.PropTypes.func.isRequired,
    onTabNew: React.PropTypes.func.isRequired,
    onTabAll: React.PropTypes.func.isRequired
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
        <div className='tab-group'>
          <div className='active-tab' onClick={this.onClickNew} ref='newTab'>
            <span>New</span>
          </div>
          <div className='tab' onClick={this.onClickAll} ref='allTab'>
            <span>All</span>
          </div>
        </div>
      </div>
    );
  },
  onClickNew: function() {
    $(this.refs.newTab).addClass('active-tab').removeClass('tab');
    $(this.refs.allTab).addClass('tab').removeClass('active-tab');
    this.props.onTabNew();
  },
  onClickAll: function() {
    $(this.refs.allTab).addClass('active-tab').removeClass('tab');
    $(this.refs.newTab).addClass('tab').removeClass('active-tab');
    this.props.onTabAll();
  }
});

module.exports = Inputer;
