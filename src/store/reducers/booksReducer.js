import { uuid } from 'uuidv4';

const initialState = {
  books: [
    {
      id: uuid(),
      title: "Harry Potter And The Philosopher's Sock",
      category: 'Action',
    },
    {
      id: uuid(),
      title: 'The Chronicles of Nicki Minaj',
      category: 'Biography',
    },
    {
      id: uuid(),
      title: 'Martyr, a French Love Story',
      category: 'Horror',
    },
  ],
};

// eslint-disable-next-line import/prefer-default-export
export const booksReducer = (state = initialState, { type, book }) => {
  switch (type) {
    case 'CREATE_BOOK':
      return { ...state, books: [...state.books, book] };
    case 'REMOVE_BOOK':
      return { ...state, books: state.books.filter((bookSelected) => bookSelected.id !== book.id) };

    default:
      return state;
  }
};
