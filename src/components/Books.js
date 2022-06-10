import React from 'react';
import Book from './Book';

const Books = () => {
  const booksArray = [
    {
      id: 1,
      topic: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      topic: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: 3,
      topic: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
    },
  ]

    return (
      <div>
        <h2>Books</h2>
        {booksArray.map((book) => (
          <div key={book.id}>
            <Book topic={book.topic} title={book.title} author={book.author} />
          </div>
        ))}
      </div>
    );
}

export default Books;