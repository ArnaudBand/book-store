import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
  return (
    <header className="top_header">
      <div className="left_side">
        <h1>Book Store</h1>
      </div>
      <div className="right_side">
        <Link className="menu_bar" to="/">Books</Link>
        <Link className="menu_bar" to="/Categories">Categories</Link>
      </div>
      <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/Categories" element={<Categories />} />
      </Routes>

    </header>
    
  );
}

export default App;
