import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useSelector, useDispatch } from 'react-redux';
import { registrOperation } from '../../redux/auth/authOperation';
import routes from '../../routes';
import fon from './fon.png';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector(state => state.token);

  useEffect(() => {
    token && history.push(routes.contacts);
  }, [history, token]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(state => ({
      ...state,
      [name]: value,
    }));
  };

  const hendleSubmit = e => {
    e.preventDefault();
    dispatch(registrOperation(form));
    setForm({ name: '', email: '', password: '' });
  };

  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Container
        component="main"
        maxWidth="xs"
        style={{
          marginTop: '10px',
        }}
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h2" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate onSubmit={hendleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  value={form.name}
                  onChange={handleChange}
                  label="Name"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  value={form.email}
                  onChange={handleChange}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Register;

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${fon})`,
    backgroundPosition: '199% 270%',
  },
  paper: {
    marginTop: theme.spacing(-1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    zIndex: 10,
    backgroundColor: '#fff',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
