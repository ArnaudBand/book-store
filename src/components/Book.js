import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { topic, title, author } = props;
  return (
    <div className="container flex">
        <div className="card">
            <div className="topics">{topic}</div>
            <div className="title fonts">{title}</div>
            <div className="author">{author}</div>
            <div className="div_btn">
              <button type="button">Comments</button>
              <button type="button">Remove</button>
              <button type="button">Edit</button>
            </div>
        </div>
        <button className="progress_btn" type="button">UPDATE PROGRESS</button>
    </div>
  )
}

Book.propTypes = {
  topic: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;