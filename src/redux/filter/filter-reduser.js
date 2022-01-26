import { combineReducers } from 'redux';
import inputTypes from './input-types';

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case inputTypes.FILTER:
      return {
        filter: payload,
      };
    default:
      return state;
  }
};
