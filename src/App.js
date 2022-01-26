// import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import inputActions from './redux/input/input-actions';

import s from './App.module.css';
import Input from './components/Input/Input';
import Title from './components/Title/Title';
import Contacts from './components/Contacts/Contacts';
import Filter from './components/Filter/Filter';

function App({ addContact }) {
  // const [filter, setFilter] = useState('');

  // const deleteContact = id =>
  //   setContacts(contacts.filter(item => item.id !== id));

  // const filterContact = e => setFilter(e.currentTarget.value);

  // const filteredContacts = () => {
  //   const normFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normFilter),
  //   );
  // };

  // useEffect(() => {
  //   const getContacts = localStorage.getItem('contacts');
  //   const contactArr = JSON.parse(getContacts);
  //   if (contactArr) {
  //     addContact(contactArr);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className={s.container}>
      <Title title="Phonebook" />
      <Input />
      <Title title="Contacts" />
      <Filter />
      <Contacts />
    </div>
  );
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addContact: event => dispatch(inputActions.addContact(event)),
//   };
// };

export default App;

// App.propTypes = {
//   filter: PropTypes.string,
// };
