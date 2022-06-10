import React from 'react';

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
            <span>{book.topic}</span>
            <span>{book.title}</span>
            <span>{book.author}</span>
          </div>
        ))}
      </div>
    );
}

export default Books;