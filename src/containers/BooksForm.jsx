/* eslint-disable react/prefer-stateless-function */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { connect } from 'react-redux';

export class BooksForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">
          Title
          <input type="text" name="title" id="title" />
        </label>
        <label htmlFor="categories">
          Categories
          <select name="categories" id="categories">
            <option value="action">Action</option>
            <option value="biography">Biography</option>
            <option value="history">History</option>
            <option value="horror">Horror</option>
            <option value="kids">Kids</option>
            <option value="learning">Learning</option>
            <option value="scifi">Sci-Fi</option>
          </select>
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(BooksForm);
