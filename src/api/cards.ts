import api from './config';
import { countCardsInPlay } from '../constants';

export const getNewDeskID = async () => api.get('/new/shuffle/?deck_count=1');

export const getPairCard = async (deckID: string) => api.get(`${deckID}/draw/?count=${countCardsInPlay}`);
