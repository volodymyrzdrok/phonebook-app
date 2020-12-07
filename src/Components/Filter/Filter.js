import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
// import { changeFilter } from '../../redux/contacts/contactsAction';
import { changeFilter } from '../../redux/slice';
import { getFilter, getContacts } from '../../redux/contacts/contactsSelector';

import { CSSTransition } from 'react-transition-group';
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
      width: '100%',
      zIndex: 10,
      backgroundColor: '#fff',
    },
  },
}));

const Filter = () => {
  const contacts = useSelector(state => getContacts(state));
  const valueFilter = useSelector(state => getFilter(state));
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <CSSTransition
      timeout={250}
      in={contacts.length > 1}
      appear={true}
      unmountOnExit
      classNames="filter"
    >
      <form className={classes.root} autoComplete="off">
        <TextField
          label="Find contact by name"
          value={valueFilter}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </form>
    </CSSTransition>
  );
};

export default Filter;
