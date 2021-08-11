import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Book({ book, removeBook }) {
  console.log(book, removeBook);
  return (
    <article className="border bg-white flex justify-center items-center px-8 pt-6 pb-3 mb-4">
      <div className="flex flex-col flex-none w-2/6">
        <span className="montserrat font-semibold text-gray-700">
          {book.category}
        </span>
        <span className="robotoSlab font-bold md:text-2xl break-words text:xl my-1">
          {book.title}
        </span>
        <span className="robotoSlab text-sm text-blue-400">
          Suzanne Collins
        </span>
        <div className="flex robotoSlab my-3 text-blue-300">
          <span className="pr-3">Comments</span>
          <button
            type="button"
            className="border-r border-l px-4"
            onClick={() => removeBook(book)}
          >
            Remove
          </button>
          <span className="pl-4">Edit</span>
        </div>
      </div>

      <div className="flex-1 border-r pr-8">
        <div className="flex items-center">
          <CircularProgressbar className="h-16" value="64" />
          <div className="flex flex-col -m-28">
            <span className="montserrat black_two text-lg font-semibold">
              64%
            </span>
            <span className="montserrat black_two">Completed</span>
          </div>
        </div>
      </div>
      <div className="flex-1 pl-8 flex flex-col">
        <span className="text-gray-400 robotoSlab">Current Chapter</span>
        <span className="mt-2 mb-4 robotoSlab">Chapter 17</span>
        <button
          type="button"
          className="bg_azure w-48 text-white text-sm p-1 rounded-md robotoSlab"
        >
          UPDATE PROGRESS
        </button>
      </div>
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
