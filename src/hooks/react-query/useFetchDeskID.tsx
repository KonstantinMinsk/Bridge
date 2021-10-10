import { useQuery } from 'react-query';
import { apiCards } from '../../api';

const useFetchDeskID = () => {
	const queryInfo = useQuery('newDeskID', apiCards.getNewDeskID);

	return queryInfo;
};

export default useFetchDeskID;
