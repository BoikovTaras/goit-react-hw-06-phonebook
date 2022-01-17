import { combineReducers } from 'redux';
import inputTypes from './input-types';

const nameReduser = (state = '', { type, payload }) => {
  switch (type) {
    case inputTypes.NAME:
      return { state: payload };
    default:
      return state;
  }
};

const numberReduser = (state = '', { type, payload }) => {
  switch (type) {
    case inputTypes.NUMBER:
      return { state: payload };
    default:
      return state;
  }
};

export default combineReducers({
  inputName: nameReduser,
  inputNumber: numberReduser,
});
