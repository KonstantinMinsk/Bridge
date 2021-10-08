import { optionChooseCards } from './enum';

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
//   1: 'Пользователь заблокирован',
//   2: 'Неверное имя пользователя или пароль',
//   3: 'Пользователь с такими данными не существует',
//   4: 'Пользователь с такими данными уже зарегистрирован',
//   13: 'Ошибка при изменении данных пользователя',
//   17: 'Email пользователя не подтверждён',
//   18: 'Токен подтверждения email\'a истек'
// };

export const namesCards: { [index: number]: string } = {
  [optionChooseCards.Left]: 'Left',
  [optionChooseCards.Right]: 'Right',
};
