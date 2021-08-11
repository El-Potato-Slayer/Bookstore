import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { uuid } from 'uuidv4';
import { createBook } from '../store/actions';

function BooksForm() {
  const categories = [
    'Categories',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  const [book, setBook] = useState({
    id: uuid(),
    title: null,
    category: categories[0],
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createBook(book));
    setBook({ id: null, title: null, category: categories[0] });
    event.target.reset();
  };

  return (
    <div className="flex flex-col border-t-4 mt-4 w-11/12 m-auto pt-8 mb-12">
      <h2 className="text-gray-500 text-xl font-bold montserrat mb-6">
        ADD NEW BOOK
      </h2>
      <form onSubmit={handleSubmit} className="flex">
        <label htmlFor="title" className="w-7/12">
          <input
            placeholder="Book title"
            type="text"
            className="p-4 w-full"
            name="title"
            id="title"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="categories" className="flex-1 mx-8">
          <select
            className="p-4 bg-white w-full"
            name="category"
            id="category"
            onChange={handleChange}
          >
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        <input className="flex-1 bg_azure text-white robotoSlab" type="submit" value="ADD BOOK" />
      </form>
    </div>
  );
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(BooksForm);
