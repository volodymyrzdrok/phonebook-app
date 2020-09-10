import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ProductHeroLayout from './styles';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from '../../routes';

const backgroundImage =
  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9',
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  navLink: {
    textDecoration: 'none',
    color: theme.palette.secondary.main,
    marginLeft: '10px',
    fontWeight: '600',
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function Home(props) {
  const { classes } = props;
  const token = useSelector(state => state.token);
  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Welcome to app
      </Typography>

      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        {!token
          ? 'If you already have an account please'
          : 'If you already have log in ,click'}
        {!token && (
          <NavLink className={classes.navLink} to={routes.login}>
            Log In
          </NavLink>
        )}
      </Typography>

      <NavLink className="a" to={routes.register}>
        <Button
          color="secondary"
          variant="contained"
          size="large"
          className={classes.button}
        >
          {!token ? 'Register' : 'Phone Book'}
        </Button>
      </NavLink>
    </ProductHeroLayout>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
