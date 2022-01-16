import { createStore } from 'redux';

const initialName = {
  inputName: '',
  inputPhone: '',
};

const reduser = (state = initialName, { type, payload }) => {
  switch (type) {
    case 'input/setName':
      return {
        inputValue: payload,
      };
    case 'input/setNumber':
      return {
        inputValue: payload,
      };

    default:
      return state;
  }
};

const store = createStore(reduser);

export default store;
