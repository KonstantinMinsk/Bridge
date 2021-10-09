import { CircularProgress } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const Spinner = () => {
	const classes = useStyles();
	return <CircularProgress size={60} thickness={3} className={classes.spinner} />;
};
export default Spinner;
