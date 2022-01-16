import { createStore } from 'redux';

const initialState = {
  input: {
    inputName: '',
    inputNumber: '',
  },
};

const reduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'input/setName':
      return {
        ...state,
        input: {
          ...state.input,
          inputName: payload,
        },
      };

    case 'input/setNumber':
      return {
        ...state,
        input: {
          ...state.input,
          inputNumber: payload,
        },
      };
    default:
      return state;
  }
};

const store = createStore(reduser);

export default store;
