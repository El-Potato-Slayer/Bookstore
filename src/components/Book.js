import React from 'react';
import PropTypes from 'prop-types';

function Book({ book, removeBook }) {
  console.log(book, removeBook);
  return (
    <article className="Lesson-Panel flex justify-center items-center">
      <div className="flex flex-col flex-2">
        <span className="School-of Text-Style-8">Action</span>
        <span className="Title Text-Style-6">The Hunger Games</span>
        <span className="Suzanne-Collins">Suzanne Collins</span>
        <div>
          <span className="Comments">Comments</span>
          <span className="Remove">Remove</span>
          <span className="Edit">Edit</span>
        </div>
      </div>

      <div className="flex-1">s</div>
      <div className="flex-1">d</div>
    </article>
    //   <td>
    //     {book.id}
    //   </td>
    //   <td>
    //     {book.title}
    //   </td>
    //   <td>
    //     {book.category}
    //   </td>
    //   <td>
    //     <button type="button" onClick={() => removeBook(book)}>Remove</button>
    //   </td>
    // <div/>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
