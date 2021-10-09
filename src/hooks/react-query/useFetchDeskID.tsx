import { useQuery } from 'react-query';
import { apiCards } from '../../api';

const useFetchDeskID = () => {
	const result = useQuery('newDeskID', apiCards.getNewDeskID);
	return result;
};

export default useFetchDeskID;
