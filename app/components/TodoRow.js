const React = require('react');
const ReactDOM = require('react-dom');

var ListItem = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired
  },
  render: function() {
    var {text} = this.props;
    return (
      <div className='todo-row' onMouseMove={this.onMouseMove} onMouseLeave={this.onMouseLeave}>
        <div className='todo-row-trash-container'>
          <p className='todo-row-trash'><i className='fi-trash'></i></p>
        </div>
        <div className='todo-row-text-container'>
          <p className='todo-row-text'>{text}</p>
        </div>
      </div>
    );
  },
  componentDidMount: function() {
    var todoRow = ReactDOM.findDOMNode(this);
    var todoRowTextContainer = $(todoRow).find('.todo-row-text-container');
    $(todoRow).css("height", $(todoRowTextContainer).outerHeight() + "px");
  },
  onMouseMove: function() {
    var todoRow = ReactDOM.findDOMNode(this);
    var todoRowTrashContainer = $(todoRow).find('.todo-row-trash-container');
    var todoRowTrash = $(todoRowTrashContainer).find('.todo-row-trash');
    $(todoRowTrashContainer).css("width", $(todoRowTrash).outerWidth() + "px");
    var trashIcon = $(todoRow).find("i");
    $(trashIcon).css({display: "table-cell", verticalAlign: "middle"});
  },
  onMouseLeave: function() {
    var todoRow = ReactDOM.findDOMNode(this);
    var todoRowTrashContainer = $(todoRow).find('.todo-row-trash-container');
    $(todoRowTrashContainer).css("width", "0px");
    var trashIcon = $(todoRow).find("i");
    $(trashIcon).css("display", "none");
  }
});

module.exports = ListItem;
