import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

class BooksList extends Component {
  render() {
    const { books } = this.props;
    return books.map((singleBook) => (
      <Book key={singleBook.uniqueId} book={singleBook} />
    ));
  }
}

const mapStateToProps = (state) => ({
  books: state.booksReducer,
});

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps)(BooksList);
