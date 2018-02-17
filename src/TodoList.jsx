import React from 'react';
import {connect} from 'react-redux';
import Todo from './Todo';
import * as actions from './todoActions';

const TodoList = ({todos, toggleTodo}) => {
  return (
    <div className="todolist">
      {Object.keys(todos).map(id => {
        return (
          <Todo
            key={id}
            todo={todos[id]}
            toggleTodo={toggleTodo}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: id => dispatch(actions.toggleTodo(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
