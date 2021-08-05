const CREATE_BOOK = 'CREATE_BOOK;';
const REMOVE_BOOK = 'REMOVE_BOOK;';
// eslint-disable-next-line import/prefer-default-export
export const booksReducer = (state = [], { type, payload }) => {
  switch (type) {
    case CREATE_BOOK:
      return [...state, payload.book];
    case REMOVE_BOOK:
      return { ...state, ...payload };

    default:
      return state;
  }
};
