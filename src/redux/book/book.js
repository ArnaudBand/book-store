const ADDBOOK = 'book-store/book/ADDBOOK';
const REMOVEBOOK = 'book-store/book/REMOVEBOOK';

const books = [];

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
