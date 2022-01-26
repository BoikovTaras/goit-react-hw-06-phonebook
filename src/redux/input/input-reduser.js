import { combineReducers } from 'redux';
import inputTypes from './input-types';

const contacts = (state = [], { type, payload }) => {
  switch (type) {
    case inputTypes.ADD:
      return [...state, payload];
    case inputTypes.DELETE:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case inputTypes.FILTER:
      return { ...state, payload };
    default:
      return state;
  }
};

export default combineReducers({
  contacts,
  filter,
});
