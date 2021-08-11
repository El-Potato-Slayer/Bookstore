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
    <div className="header flex justify-between items-center border">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          <input type="text" name="title" id="title" onChange={handleChange} />
        </label>
        <label htmlFor="categories" className="CATEGORIES">
          <select name="category" id="category" onChange={handleChange}>
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(BooksForm);
