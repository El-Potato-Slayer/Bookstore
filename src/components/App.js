import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

function App() {
  return (
    <div className="flex flex-col">
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
