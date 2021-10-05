import React from 'react';
import { Grid } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import AppMenu from './components/AppMenu';
import './index.css';
import LoginPage from './pages/LoginPage';
import BridgePage from './pages/BridgePage';

export default function App() {
  return (
    <div className="App">
      <AppMenu />
      <Grid container alignItems="stretch" justifyContent="center">
        <Switch>
          <Route path="/" exact>
            <BridgePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </Grid>
    </div>
  );
}
