import React from 'react';
import PropTypes from 'prop-types';

const AddBook = ({ handleSubmit }) => {
   return (
    <>
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Add Title" />
          <input type="text" placeholder="Add Author" />
          <select name="category">
            <option value="" defaultValue>Category</option>
            <option value="Adventure">Adventure</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Terror">Terror</option>
            <option value="Romance">Romance</option>
            <option value="Economy">Economy</option>
            <option value="Technology">Technology</option>
          </select>
          <button type="submit">ADD BOOK</button>
      </form>
     </>
   )
}

AddBook.protoTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

export default AddBook;