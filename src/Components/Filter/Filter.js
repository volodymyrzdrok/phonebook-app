import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contactsAction';
import { getFilter, getContacts } from '../../redux/contacts/contactsSelector';
import Container from '@material-ui/core/Container';
import { CSSTransition } from 'react-transition-group';
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
}));

const Filter = ({ valueFilter, changeFilterProp, contacts }) => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
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
            onChange={e => changeFilterProp(e.target.value)}
          />
        </form>
      </CSSTransition>
    </Container>
  );
};

const mapStateToProps = state => ({
  contacts: getContacts(state),
  valueFilter: getFilter(state),
});
const mapDispatchToProps = { changeFilterProp: changeFilter };

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
