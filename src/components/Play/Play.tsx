import React, { useState, useEffect, useMemo } from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography, Divider } from '@material-ui/core';
import { Button } from '../../UI';
import useStyles from './styles';
import { useFetchPairCard } from '../../hooks/react-query';
import { optionChooseCards } from '../../enum';
import { bidAmount, namesCards, valueCards } from '../../constants';

export default function Play({ dataFetchDeskID }: { dataFetchDeskID: any }) {
  const [balance, setBalance] = useState<number>(100);
  const [winner, setWinner] = useState<boolean | null>(null);
  const [isModePlay, setIsModePlay] = useState<boolean | null>(null);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const classes = useStyles({ isModePlay });
  const fetchPairCard = useFetchPairCard(dataFetchDeskID, isModePlay);
  const [cards, setCards] = useState<any[]>([]);

  useEffect(() => {
    const data: any = fetchPairCard?.data?.data;
    if (data?.cards.length) setCards(data.cards);
    // return () => {
    //   cleanup;
    // };
  }, [isModePlay, fetchPairCard?.data?.data]);

  const onHandlePlay = () => {
    setBalance((prev) => { return prev - bidAmount; });
    setSelectedCard(null);
    setWinner(null);
    return setIsModePlay((prev) => {
      return !prev;
    });
  };
  const definedWinner = (chosenCard: number) => {
    const selectedCard = cards[chosenCard]?.value;
    const otherCard = cards.filter((_, index) => { return index !== chosenCard; })[0]?.value;
    return valueCards[selectedCard] > valueCards[otherCard];
  };

  const onHandleCard = (chosenCard: number) => {
    const isWinnner = definedWinner(chosenCard);
    setWinner(isWinnner);
    setBalance((prev) => { return (isWinnner ? prev + bidAmount * 2 : prev); });
    setSelectedCard(namesCards[chosenCard]);
    setIsModePlay((prev) => {
      return !prev;
    });
  };

  const leftCard = <img src={cards.length && cards[optionChooseCards.Left]?.image} alt="card" />;
  const rightCard = useMemo(() => { return <img src={cards.length && cards[optionChooseCards.Right]?.image} alt="card" />; }, [cards]);
  const resultText = typeof winner === 'boolean' && winner ? `Вы выйграли ${bidAmount * 2}$` : `Вы проиграли ${bidAmount}`;

  const buttonPlay = !isModePlay ? (
    <Button
      size="large"
      color="primary"
      variant="contained"
      content={typeof isModePlay === 'boolean' ? 'Сыграем еще' : 'Играть'}
      onClick={onHandlePlay}
    />
  ) : null;

  const playButtons = fetchPairCard?.isFetching ? (
    'Loading ...'
  ) : (
    <>
      <Button
        size="large"
        color="primary"
        variant="contained"
        content="Слева"
        onClick={() => {
          return onHandleCard(optionChooseCards.Left);
        }}
      />
      <Divider orientation="vertical" className={classes.divider} />
      <Button
        size="large"
        color="primary"
        variant="contained"
        content="Справа"
        onClick={() => {
          return onHandleCard(optionChooseCards.Right);
        }}
      />
    </>
  );

  return (
    <>
      <Typography className={classes.balance} variant="h5">
        {`Balance: ${balance}$`}
      </Typography>
      <div className={classes.containerPlay}>
        <Typography variant="h3">
          { typeof winner === 'boolean' ? resultText : 'Кто выйграет?'}
        </Typography>
        <Typography variant="body1">
          {typeof winner === 'boolean'
            ? 'Сыграй в игру еще раз'
            : 'Сыграй в игру и испытай удачу'}
        </Typography>
        <Grid container item xs={12} justifyContent="center">
          <Grid item xs={11} sm={8} className={classes.containerCards}>
            {!selectedCard ? (
              <div className={classes.card}>
                <span className={classes.questionMark}>?</span>
              </div>
            ) : (
              leftCard
            )}
            <div className={classes.buttons}>
              {buttonPlay}
              {isModePlay && playButtons}
            </div>
            {!selectedCard ? (
              <div className={classes.card}>
                <span className={classes.questionMark}>?</span>
              </div>
            ) : (
              rightCard
            )}
          </Grid>
        </Grid>
      </div>
    </>
  );
}
