import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, addBookRequest } from '../redux/books/booksSlice';

const InputBook = () => {
  const dispatch = useDispatch();

  const [message, setMessage] = useState('');
  const [bookInfo, setbookInfo] = useState({
    title: '',
    author: '',
    category: 'Fiction',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setbookInfo({
      ...bookInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookInfo.title !== '' && bookInfo.author !== '') {
      dispatch(addBook(bookInfo));
      dispatch(addBookRequest());
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
      <span className="form-message">{message}</span>
      <form onSubmit={handleSubmit}>
        <h3 className="input-title">ADD NEW BOOK</h3>
        <div className="add-book-form">
          <input name="title" type="text" placeholder="Book title" value={bookInfo.title} onChange={handleChange} />
          <input name="author" type="text" placeholder="Book author" value={bookInfo.author} onChange={handleChange} />
          <select name="category" value={bookInfo.category} onChange={handleChange}>
            <option value="Fiction">Fiction</option>
            <option value="Nonfiction">Nonfiction</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Horror Fiction">Horror Fiction</option>
          </select>
          <button type="submit" className="blue-btn">ADD BOOK</button>
        </div>
      </form>
    </>
  );
};

export default InputBook;
