import React, { useState, useEffect, useMemo } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Grid, Typography, Divider, useMediaQuery } from '@material-ui/core';
import { Button } from '../../UI';
import useStyles from './styles';
import { useFetchPairCard } from '../../hooks/react-query';
import { optionChooseCards } from '../../enum';
import { bidAmount, namesCards, valueCards } from '../../constants';
import useStore from '../../store';

export default function Play({ deskID }: { deskID: any }) {
	const theme = useTheme();
	const mobile = useMediaQuery(theme.breakpoints.down('sm'));
	const [winner, setWinner] = useState<boolean | null>(null);
	const [isModePlay, setIsModePlay] = useState<boolean | null>(null);
	const [selectedCard, setSelectedCard] = useState<string | null>(null);
	const [cards, setCards] = useState<any[]>([]);
	const { balance, payForPlay, incrementBalance, updateRemainingCards } = useStore();
	const fetchPairCard = useFetchPairCard(deskID, isModePlay);
	const classes = useStyles({ isModePlay });

	const { isLoading, data: { cards: currentCard = [], remaining = null } = {} } = fetchPairCard;

	useEffect(() => {
		if (currentCard.length) {
			setCards(currentCard);
			updateRemainingCards(remaining);
		}
	}, [currentCard, remaining]);

	const onHandlePlay = () => {
		payForPlay(bidAmount);
		setSelectedCard(null);
		setWinner(null);
		return setIsModePlay((prev) => !prev);
	};
	const definedWinner = (chosenCard: number) => {
		const card = cards[chosenCard]?.value;
		const otherCard = cards.filter((_, index) => index !== chosenCard)[0]?.value;
		return valueCards[card] > valueCards[otherCard];
	};

	const onHandleCard = (chosenCard: number) => {
		const isWinner = definedWinner(chosenCard);
		setWinner(isWinner);
		if (isWinner) incrementBalance(bidAmount * 2);
		setSelectedCard(namesCards[chosenCard]);
		setIsModePlay((prev) => !prev);
	};

	const leftCard = <img src={cards.length && cards[optionChooseCards.Left]?.image} alt="card" />;
	const rightCard = useMemo(() => <img src={cards.length && cards[optionChooseCards.Right]?.image} alt="card" />, [cards]);
	const resultText = typeof winner === 'boolean' && winner ? `Вы выйграли ${bidAmount * 2}$` : `Вы проиграли ${bidAmount}$`;

	const buttonPlay = !isModePlay ? (
		<Button
			type="button"
			size="large"
			color="primary"
			variant="contained"
			content={typeof isModePlay === 'boolean' ? 'Сыграем еще' : 'Играть'}
			onClick={onHandlePlay}
		/>
	) : null;

	const selectionButtons = (
		<>
			<Button
				type="button"
				size="large"
				color="primary"
				variant="contained"
				content={mobile ? 'Сверху' : 'Слева'}
				onClick={() => onHandleCard(optionChooseCards.Left)}
			/>
			<Divider orientation="vertical" className={classes.divider} />
			<Button
				type="button"
				size="large"
				color="primary"
				variant="contained"
				content={mobile ? 'Снизу' : 'Справа'}
				onClick={() => onHandleCard(optionChooseCards.Right)}
			/>
		</>
	);

	const gameOver = balance < bidAmount && winner === false;

	const content = (
		<>
			<div className={classes.card}>
				{!selectedCard ? <span className={classes.questionMark}>?</span> : leftCard}
			</div>
			<div className={classes.buttons}>
				{gameOver
					&& <Typography variant="h5" align="center">Game over! <br /> Вы проиграли ...</Typography>}
				{isLoading
					? <Typography align="center">Loading...</Typography>
					: (
						<>
							{!gameOver && buttonPlay}
							{isModePlay && selectionButtons}
						</>
					)}
			</div>
			<div className={classes.card}>
				{!selectedCard ? <span className={classes.questionMark}>?</span> : rightCard}
			</div>

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
						{content}
					</Grid>
				</Grid>
			</div>
		</>
	);
}
