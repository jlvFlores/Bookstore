import { useSelector } from 'react-redux';
import Book from './Book';
import InputBook from './InputBook';

const Bookstore = () => {
  const { books } = useSelector((store) => store.books);
  return (
    <>
      <header>
        <nav>
          <h1>Bookstore</h1>
          <ul>
            <li><a href="./">Home</a></li>
            <li><a href="./Categories">Categories</a></li>
          </ul>
        </nav>
        <img className="profile" src="./profile.svg" alt="profile" />
      </header>
      <section className="books">
        {books.map((book) => (
          <Book
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </section>
      <section>
        <InputBook />
      </section>
    </>
  );
};

export default Bookstore;
