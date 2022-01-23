import { createStore } from 'redux';

const initialState = {
  contacts: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'app/Add':
      return { contacts: state.contacts + payload };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
