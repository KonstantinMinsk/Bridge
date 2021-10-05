import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => {
  return createStyles({
    appbar: {
      backgroundColor: '#3f51b5',
      height: 70,
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      lineHeight: '32px',
      '&:hover': {
        textDecoration: 'underline',
      },
      '&.active': {
        fontWeight: 'bold',
      },
    },
  });
});

export default useStyles;
