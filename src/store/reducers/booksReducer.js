import * as types from '../types';

const initialState = [
  {
    id: Date.now() + 1,
    title: 'book1',
    category: 'Action',
  },
  {
    id: Date.now() + 2,
    title: 'book2',
    category: 'Biography',
  },
  {
    id: Date.now() + 3,
    title: 'book3',
    category: 'Horror',
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
