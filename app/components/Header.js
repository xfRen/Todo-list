const React = require('react');

var Header = React.createClass({
  propTypes: {
    onClickPlus: React.PropTypes.func.isRequired,
    onClickSearch: React.PropTypes.func.isRequired
  },
  render: function() {
    var {onClickPlus, onClickSearch} = this.props;
    return (
      <div>
        <div className='header'>
          <p className='header-label'>to-do list</p>
        </div>
        <div className="header-icon-div">
          <p className="header-icon" id="header-search" onClick={onClickSearch}><i className='fi-magnifying-glass'></i></p>
    			<p className="header-icon" id="header-plus" onClick={onClickPlus}><i className='fi-plus'></i></p>
    		</div>
      </div>
    );
  }
});

module.exports = Header;
