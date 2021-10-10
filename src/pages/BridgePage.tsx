/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import Play from '../components/Play';
import { useFetchDeskID } from '../hooks/react-query';
import Spinner from '../components/Spinner';
import useStore from '../store';
import { countCardsInPlay } from '../constants';

const BridgePage = () => {
	const fetchDeskID = useFetchDeskID();
	const { remainingCards } = useStore();

	const { isLoading, refetch, data: { deck_id } = {} } = fetchDeskID;

	useEffect(() => {
		if (remainingCards !== null && remainingCards < countCardsInPlay) {
			refetch();
		}
	}, [remainingCards, countCardsInPlay]);

	return isLoading ? (
		<Spinner />
	) : (
		<Play deskID={deck_id} />
	);
};
export default BridgePage;
