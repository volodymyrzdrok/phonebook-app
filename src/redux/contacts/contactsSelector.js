import { createSelector } from 'reselect';

export const getLoader = state => state.loader;
export const getAlert = state => state.alert;
export const getNumber = state => state.number;
export const getName = state => state.name;
export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

// export const getVisibleContacts = state => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase()),
//   );
// };
