/* eslint-disable camelcase */
import React from 'react';
import Play from '../components/Play';
import { useFetchDeskID } from '../hooks/react-query';
import Spinner from '../components/Spinner';
import useStore from '../store';
import { countCardsInPlay } from '../constants';

const BridgePage = () => {
	const fetchDeskID = useFetchDeskID();
	const { remainingCards } = useStore();

	const { isLoading, data: { deck_id } = {} } = fetchDeskID;

	const deskID: string | undefined = remainingCards !== null && remainingCards < countCardsInPlay ? 'new' : deck_id;

	return isLoading ? (
		<Spinner />
	) : (
		<Play deskID={deskID} />
	);
};
export default BridgePage;
