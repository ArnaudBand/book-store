import { v4 as uuidv4 } from 'uuid';

const ADDBOOK = 'book-store/books/ADDBOOK';
const REMOVEBOOK = 'book-store/books/REMOVEBOOK';

const books = [
  {
    id: uuidv4(),
    title: 'The Hunger Game',
    author: 'Suzanne Collins',
  },
  {
    id: uuidv4(),
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: uuidv4(),
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
];

export const addBook = (book) => ({
  type: ADDBOOK,
  book,
});

export const removeBook = (id) => ({
  type: REMOVEBOOK,
  id,
});

const reducerBook = (state = books, action = {}) => {
  switch (action.type) {
    case ADDBOOK:
      return [...state, action.book];
    case REMOVEBOOK:
      return [...state].filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default reducerBook;
