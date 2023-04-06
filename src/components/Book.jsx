import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, removeBookRequest } from '../redux/books/booksSlice';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeBook(id));
    dispatch(removeBookRequest());
  };

  return (
    <div className="book-con">
      <div className="book-info">
        <h4>{category}</h4>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <div className="options">
          <button type="button" className="book-btn">Comments</button>
          <span className="horizontal-line" />
          <button type="button" className="book-btn" onClick={handleClick}>Remove</button>
          <span className="horizontal-line" />
          <button type="button" className="book-btn">Edit</button>
        </div>
      </div>
      <div className="book-completion">
        <div className="middle-con">
          <svg className="wheel">
            <circle className="bg" cx="40" cy="40" r="35" />
            <circle className="meter" cx="40" cy="40" r="35" />
          </svg>
          <div className="percentage-con">
            <span className="percentage-text">18%</span>
            <span>Completed</span>
          </div>
          <div className="horizontal-line" />
        </div>
        <div className="chapter-con">
          <div>
            <span className="current-chapter">CURRENT CHAPTER</span>
            <br />
            <span className="chapter">Chapter: 4</span>
          </div>
          <br />
          <button type="button" className="blue-btn">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.instanceOf(String).isRequired,
  title: PropTypes.instanceOf(String).isRequired,
  category: PropTypes.instanceOf(String).isRequired,
  author: PropTypes.instanceOf(String).isRequired,
};

export default Book;
