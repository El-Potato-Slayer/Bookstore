import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import Navbar from './Navbar';

function App() {
  return (
    <div className="bg-panel">
      <Navbar />
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
