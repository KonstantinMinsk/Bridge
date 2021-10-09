import React from 'react';
import Play from '../components/Play';
import { useFetchDeskID } from '../hooks/react-query';
import Spinner from '../components/Spinner';
import useStore from '../store';
import { countCardsInPlay } from '../constants';

const BridgePage = () => {
	const { isLoading, data }: any = useFetchDeskID();
	const { remainingCards } = useStore();

	const deskID: string = remainingCards !== null && remainingCards < countCardsInPlay ? 'new' : data?.data?.deck_id;

	return isLoading ? (
		<Spinner />
	) : (
		<Play deskID={deskID} />
	);
};
export default BridgePage;
