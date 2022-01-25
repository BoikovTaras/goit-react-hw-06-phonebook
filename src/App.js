// import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

import s from './App.module.css';
import { connect } from 'react-redux';
import addContact from './redux/app/app-actions';
// import Input from './components/Input/Input';
// import Title from './components/Title/Title';
// import Contacts from './components/Contacts/Contacts';
// import Filter from './components/Filter/Filter';

function App({ contacts, addContact }) {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');

  // const addContact = event => setContacts([...contacts, event]);

  // const deleteContact = id =>
  //   setContacts(contacts.filter(item => item.id !== id));

  // const filterContact = e => setFilter(e.currentTarget.value);

  // const filteredContacts = () => {
  // const normFilter = filter.toLowerCase();
  // return contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(normFilter),
  // );
  // };

  // useEffect(() => {
  //   const getContacts = localStorage.getItem('contacts');
  //   const contactArr = JSON.parse(getContacts);
  //   if (contactArr) {
  //     setContacts(contactArr);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className={s.container}>
      app
      {/* <Title title="Phonebook" /> */}
      {/* <Input /> */}
      {/* <Title title="Contacts" /> */}
      {/* <Filter value={filter} onChange={filterContact} /> */}
      {/* <Contacts contacts={filteredContacts()} deleteContact={deleteContact} /> */}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    contacts: state.app.contacts,
    filter: state.app.filter,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addContact: () => dispatch(addContact()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// App.propTypes = {
//   filter: PropTypes.string,
// };
