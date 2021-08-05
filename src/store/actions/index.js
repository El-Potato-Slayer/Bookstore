import PropTypes from 'prop-types';
import * as types from '../types';

export const createBook = (book) => ({
  type: types.CREATE_BOOK,
  book,
});

export const removeBook = (book) => ({
  type: types.CREATE_BOOK,
  book,
});

createBook.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }),
};

createBook.defaultProps = {
  book: {},
};

removeBook.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }),
};

removeBook.defaultProps = {
  book: {},
};
