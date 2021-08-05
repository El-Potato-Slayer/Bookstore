import * as types from '../types';

// eslint-disable-next-line import/prefer-default-export
export const booksReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.CREATE_BOOK:
      return [...state, payload.book];
    case types.REMOVE_BOOK:
      return { ...state, ...payload };

    default:
      return state;
  }
};
