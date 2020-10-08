import React from 'react';
// import styles from './Login.module.scss';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Login = () => {

  const classes = useStyles();

  return (
    <Paper>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Login" variant="outlined" />
        <TextField id="outlined-basic" label="Password" type="password" variant="outlined" />
        <Button variant="contained" color="primary">
          Sign in
        </Button>
      </form>
    </Paper>
  );

};

export default Login;
