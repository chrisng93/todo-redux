import React from 'react';

const Todo = ({todo, toggleTodo}) => {
  console.log('rendering a todo')
  return (
    <div className={`todo ${todo.isCompleted ? 'completed' : null}`}>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => toggleTodo(todo.id)}
      />
      <div className="todo-description">{todo.description}</div>
    </div>
  )
};

export default Todo;
