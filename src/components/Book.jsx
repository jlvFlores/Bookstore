import PropTypes from 'prop-types';

const Book = ({
  title, author, genre, percentage, chapter, update,
}) => (
  <div className="book-con">
    <div className="book-info">
      <h4>{genre}</h4>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>Comments | Remove | Edit</p>
    </div>
    <div className="book-completion">
      <div className="percentage">
        {`${percentage}%`}
        <br />
        Completed
      </div>
      <div className="chapter">
        Current Chapter
        <br />
        {chapter}
        <br />
        <button type="button" onClick={() => { update(); }}>UPDATE PROGRESS</button>
      </div>
    </div>
  </div>
);

Book.propTypes = {
  title: PropTypes.instanceOf(String).isRequired,
  genre: PropTypes.instanceOf(String).isRequired,
  author: PropTypes.instanceOf(String).isRequired,
  percentage: PropTypes.instanceOf(Number).isRequired,
  chapter: PropTypes.instanceOf(String).isRequired,
  update: PropTypes.func.isRequired,
};

export default Book;
