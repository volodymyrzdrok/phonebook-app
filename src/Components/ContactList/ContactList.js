import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import HowToReg from '@material-ui/icons/HowToReg';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './ContactList.css';
import Loader from '../Loader/Loader';
import { removeContactOperation } from '../../redux/contacts/contactsOperation';
import { connect } from 'react-redux';
import {
  getLoader,
  getVisibleContacts,
} from '../../redux/contacts/contactsSelector';

const ContactList = ({ contacts, removeContactProp, loader, token }) => {
  const classes = useStyles();

  return (
    <CSSTransition
      timeout={{ enter: 250, exit: 250 }}
      in={contacts.length > 0}
      unmountOnExit
      classNames="list__item"
    >
      <List>
        {loader && <Loader />}
        <TransitionGroup>
          {contacts.map(contact => (
            <CSSTransition
              timeout={{ enter: 250, exit: 250 }}
              key={contact.id}
              classNames="list__item"
            >
              <ListItem className={classes.listItem}>
                <ListItemAvatar>
                  <HowToReg fontSize="large" />
                </ListItemAvatar>
                <ListItemText
                  primary={contact.name}
                  secondary={contact.number}
                />
                <Tooltip title="Delete" placement="left">
                  <ListItemSecondaryAction>
                    <IconButton
                      className={classes.btn}
                      edge="end"
                      aria-label="delete"
                      onClick={() => removeContactProp(contact.id, token)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </Tooltip>
              </ListItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </List>
    </CSSTransition>
  );
};

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
  loader: getLoader(state),
  token: state.token,
});

const mapDispatchToProps = {
  removeContactProp: removeContactOperation,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  listItem: {
    boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    borderRadius: '4px',
  },
  btn: {
    color: theme.palette.error.main,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },

  tooltip: {
    backgroundColor: theme.palette.common.black,
  },
}));
