import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

export default function AppMenu() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <span>Bridge</span>
        <div className={classes.wrapperButtons}>
          <Button color="inherit">Logout</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
