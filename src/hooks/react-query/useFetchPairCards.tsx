/* eslint-disable no-undef */
import { useQuery } from 'react-query';
import { apiCards } from '../../api';

const useFetchPairCard = (idDesk: string, isModePlay: boolean | null) => {
	const queryInfo = useQuery('pairCards', () => apiCards.getPairCard(idDesk), {
		enabled: !!isModePlay,
	});

	return queryInfo;
};

export default useFetchPairCard;
