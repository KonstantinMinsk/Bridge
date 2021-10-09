import { optionChooseCards } from './enum';

export const countCardsInPlay: number = 2;

export const userErrors: { [key: number]: string } = {
	0: 'Имя пользователя или пароль введены не верно',
};

export const bidAmount = 5;

export const valueCards: { [index: string]: number } = {
	2: 2,
	3: 3,
	4: 4,
	5: 5,
	6: 6,
	7: 7,
	8: 8,
	9: 9,
	10: 10,
	JACK: 20,
	QUEEN: 30,
	KING: 50,
	ACE: 100,
};

// export const userMotivationText { [key: number]: string } = {
//   0: 'Неизвестная ошибка, пожалуйста, попробуйте ещё раз',
// };

export const namesCards: { [index: number]: string } = {
	[optionChooseCards.Left]: 'Left',
	[optionChooseCards.Right]: 'Right',
};
