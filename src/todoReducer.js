import * as actions from './todoActions';

let count = 0;

const initialState = {
  // keys are ids, values are todos
  todos: {},
};

export default function todoReducer(state = initialState, action) {
  const {type, payload} = action;
  const newTodos = {...state.todos};
  console.log('got stuff', type, payload)
  switch (type) {
    case actions.ADD_TODO:
      count++;
      newTodos[count] = {...payload, id: count};
      console.log('new todos', newTodos)
      return ({todos: newTodos});
    case actions.TOGGLE_TODO:
      newTodos[payload]['isCompleted'] = !newTodos[payload]['isCompleted'];
      return ({todos: newTodos});
    default:
      return state;
  }
}
