import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import inputReducer from './input-reducer/input-reducer';
console.log(inputReducer);

const rootReduser = combineReducers({
  input: inputReducer,
});

const store = createStore(rootReduser, composeWithDevTools());

export default store;
