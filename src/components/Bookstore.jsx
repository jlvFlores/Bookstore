import { useState } from 'react';
import Book from './Book';
import InputBook from './InputBook';

const Bookstore = () => {
  const [books, setBooks] = useState([
    {
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      genre: 'Action',
      percentage: 64,
      chapter: 'Chapter 17',
    },
    {
      title: 'Dune',
      author: 'Frank Herbert',
      genre: 'Science Fiction',
      percentage: 8,
      chapter: 'Chapter 3: "A Lesson Learned"',
    },
    {
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      genre: 'Economy',
      percentage: 0,
      chapter: 'Introduction',
    },
  ]);

  const addBook = (title, author, genre) => {
    const newBook = {
      title,
      author,
      genre,
      percentage: 0,
      chapter: 'Not opened yet',
    };
    setBooks([...books, newBook]);
  };

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
            key={book.title}
            title={book.title}
            author={book.author}
            genre={book.genre}
            percentage={book.percentage}
            chapter={book.chapter}
            update={setBooks}
          />
        ))}
      </section>
      <section>
        <InputBook addBook={addBook} />
      </section>
    </>
  );
};

export default Bookstore;
