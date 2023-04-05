import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = (props) => {
  const {
    id, title, author, category,
  } = props;
  const dispatch = useDispatch();
  return (
    <div className="book-con">
      <div className="book-info">
        <h4>{category}</h4>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <div>
          <button type="button" className="book-btn">Comments</button>
          <button type="button" className="book-btn" onClick={() => dispatch(removeBook(id))}>Remove</button>
          <button type="button" className="book-btn">Edit</button>
        </div>
      </div>
      <div className="book-completion">
        <div className="percentage">
          18%
          <br />
          Completed
        </div>
        <div className="chapter">
          Current Chapter
          <br />
          chapter: 17
          <br />
          <button type="button">UPDATE PROGRESS</button>
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
