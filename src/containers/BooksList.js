/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

// eslint-disable-next-line react/prefer-stateless-function
class BooksList extends Component {
  render() {
    const { books } = this.props;
    console.log(books);
    // eslint-disable-next-line react/jsx-key
    return books.map((singleBook) => (
      <Book key={singleBook.uniqueId} book={singleBook} />
    ));
  }
}

const mapStateToProps = (state) => ({
  books: state.booksReducer,
});

export default connect(mapStateToProps)(BooksList);
