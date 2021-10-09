import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
	spinner: {
		display: 'flex',
		alignItems: 'center',
		height: '80vh !important',
	},
}));

export default useStyles;
