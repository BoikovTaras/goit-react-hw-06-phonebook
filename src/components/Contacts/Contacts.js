import React from 'react';
import s from './Contacts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import inputActions from '../../redux/input/input-actions';

export default function Contacts() {
  const contact = useSelector(state => state.app.contacts);
  const filter = useSelector(state => state.app.filter);
  const dispatch = useDispatch();

  function filteredContacts(contacts, filter) {
    const normFilter = filter.toLowerCase();
    return contacts.filter(value =>
      value.name.toLowerCase().includes(normFilter),
    );
  }

  const contacts = filteredContacts(contact, filter);

  return (
    <ul className={s.contact_list}>
      {contacts.map(contact => (
        <li className={s.contact_item} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={s.delete}
            type="button"
            id={contact.id}
            onClick={() => dispatch(inputActions.deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
