import {createStore} from 'redux';
import todoReducer from './todoReducer';

export default function configureStore(initialState) {
  return createStore(todoReducer, initialState);
}
