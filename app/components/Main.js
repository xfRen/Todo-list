const React = require('react');
const Header = require('Header');
const Inputer = require('Inputer');
const SearchBar = require('SearchBar');
const TodoList = require('TodoList');

var Main = React.createClass({
  getInitialState: function() {
    return {
      initialTodos: [
        {id: 1, text: 'make a to do list.'},
        {id: 2, text: 'strike through the first thing on the to do list.'},
        {id: 3, text: "realise that you've already accomplished two things on the list."}
      ],
      todos: [],
      showInputer: true
    };
  },
  componentWillMount: function() {
    this.setState({
      todos: this.state.initialTodos
    });
  },
  render: function() {
    var self = this;
    var {todos, showInputer} = self.state;
    function rendererInputer() {
      if (showInputer) {
        return (<Inputer onEnter={self.onEnter}/>);
      } else {
        return (<SearchBar onSearch={self.onSearch}/>);
      }
    }
    return (
      <div className='main-div'>
        <Header onClickPlus={this.onClickPlus} onClickSearch={this.onClickSearch}/>
        {rendererInputer()}
        <TodoList todos={todos}/>
      </div>
    );
  },
  onEnter: function(value) {
    if (typeof value !== 'string' || value.length === 0) {
      return;
    }
    var {initialTodos} = this.state;
    var id = initialTodos.length + 1;
    var text = value;
    var todo = {id: id, text: text};
    initialTodos.push(todo);
    this.setState({
      initialTodos: initialTodos,
      todos: initialTodos
    });
  },
  onClickPlus: function() {
    this.setState({
      showInputer: true,
      todos: this.state.initialTodos
    });
  },
  onClickSearch: function() {
    this.setState({
      showInputer: false
    });
  },
  onSearch: function(value) {
    var {initialTodos} = this.state;
    var filteredTodos = initialTodos.filter(function(todo) {
      var text = todo.text;
      if (text.toLowerCase().search(value.toLowerCase()) !== -1) {
        return true;
      }
      return false;
    });
    this.setState({
      todos: filteredTodos
    });
  }
});

module.exports = Main;
