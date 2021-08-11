import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import '../index.css';

function App() {
  return (
    <div>
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
