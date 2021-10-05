import React from 'react';
import { Grid } from '@material-ui/core';
import AppMenu from './components/AppMenu';
import SingInForm from './components/SingInForm/SingInForm';
import './index.css';

export default function App() {
  return (
    <div className="App">
      <AppMenu />
      <Grid container alignItems="stretch" justifyContent="center">
        <SingInForm />
      </Grid>
    </div>
  );
}
