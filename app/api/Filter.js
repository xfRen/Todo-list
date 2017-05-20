module.exports = {
  filterTodos: function(todos, showAll, searchText) {
    var filteredTodos = todos;
    // filter by showAll
    if (!showAll) {
      filteredTodos = filteredTodos.filter(function(todo) {
        return !todo.completed;
      });
    }
    // filter by searchText
    if (typeof searchText === 'string' && searchText.length > 0) {
      filteredTodos = filteredTodos.filter(function(todo) {
        var text = todo.text.toLowerCase();
        if (text.indexOf(searchText) !== -1) {
          return true;
        }
        return false;
      });
    }
    // sort todos with non-completed first
    filteredTodos.sort(function(a, b) {
      if (!a.completed && b.completed) {
        return -1; // -1 means a should come before b
      } else if (a.completed && !b.completed) {
        return 1; // 1 means a should come after b
      } else {
        return 0; // 0 means a is equal to b and no need to re-order
      }
    });
    return filteredTodos;
  }
}
