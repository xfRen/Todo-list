const React = require('react');

var ListItem = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired
  },
  render: function() {
    var {text} = this.props;
    return (
      <div className='todo-row'
        onMouseMove={this.onMouseMove}
        onMouseLeave={this.onMouseLeave}
        ref='todoRow'>
        <div className='todo-row-text-container' onClick={this.onTodoRowTextContainer}>
          <p className='todo-row-text'>{text}</p>
        </div>
        <div className='todo-row-trash-container'>
          <p className='todo-row-trash'><i className='fi-trash'></i></p>
        </div>
      </div>
    );
  },
  componentDidMount: function() {
    var todoRow = this.refs.todoRow;
    var todoRowTextContainer = $(todoRow).find('.todo-row-text-container');
    $(todoRow).css('height', $(todoRowTextContainer).outerHeight() + 'px');
  },
  onMouseMove: function() {
    var todoRow = this.refs.todoRow;
    var todoRowTrashContainer = $(todoRow).find('.todo-row-trash-container');
    $(todoRowTrashContainer).css('width', '10%');
    var trashIcon = $(todoRow).find('i');
    $(trashIcon).css({display: 'table-cell', verticalAlign: 'middle'});
    // var todoRowTrash = $(todoRowTrashContainer).find('.todo-row-trash');
    // var todoRowTrashPadding = ($(todoRowTrashContainer).outerWidth() - $(trashIcon).outerWidth()) / 2;
    // $(todoRowTrash).css('padding-left', todoRowTrashPadding + 'px');
    // $(todoRowTrash).css('padding-right', todoRowTrashPadding + 'px');
  },
  onMouseLeave: function() {
    var todoRow = this.refs.todoRow;
    var todoRowTrashContainer = $(todoRow).find('.todo-row-trash-container');
    $(todoRowTrashContainer).css('width', '0px');
    var trashIcon = $(todoRow).find('i');
    $(trashIcon).css('display', 'none');
  },
  onTodoRowTextContainer: function() {
    var todoRow = this.refs.todoRow;
    var todoRowText = $(todoRow).find('.todo-row-text');
    $(todoRowText).toggleClass('strikeThrough');
  }
});

module.exports = ListItem;
