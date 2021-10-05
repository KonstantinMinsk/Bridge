import React from 'react';
import { Grid } from '@material-ui/core';
import { Input, Button } from '../../UI';
import useStyles from './styles';

export default function SingInForm() {
  const classes = useStyles();

  const onSubmit = () => {};

  return (
    <Grid item lg={4} sm={6} xs={12}>
      <form onSubmit={onSubmit} className={classes.form}>
        <h2>Sing in to your account</h2>
        <Input variant="outlined" lable="Login" />
        <Input variant="outlined" lable="Parol" />
        <Button
          color="primary"
          variant="contained"
          size="large"
          content="Sing in"
        />
      </form>
    </Grid>
  );
}
