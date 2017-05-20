const React = require('react');

var Header = React.createClass({
  propTypes: {
    onClickPlus: React.PropTypes.func.isRequired,
    onClickSearch: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return {
      showSearch: true
    };
  },
  render: function() {
    var renderIcon = () => {
      if (!this.state.showSearch) {
        return (
          <div className='header-icon' id='header-plus' onClick={this.onClickPlus}><i className='fi-plus'></i></div>
        );
      } else {
        return (
          <div className='header-icon' id='header-search' onClick={this.onClickSearch}><i className='fi-magnifying-glass'></i></div>
        );
      }
    }
    return (
      <div className='header-div'>
        <div className='header'>
          <p className='header-label'>to-do list</p>
        </div>
        <div className='header-icon-div'>
          {renderIcon()}
    		</div>
      </div>
    );
  },
  onClickPlus: function() {
    this.setState({
      showSearch: true
    });
    this.props.onClickPlus();
  },
  onClickSearch: function() {
    this.setState({
      showSearch: false
    });
    this.props.onClickSearch();
  }
});

module.exports = Header;
