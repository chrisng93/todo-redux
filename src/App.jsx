import React from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const App = () => {
  return (
    <div className="App">
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
