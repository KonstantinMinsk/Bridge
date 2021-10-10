import React, { FC } from 'react';
import {
	Route,
	Redirect,
	RouteProps,
} from 'react-router-dom';
import Routes from '../../routing/routes';
import useStore from '../../store';

const PrivateRoute: FC<RouteProps> = ({ children, ...props }) => {
	const { isAuth } = useStore();
	return (
		<Route
			{...props}
			render={({ location }) => (isAuth ? (
				children
			) : (
				<Redirect
					to={{
						pathname: `${Routes.Login.path}`,
						state: { from: location },
					}}
				/>
			))}
		/>
	);
};

export default PrivateRoute;
