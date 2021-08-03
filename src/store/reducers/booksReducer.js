import * as types from '../types';

const initialState = [
  {
    uniqueId: Date.now() + 1,
    title: 'book1',
    categories: ['1', '2'],
  },
  {
    uniqueId: Date.now() + 2,
    title: 'book2',
    categories: ['1', '2'],
  },
  {
    uniqueId: Date.now() + 3,
    title: 'book3',
    categories: ['1', '2'],
  },
];

// eslint-disable-next-line import/prefer-default-export
export const booksReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.CREATE_BOOK:
      return [...state, payload.book];
    case types.REMOVE_BOOK:
      return { ...state, ...payload };

    default:
      return state;
  }
};
