/* eslint-disable comma-dangle */
import { useQuery } from 'react-query';
import apiCards from '../../api';

const useFetchPairCard = (data: any, isModePlay: boolean | null) => {
  const pairCards = useQuery(
    'pairCards',
    () => {
      return apiCards.getPairCard(data);
    },
    {
      enabled: !!isModePlay,
    }
  );
  return pairCards;
};

export default useFetchPairCard;
