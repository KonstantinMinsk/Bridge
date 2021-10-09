import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { Input, Button } from '../../UI';
import useStyles from './styles';
import { SingInFormProps } from '../../interfaces/UI';
import useStore from '../../store';
import { apiUser } from '../../api';

export default function SingInForm() {
	const classes = useStyles();
	const { isAuth, loginSuccess } = useStore();

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
				}
			} catch (err) {
				console.log(err);
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
					lable="Login"
					onChange={onChange}
					name="username"
				/>
				<Input
					variant="outlined"
					lable="Parol"
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
			</form>
		</Grid>
	);
}
