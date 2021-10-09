import { useQuery } from 'react-query';
import { apiCards } from '../../api';

const useFetchPairCard = (idDesk: string, isModePlay: boolean | null) => {
	const pairCards = useQuery(['pairCards', idDesk], () => apiCards.getPairCard(idDesk), {
		enabled: !!isModePlay,
	});
	return pairCards;
};

export default useFetchPairCard;
