import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import { CSSTransition } from 'react-transition-group';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import routes from '../../routes';
import Button from '@material-ui/core/Button';
import avatar from './leo.png';
import { logOut } from '../../redux/auth/authOperation';

export default function Header() {
  const classes = useStyles();

  const token = useSelector(state => state.token);
  const dispatch = useDispatch();
  const logUotSubmit = e => {
    e.preventDefault();
    dispatch(logOut(token));
  };
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
          <NavLink
            to={routes.home}
            className={classes.logo}
            activeClassName={classes.linkActive}
          >
            Lorem*3
          </NavLink>
        </CSSTransition>

        <nav className={classes.nav}>
          {!token ? (
            <>
              <NavLink
                activeClassName={classes.linkActive}
                to={routes.login}
                variant="button"
                color="textPrimary"
                className={classes.link}
              >
                Login
              </NavLink>

              <NavLink
                activeClassName={classes.linkActive}
                to={routes.register}
                className={classes.link}
              >
                Register
              </NavLink>
            </>
          ) : (
            <div className={classes.userMenu}>
              <NavLink
                activeClassName={classes.linkActive}
                to={routes.contacts}
                variant="button"
                color="textPrimary"
                className={classes.link}
              >
                phonebook
              </NavLink>
              <span className={classes.link}>Welcome,{' name'}</span>
              <img src={avatar} alt="" width="50" />
              <Button
                onClick={logUotSubmit}
                color="primary"
                variant="outlined"
                className={classes.link}
              >
                Log Out
              </Button>
            </div>
          )}
        </nav>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles(theme => ({
  userMenu: { display: 'flex', alignItems: 'center' },
  appBar: {
    boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    marginBottom: '0px',
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  nav: {
    // flexGrow: -1,
    marginLeft: 'auto',
  },
  logo: {
    fontWeight: 600,
    // flexGrow: 1,
    textDecoration: 'none',
    margin: 0,
    color: ' #3f51b5',
    fontSize: '35px',
  },
  link: {
    margin: theme.spacing(1, 1.5),
    textDecoration: 'none',
    fontSize: '0.875rem',
    color: '#3f51b5',
    letterSpacing: '0.02857em',
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  linkActive: {
    filter: 'drop-shadow(1.8px 1.7px .61px rgba(2,2,2,.667))',
  },
}));
