import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import inputReduser from './input/input-reduser';

const rootReduser = combineReducers({
  app: inputReduser,
});

const store = createStore(rootReduser, composeWithDevTools());

export default store;
