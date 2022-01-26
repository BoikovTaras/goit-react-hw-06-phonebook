import { combineReducers } from 'redux';
import appTypes from './app-types';

const contacts = (state = [], { type, payload }) => {
  switch (type) {
    case appTypes.ADD:
      return [...state, payload];
    case appTypes.DELETE:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case appTypes.FILTER:
      return {
        filter: payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  contacts,
  filter,
});
