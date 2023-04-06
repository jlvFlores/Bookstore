import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import InputBook from './InputBook';
import { getBooksRequest } from '../redux/books/booksSlice';
import profile from '../assets/profile.png';

const Bookstore = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((store) => store.books);

  useEffect(() => {
    dispatch(getBooksRequest());
  }, [dispatch]);

  return (
    <>
      <header>
        <nav>
          <h1>Bookstore CMS</h1>
          <ul>
            <li><a href="./">Home</a></li>
            <li><a href="./Categories">Categories</a></li>
          </ul>
        </nav>
        <img className="profile" src={profile} alt="profile" />
      </header>
      <section className="books">
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
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
