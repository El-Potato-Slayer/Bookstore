import React from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../store/actions';

function BooksList(props) {
  const { books } = props;
  const dispatch = useDispatch();
  const handleRemoveBook = (book) => {
    dispatch(removeBook(book));
  };
  return (
    <table>
      {
        books.map((book) => (
          <tr key={book.id}>
            <Book key={book.id} book={book} removeBook={handleRemoveBook} />
          </tr>
        ))
      }
    </table>
  );
}

const mapStateToProps = (state) => ({
  books: state.booksReducer.books,
});

const mapDispatchToProps = {
  removeBook,
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
