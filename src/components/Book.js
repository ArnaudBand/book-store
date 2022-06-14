import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/book/book';

const Book = ({
  id, category, title, author,
}) => {
  const dispatch = useDispatch();

  const handleClick = (e, bookId) => {
    e.preventDefault();
    dispatch(removeBook(bookId));
  };

  return (
    <div className="container flex">
      <div key={id} className="card">
        <div className="topics">{category}</div>
        <div className="title fonts">{title}</div>
        <div className="author">{author}</div>
        <div className="div_btn">
          <button type="button" onClick={(e) => handleClick(e, id)}>Comments</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <button className="progress_btn" type="button">UPDATE PROGRESS</button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
