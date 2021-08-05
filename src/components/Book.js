import React from 'react';
import PropTypes from 'prop-types';

function Book({ book }) {
  return (
    <table>
      <tr>
        <td>
          {book.id}
        </td>
        <td>
          {book.title}
        </td>
        <td>
          {book.category}
        </td>
      </tr>
    </table>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
