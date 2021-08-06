import { combineReducers } from 'redux';
import { booksReducer } from './booksReducer';
import filterReducer from './filter';

export default combineReducers({ booksReducer, filterReducer });
