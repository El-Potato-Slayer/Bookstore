import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../store/actions';

function BooksList(props) {
  const { books } = props;
  const handleRemoveBook = (book) => {
    removeBook(book);
  };
  return (
    <table>
      {
        books.map((book) => (
          <tr key={book.id}>
            <Book key={book.id} book={book} removeBook={handleRemoveBook(book)} />
            <td>
              <button type="button" onClick={handleRemoveBook(book)}>Remove</button>
            </td>
          </tr>
        ))
      }
    </table>
  );
}

const mapStateToProps = (state) => ({
  books: state.booksReducer,
});

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps)(BooksList);
