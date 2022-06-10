import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { topic, title, author } = props;
  return (
    <div className="container">
        <div className="card">
            <div>{topic}</div>
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