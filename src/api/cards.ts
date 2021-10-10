/* eslint-disable no-undef */
import api from './config';
import { countCardsInPlay } from '../constants';

export const getNewDeskID = async () => api.get<TDataDeskID>('/new/shuffle/?deck_count=1').then(({ data }) => data);

export const getPairCard = async (deckID: string) => api.get<TDataPairCard>(`${deckID}/draw/?count=${countCardsInPlay}`).then(({ data }) => data);
