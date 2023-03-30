import { useState } from 'react';
import PropTypes from 'prop-types';

const InputBook = ({ addBook }) => {
  const [message, setMessage] = useState('');
  const [bookInfo, setbookInfo] = useState({
    title: '',
    author: '',
    genre: '',
  });

  const titleInput = document.querySelector('[name="title"]');
  const authorInput = document.querySelector('[name="author"]');
  const genreInput = document.querySelector('[name="genre"]');
  const handleChange = () => {
    setbookInfo({
      title: titleInput.value,
      author: authorInput.value,
      genre: genreInput.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookInfo.title !== '' && bookInfo.author !== '') {
      addBook(bookInfo.title, bookInfo.author, bookInfo.genre);
      setbookInfo({
        title: '',
        author: '',
      });
      setMessage('');
    } else {
      setMessage('Please fill out all fields.');
    }
  };

  return (
    <>
      <span>{message}</span>
      <form onSubmit={handleSubmit}>
        <h3>ADD NEW BOOK</h3>
        <div className="add-book-form">
          <input name="title" type="text" placeholder="Book title" value={bookInfo.title} onChange={handleChange} />
          <input name="author" type="text" placeholder="Book author" value={bookInfo.author} onChange={handleChange} />
          <select name="genre" value={bookInfo.genre} onChange={handleChange}>
            <option value="Action">Action</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Economy">Economy</option>
            <option value="Adventure">Adventure</option>
          </select>
          <button type="submit">ADD BOOK</button>
        </div>
      </form>
    </>
  );
};

InputBook.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default InputBook;
