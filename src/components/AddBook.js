import React from 'react';
import PropTypes from 'prop-types';

const AddBook = ({ handleSubmit }) => {
   return (
    <div className="container_form">
      <h3>ADD NEW BOOK</h3>
      <form className="flex" onSubmit={handleSubmit}>
          <input className="form_space" type="text" placeholder="Book Title" />
          <input className="form_space" type="text" placeholder="Add Author" />
          <select className="form_space" name="category">
            <option value="" defaultValue>Category</option>
            <option value="Adventure">Adventure</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Terror">Terror</option>
            <option value="Romance">Romance</option>
            <option value="Economy">Economy</option>
            <option value="Technology">Technology</option>
          </select>
          <button className="form_space" type="submit">ADD BOOK</button>
      </form>
     </div>
   )
}

AddBook.protoTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

export default AddBook;