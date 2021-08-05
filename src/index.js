import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './store/reducers';

const initialState = [
  {
    id: Date.now() + 1,
    title: 'book1',
    category: 'Action',
  },
  {
    id: Date.now() + 2,
    title: 'book2',
    category: 'Biography',
  },
  {
    id: Date.now() + 3,
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
