import React, { useState, useEffect, useMemo } from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography, Divider } from '@material-ui/core';
import { Button } from '../../UI';
import useStyles from './styles';
import { useFetchPairCard } from '../../hooks/react-query';
import { optionChooseCards } from '../../enum';
import { bidAmount, namesCards, valueCards } from '../../constants';
import useStore from '../../store';

export default function Play({ deskID }: { deskID: any }) {
	const { balance, payForPlay, incrementBalance } = useStore();
	const [winner, setWinner] = useState<boolean | null>(null);
	const [isModePlay, setIsModePlay] = useState<boolean | null>(null);
	const [selectedCard, setSelectedCard] = useState<string | null>(null);
	const classes = useStyles({ isModePlay });
	const fetchPairCard = useFetchPairCard(deskID, isModePlay);
	const { remainingCards, updateRemainingCards } = useStore();
	const [cards, setCards] = useState<any[]>([]);

	if (!remainingCards) console.log(fetchPairCard);

	useEffect(() => {
		const data: any = fetchPairCard?.data?.data;
		if (data?.cards.length) {
			setCards(data.cards);
			updateRemainingCards(data.remaining);
		}
	}, [isModePlay, fetchPairCard?.data?.data, updateRemainingCards]);

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
		const isWinnner = definedWinner(chosenCard);
		setWinner(isWinnner);
		if (isWinnner) incrementBalance(bidAmount * 2);
		setSelectedCard(namesCards[chosenCard]);
		setIsModePlay((prev) => !prev);
	};

	const leftCard = <img src={cards.length && cards[optionChooseCards.Left]?.image} alt="card" />;
	const rightCard = useMemo(() => <img src={cards.length && cards[optionChooseCards.Right]?.image} alt="card" />, [cards]);
	const resultText = typeof winner === 'boolean' && winner ? `Вы выйграли ${bidAmount * 2}$` : `Вы проиграли ${bidAmount}`;

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

	const playButtons = (
		<>
			<Button
				type="button"
				size="large"
				color="primary"
				variant="contained"
				content="Слева"
				onClick={() => onHandleCard(optionChooseCards.Left)}
			/>
			<Divider orientation="vertical" className={classes.divider} />
			<Button
				type="button"
				size="large"
				color="primary"
				variant="contained"
				content="Справа"
				onClick={() => onHandleCard(optionChooseCards.Right)}
			/>
		</>
	);

	if (fetchPairCard.isError) {
		return <Typography>`${fetchPairCard.error}`</Typography>;
	}

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
							{/* {remainingCards !== null && remainingCards < countCardsInPlay
								&& <Typography variant="h5">Тусуем колоду. Пожалуйста, подождите ...</Typography>} */}
							{fetchPairCard.isLoading ? <Typography align="center">Loading...</Typography>
								: (
									<>
										{buttonPlay}
										{isModePlay && playButtons}
									</>
								)}
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
