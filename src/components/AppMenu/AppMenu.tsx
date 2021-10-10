import React from 'react';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';
import useStyles from './styles';
import Routes from '../../routing/routes';
import useStore from '../../store';

export default function AppMenu() {
	const classes = useStyles();
	const { isAuth, logoutSuccess } = useStore();

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
				<NavLink exact to={Routes.Bridge.path} className={classes.link}>
					{Routes.Bridge.name}
				</NavLink>
				{ isAuth
				&& (
					<NavLink to={Routes.Login.path} className={classes.link} onClick={logoutSuccess}>
						{Routes.Login.name}
					</NavLink>
				)}
			</Grid>
		</Grid>
	);
}
