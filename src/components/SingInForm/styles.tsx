import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  return createStyles({
    form: {
      width: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      marginTop: 100,
      '& .MuiInputBase-root': {
        marginBottom: theme.spacing(2),
      },
    },
  });
});

export default useStyles;
