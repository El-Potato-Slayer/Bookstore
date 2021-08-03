import * as types from '../types';

const initialState = [
  {
    title: 'something',
    categories: ['1', '2'],
  },
];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.CREATE_BOOK:
      return [...state, payload.book];
    case types.REMOVE_BOOK:
      return { ...state, ...payload };

    default:
      return state;
  }
};
