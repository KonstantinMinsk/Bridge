import { createStyles, makeStyles } from '@material-ui/core/styles';

const stylesFlex = createStyles({
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const useStyles = makeStyles(() => {
  return createStyles({
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
    },
    button: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    card: {
      border: '2px solid #000',
      borderRadius: 4,
      width: 160,
      height: 240,
      ...stylesFlex.flexColumn,
    },
    questionMark: {
      marginTop: 30,
      fontWeight: 900,
      fontSize: 74,
    },
  });
});

export default useStyles;
