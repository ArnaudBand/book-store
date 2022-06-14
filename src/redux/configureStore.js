import { legacy_createStore as createStore, combineReducers } from 'redux';

import reducerBook from './book/book';
import reducerCategories from './categories/categories';

const reducer = combineReducers({
  books: reducerBook,
  categories: reducerCategories,
});

const store = createStore(reducer);

export default store;
