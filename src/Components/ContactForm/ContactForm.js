import React from 'react';
import styles from './ContactForm.module.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useSelector, useDispatch } from 'react-redux';
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

const ContactForm = () => {
  const contacts = useSelector(state => getContacts(state));
  const name = useSelector(state => getName(state));
  const number = useSelector(state => getNumber(state));
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();

  const hendleSubmit = e => {
    e.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      dispatch(alert());
      setTimeout(() => {
        dispatch(alert());
      }, 2800);
    } else {
      dispatch(addContactOperation({ name, number }, token));
    }
    dispatch(inputClear());
  };

  return (
    <form className={styles.form} onSubmit={hendleSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Name"
        onChange={e => dispatch(changeName(e.target.value))}
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
        onChange={e => dispatch(changeNumber(e.target.value))}
      />

      <Button type="submit" fullWidth variant="contained" color="primary">
        Add contact
      </Button>
    </form>
  );
};

export default ContactForm;
