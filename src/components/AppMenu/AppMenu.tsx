import React from 'react';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';
import useStyles from './styles';
import Routes from '../../routing/routes';

export default function AppMenu() {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.appbar}
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        item
        lg={8}
        sm={10}
        xs={11}
        container
        alignItems="center"
        justifyContent="space-between"
      >
        <NavLink exact to={Routes.Home.path} className={classes.link}>
          {Routes.Home.name}
        </NavLink>
        <NavLink to={Routes.Login.path} className={classes.link}>
          {Routes.Login.name}
        </NavLink>
      </Grid>
    </Grid>
  );
}
