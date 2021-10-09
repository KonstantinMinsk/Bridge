import React from 'react';
import Play from '../components/Play';
import { useFetchDeskID } from '../hooks/react-query';
import Spinner from '../components/Spinner';
import useStore from '../store';
import { countCardsInPlay } from '../constants';

const BridgePage = () => {
	const queryInfo = useFetchDeskID();
	const { remainingCards } = useStore();

	const dataFetchDeskID = queryInfo.data?.data;
	const deskID = remainingCards && remainingCards <= countCardsInPlay ? 'new' : dataFetchDeskID;
	if (remainingCards !== null && remainingCards < 2) console.log(remainingCards);

	if (deskID === 'new') console.log(deskID);


	return queryInfo.isLoading ? (
		<Spinner />
	) : (
		<Play deskID={deskID} />
	);
};
export default BridgePage;
