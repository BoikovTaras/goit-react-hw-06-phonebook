import React from 'react';
import s from './Contacts.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import inputActions from '../../redux/input/input-actions';

const Contacts = ({ contacts, deleteContact }) => {
  return (
    <ul className={s.contact_list}>
      {contacts.map(contact => (
        <li className={s.contact_item} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={s.delete}
            type="button"
            id={contact.id}
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

const mapStateToProps = state => {
  return {
    contacts: state.app.contacts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: id => dispatch(inputActions.deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
