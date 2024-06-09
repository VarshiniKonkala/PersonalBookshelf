import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MyBookShelf from './Components/MyBookShelf';
import BookSearchPage from './Components/BookSearchPage';

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <Link to="/PersonalBookshelf" style={{textDecoration:"none",color:"Black"}}><h1>Personal Bookshelf</h1></Link>
        <Link to="/PersonalBookshelf/MyBookshelf" style={{alignSelf:"center"}}><button>My Bookshelf</button></Link>
      </header>
        <Routes>
          <Route path="/PersonalBookshelf" exact Component={BookSearchPage}/>
          <Route path="/PersonalBookshelf/MyBookshelf" exact Component={MyBookShelf}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
