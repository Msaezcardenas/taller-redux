// este codigo siempre es lo mismo 
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers';
import state from './initialState';

export default createStore(
  reducer,
  state,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

// codigo siempre es lo mismo 
// applyMiddleware -> funciones asincronas como fetch