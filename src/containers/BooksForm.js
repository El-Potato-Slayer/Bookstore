import React, { useState } from 'react';
import { connect } from 'react-redux';
import { uuid } from 'uuidv4';
import { createBook } from '../store/actions';

function BooksForm() {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Kids', 'Learning', 'Sci-Fi'];
  const [book, setBook] = useState({ id: null, title: null, category: categories[0] });

  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBook({ id: uuid(), ...book });
    createBook(book);
    setBook({ id: null, title: null, category: categories[0] });
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title
        <input type="text" name="title" id="title" onChange={handleChange} />
      </label>
      <label htmlFor="categories">
        Categories
        <select name="category" id="category" onChange={handleChange}>
          {
              categories.map((category) => (
                <option value={category} key={category}>
                  {category}
                </option>
              ))
            }
        </select>
      </label>

      <input type="submit" value="Submit" />
    </form>
  );
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(BooksForm);
