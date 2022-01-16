export const addName = value => ({
  type: 'input/setName',
  payload: value,
});
export const addNumber = value => ({
  type: 'input/setNumber',
  payload: value,
});

//   const reset = () => {
//     setName('');
//     setNumber('');
//   };

//   const addNewContact = event => {
//     if (contacts.find(item => item.name.toLowerCase() === name.toLowerCase())) {
//       return window.alert(`${name} is alredy in contacts`, 2500);
//     } else {
//       addContact(renderContact());
//       reset();
//     }
//   };

//   const renderContact = () => {
//     return { id: nanoid(), name, number };
//   };
