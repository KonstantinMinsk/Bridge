import React from 'react';
import { Grid } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import AppMenu from './components/AppMenu';
import './index.css';
import LoginPage from './pages/LoginPage';
import BridgePage from './pages/BridgePage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export default function App() {
	return (
		<div className="App">
			<AppMenu />
			<Grid container alignItems="stretch" justifyContent="center">
				<Switch>

					<PrivateRoute
						path="/"
						exact
					>
						<BridgePage />
					</PrivateRoute>
					<Route path="/login">
						<LoginPage />
					</Route>
				</Switch>
			</Grid>
		</div>
	);
}
