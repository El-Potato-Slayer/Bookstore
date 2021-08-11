import React from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { changeFilter, removeBook } from '../store/actions';
import CategoryFilter from './CategoryFilter';

function BooksList(props) {
  const { books, currentCat } = props;

  const dispatch = useDispatch();
  const handleRemoveBook = (book) => {
    dispatch(removeBook(book));
  };

  const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  const filteredBooks = () => {
    let currentBooks = [];
    if (currentCat.toLowerCase() !== 'all') {
      currentBooks = books.filter((book) => book.category === currentCat);
    } else {
      currentBooks = books;
    }
    return currentBooks;
  };

  return (
    <div>
      <CategoryFilter handleFilter={handleFilterChange} />
      <table className="w-11/12 m-auto">
        {filteredBooks().map((book) => (
          <tr key={book.id}>
            <Book key={book.id} book={book} removeBook={handleRemoveBook} />
          </tr>
        ))}
      </table>
    </div>
  );
}

const mapStateToProps = (state) => ({
  books: state.booksReducer.books,
  currentCat: state.filterReducer.category,
});

const mapDispatchToProps = {
  removeBook,
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  currentCat: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
