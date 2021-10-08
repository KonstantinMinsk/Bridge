import api from './config';

export const getNewDeskID = async () => { return api.get('/new/shuffle/?deck_count=1'); };

export const getPairCard = async (data: any) => {
  const deckID = data?.deck_id;
  return api.get(`${deckID}/draw/?count=2`);
};
