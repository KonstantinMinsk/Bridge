import api from './config';
import { countCardsInPlay } from '../constants';

export const getNewDeskID = async () => api.get('/new/shuffle/?deck_count=1');

export const getPairCard = async (data: any) => {
	const deckID = data?.deck_id;
	return api.get(`${deckID}/draw/?count=${countCardsInPlay}`);
};
