import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import todoReducer from './todoReducer';

const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true,
});

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(todoReducer, initialState);
}
