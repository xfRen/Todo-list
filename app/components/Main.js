const React = require('react');
const uuid = require('uuid');
const Header = require('Header');
const Inputer = require('Inputer');
const TodoList = require('TodoList');
const Filter = require('Filter');

var Main = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {id: uuid(), text: 'make a to do list.', completed: false},
        {id: uuid(), text: 'strike through the first thing on the to do list.', completed: false},
        {id: uuid(), text: "realise that you've already accomplished two things on the list.", completed: false}
      ],
      showAddBar: true,
      searchText: '',
      showAll: false
    };
  },
  render: function() {
    var {todos, showAddBar, searchText, showAll} = this.state;
    var filteredTodos = Filter.filterTodos(todos, showAll, searchText);
    return (
      <div className='main-div'>
        <Header onClickPlus={this.handleClickPlus} onClickSearch={this.handleClickSearch}/>
        <Inputer showAddBar={showAddBar} onEnter={this.handleEnter}
          onSearch={this.handleSearch} onTabNew={this.handleTabNew}
          onTabAll={this.handleTabAll}/>
        <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
      </div>
    );
  },
  handleEnter: function(value) {
    if (typeof value !== 'string' || value.length === 0) {
      return;
    }
    var {todos} = this.state;
    var id = uuid();
    var text = value;
    var todo = {id: id, text: text, completed: false};
    todos.push(todo);
    this.setState({
      todos: todos
    });
  },
  handleClickPlus: function() {
    this.setState({
      showAddBar: true,
      searchText: ''
    });
  },
  handleClickSearch: function() {
    this.setState({
      showAddBar: false
    });
  },
  handleSearch: function(value) {
    this.setState({
      searchText: value
    });
  },
  handleToggle: function(id) {
    var updatedTodos = this.state.todos.map(function(todo) {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos
    });
  },
  handleTabNew: function() {
    this.setState({
      showAll: false
    });
  },
  handleTabAll: function() {
    this.setState({
      showAll: true
    });
  }
});

module.exports = Main;
