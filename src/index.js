import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { createStore } from 'redux';
import { uuid } from 'uuidv4';
import App from './components/App';
import rootReducer from './store/reducers';

const initialState = [
  {
    id: uuid(),
    title: 'book1',
    category: 'Action',
  },
  {
    id: uuid(),
    title: 'book2',
    category: 'Biography',
  },
  {
    id: uuid(),
    title: 'book3',
    category: 'Horror',
  },
];

const store = createStore(rootReducer, initialState);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
