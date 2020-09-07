import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { CSSTransition } from 'react-transition-group';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import routes from '../../routes';

const useStyles = makeStyles(theme => ({
  appBar: {
    boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    marginBottom: '14px',
  },
  toolbar: {
    flexWrap: 'wrap',
  },

  link: {
    margin: theme.spacing(1, 1.5),
    textDecoration: 'none',
    fontSize: '0.875rem',
    color: '#3f51b5',
    letterSpacing: '0.02857em',
    textTransform: 'uppercase',
  },
  linkActive: { fontWeight: '550' },

  btn: {
    fontWeight: 'inherit',
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <CSSTransition
          in={true}
          appear={true}
          timeout={800}
          classNames="Appbar-slideIn"
          unmountOnExit
        >
          <Typography
            style={{
              fontWeight: 700,
              flexGrow: 1,
            }}
            className="h1"
            component="h1"
            variant="h4"
          >
            Phonebook
          </Typography>
        </CSSTransition>

        <nav>
          <NavLink
            activeClassName={classes.linkActive}
            to={routes.contacts}
            variant="button"
            color="textPrimary"
            className={classes.link}
          >
            Contacts
          </NavLink>
          <NavLink
            activeClassName={classes.linkActive}
            to={routes.login}
            variant="button"
            color="textPrimary"
            className={classes.link}
          >
            Login
          </NavLink>
        </nav>
        <NavLink
          activeClassName={classes.linkActive}
          to={routes.register}
          className={classes.link}
        >
          <Button color="primary" variant="outlined" className={classes.btn}>
            Register
          </Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}
