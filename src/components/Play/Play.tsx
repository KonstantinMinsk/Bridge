import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Button } from '../../UI';
import useStyles from './styles';

export default function Play({ balance }: { balance: number }) {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.balance} variant="h5">
        {`Balance: ${balance}`}
      </Typography>
      <div className={classes.containerPlay}>
        <Typography variant="h3">Кто выйграет?</Typography>
        <Typography variant="body1">Сыграй в игру и испытай удачу</Typography>
        <Grid item lg={8} sm={10} xs={11} container justify="center">
          <Grid item xs={11} sm={8} className={classes.containerCards}>
            <div className={classes.card}>
              <span className={classes.questionMark}>?</span>
            </div>
            <div className={classes.button}>
              <Button
                size="large"
                color="primary"
                variant="contained"
                content="Играть"
              />
            </div>
            <div className={classes.card}>
              <span className={classes.questionMark}>?</span>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
