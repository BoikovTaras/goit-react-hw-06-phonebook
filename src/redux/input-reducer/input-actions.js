import inputTypes from './input-types';
export const addName = value => ({
  type: inputTypes.NAME,
  payload: value,
});
export const addNumber = value => ({
  type: inputTypes.NUMBER,
  payload: value,
});
