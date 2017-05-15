const React = require('react');
const TodoRow = require('TodoRow');

var List = React.createClass({
  propTypes: {
    todos: React.PropTypes.array.isRequired
  },
  render: function() {
    var {todos} = this.props;
    const todoRows = todos.map(function(todo) {
      return (
        <TodoRow key={todo.id} text={todo.text}/>
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
