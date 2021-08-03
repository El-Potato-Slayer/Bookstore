import * as types from '../types';

// eslint-disable-next-line import/prefer-default-export
export const createBook = (book) => ({
  type: types.CREATE_BOOK,
  book,
});

export const removeBook = (book) => ({
  type: types.CREATE_BOOK,
  book,
});
