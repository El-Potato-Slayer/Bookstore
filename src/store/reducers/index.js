import { combineReducers } from 'redux';
import { booksReducer } from './booksReducer';
import filterReducer from './filterReducer';

export default combineReducers({ booksReducer, filterReducer });
