import React from 'react';
import styles from './ContactForm.module.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { connect } from 'react-redux';
import {
  alert,
  changeName,
  changeNumber,
  inputClear,
} from '../../redux/contacts/contactsAction';
import { addContactOperation } from '../../redux/contacts/contactsOperation';
import {
  getNumber,
  getContacts,
  getName,
} from '../../redux/contacts/contactsSelector';

const ContactForm = ({
  name,
  number,
  contacts,
  addContact,
  alert,
  changeName,
  changeNumber,
  inputClear,
}) => {
  const hendleSubmit = e => {
    e.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      alert();
      setTimeout(() => {
        alert();
      }, 2800);
    } else {
      addContact(name, number);
    }
    inputClear();
  };

  return (
    <form className={styles.form} onSubmit={hendleSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Name"
        onChange={e => changeName(e.target.value)}
        value={name}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Number"
        type="number"
        value={number}
        onChange={e => changeNumber(e.target.value)}
      />

      <Button type="submit" fullWidth variant="contained" color="primary">
        Add contact
      </Button>
    </form>
  );
};

const mapStateToProps = state => ({
  contacts: getContacts(state),
  name: getName(state),
  number: getNumber(state),
});

const mapDispatchToProps = {
  addContact: addContactOperation,
  alert: alert,
  changeName: changeName,
  changeNumber: changeNumber,
  inputClear: inputClear,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
