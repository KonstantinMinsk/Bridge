import { createStyles, makeStyles } from '@material-ui/core/styles';

const stylesFlex = createStyles({
	flexColumn: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
});

const useStyles = makeStyles((theme) => createStyles({
	balance: {
		textAlign: 'center',
		marginTop: 20,
		marginBottom: 20,
	},
	containerPlay: {
		padding: '20px 0 100px 0',
		width: '100%',
		backgroundColor: '#3f51b515',
		...stylesFlex.flexColumn,
	},
	containerCards: {
		marginTop: 100,
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignSelf: 'center',
		[theme.breakpoints.down('xs')]: {
			marginTop: 16,
			flexDirection: 'column',
			alignItems: 'center',
		},
	},
	buttons: {
		margin: 20,
		display: 'flex',
		justifyContent: 'space-evenly',
		alignItems: ({ isModePlay }: { isModePlay: boolean | null }) => (isModePlay ? 'space-between' : 'center'),
	},
	divider: {
		margin: '0 16px 0',
	},
	card: {
		border: ({ isModePlay }: { isModePlay: boolean | null }) => (isModePlay ? '2px solid #000' : 'none'),
		borderRadius: 16,
		width: 220,
		height: 308,
		...stylesFlex.flexColumn,
	},
	questionMark: {
		marginTop: 30,
		fontWeight: 900,
		fontSize: 74,
	},
}));

export default useStyles;
