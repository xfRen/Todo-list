const React = require('react');

var ListItem = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired,
    onToggle: React.PropTypes.func.isRequired
  },
  render: function() {
    var {id, text} = this.props;
    return (
      <div className='todo-row'
        onMouseMove={this.onMouseMove}
        onMouseLeave={this.onMouseLeave}
        ref='todoRow'>
        <div className='todo-row-text-container' onClick={() => { this.onTodoRowTextContainer(id) }}>
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
    if (this.props.completed) {
      var todoRowText = $(todoRow).find('.todo-row-text');
      $(todoRowText).addClass('strikeThrough');
    }
  },
  onMouseMove: function() {
    var todoRow = this.refs.todoRow;
    var todoRowTrashContainer = $(todoRow).find('.todo-row-trash-container');
    $(todoRowTrashContainer).css('width', '10%');
    var trashIcon = $(todoRow).find('i');
    $(trashIcon).css({display: 'table-cell', verticalAlign: 'middle'});
  },
  onMouseLeave: function() {
    var todoRow = this.refs.todoRow;
    var todoRowTrashContainer = $(todoRow).find('.todo-row-trash-container');
    $(todoRowTrashContainer).css('width', '0px');
    var trashIcon = $(todoRow).find('i');
    $(trashIcon).css('display', 'none');
  },
  onTodoRowTextContainer: function(id) {
    var todoRow = this.refs.todoRow;
    var todoRowText = $(todoRow).find('.todo-row-text');
    $(todoRowText).toggleClass('strikeThrough');
    this.props.onToggle(id);
  }
});

module.exports = ListItem;
