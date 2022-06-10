import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { topics, title, author } = props;
  return (
    <div className="container">
        <div className="card">
            <div>{topics}</div>
            <div>{title}</div>
            <div>{author}</div>
        </div>
        <button type="button">UPDATE PROGRESS</button>
    </div>
  )
}

Book.propTypes = {
  topic: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;