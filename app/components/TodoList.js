const React = require('react');
const TodoRow = require('TodoRow');

var List = React.createClass({
  propTypes: {
    todos: React.PropTypes.array.isRequired,
    onToggle: React.PropTypes.func.isRequired
  },
  render: function() {
    var {todos, onToggle} = this.props;
    const todoRows = todos.map(function(todo) {
      return (
        <TodoRow key={todo.id} {...todo} onToggle={onToggle}/>
      );
    });
    return (
      <div className='todo-list'>
        {todoRows}
      </div>
    );
  }
});

module.exports = List;
