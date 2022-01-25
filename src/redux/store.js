import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReduser from './app/app-reduser';

const rootReduser = combineReducers({
  app: appReduser,
});

const store = createStore(rootReduser, composeWithDevTools());

export default store;
