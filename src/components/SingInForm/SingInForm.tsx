import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { Input, Button } from '../../UI';
import useStyles from './styles';
import { SingInFormProps } from '../../interfaces/UI';
import useStore from '../../store';
import { apiUser } from '../../api';
import { userError } from '../../constants';

export default function SingInForm() {
	const classes = useStyles();
	const { isAuth, loginSuccess, loginError, activeLoginError, inactiveLoginError } = useStore();

	const [formState, setFormState] = useState<SingInFormProps>(
		{ username: '', password: '' },
	);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setFormState((prev: SingInFormProps) => ({ ...prev, [e.target.name]: e.target.value }));

	const onSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.ChangeEvent<HTMLFormElement>): void => {
		e.preventDefault();
		(async () => {
			try {
				const isLogin = await apiUser.login(formState);
				if (isLogin) {
					loginSuccess();
					if (loginError) inactiveLoginError();
				} else {
					activeLoginError();
				}
			} catch (err) {
				// do noting
			}
		})();
	};

	if (isAuth) {
		return (
			<Redirect
				to={{
					pathname: '/',
				}}
			/>
		);
	}


	return (
		<Grid item lg={4} sm={6} xs={11}>
			<form onSubmit={onSubmit} className={classes.form}>
				<h2>Sing in to your account</h2>
				<Input
					variant="outlined"
					label="username"
					onChange={onChange}
					name="username"
				/>
				<Input
					variant="outlined"
					label="password"
					onChange={onChange}
					name="password"
				/>
				<Button
					type="submit"
					color="primary"
					variant="contained"
					size="large"
					content="Sing in"
				/>
				{loginError && <Typography variant="h6" color="secondary">{userError}</Typography>}
			</form>
		</Grid>
	);
}
