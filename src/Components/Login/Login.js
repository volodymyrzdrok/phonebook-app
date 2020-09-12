import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useSelector, useDispatch } from 'react-redux';
import { loginOperation } from '../../redux/auth/authOperation';
import routes from '../../routes';
import fon from './fon.png';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const token = useSelector(state => state.token);
  const history = useHistory();

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
    dispatch(loginOperation(form));
    setForm({ email: '', password: '' });
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
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={hendleSubmit}>
            <TextField
              style={{ marginTop: '0' }}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={form.email}
              onChange={handleChange}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={form.password}
              onChange={handleChange}
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};
export default Login;

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${fon})`,
    backgroundPosition: '25% 75%',
    backgroundRepeat: 'repeat',
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
