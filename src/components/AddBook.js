import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/book/book';

const AddBooks = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      id: uuidv4(),
      title,
      author,
      category,
    },
    setTitle(''),
    setAuthor('')));
  };

  return (
    <div className="container_form">
      <h3>ADD NEW BOOK</h3>
      <form className="flex form" onSubmit={handleSubmit}>
        <input className="form_space" type="text" placeholder="Book Title" onChange={handleTitle} required />
        <input className="form_space" type="text" placeholder="Add Author" onChange={handleAuthor} required />
        <select className="form_space" name="category" onChange={handleCategory}>
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
  );
};

export default AddBooks;
