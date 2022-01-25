import appTypes from './app-types';

const addContact = event => ({
  type: appTypes.ADD,
  payload: event,
});

const deleteContact = contactId => ({
  type: appTypes.DELETE,
  payload: contactId,
});

export default { addContact, deleteContact };
