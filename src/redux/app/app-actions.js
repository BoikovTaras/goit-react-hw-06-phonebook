import appTypes from './app-types';

const addContact = event => ({
  type: appTypes.ADD,
  payload: event,
});

const deleteContact = contactId => ({
  type: appTypes.DELETE,
  payload: contactId,
});

const filterContact = text => ({
  type: appTypes.FILTER,
  payload: text,
});

export default { addContact, deleteContact, filterContact };
