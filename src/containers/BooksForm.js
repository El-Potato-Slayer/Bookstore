import React, { Component } from 'react';
import { connect } from 'react-redux';

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Kids', 'Learning', 'Sci-Fi'],
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    const { categories } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">
          Title
          <input type="text" name="title" id="title" />
        </label>
        <label htmlFor="categories">
          Categories
          <select name="categories" id="categories">
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
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(BooksForm);
