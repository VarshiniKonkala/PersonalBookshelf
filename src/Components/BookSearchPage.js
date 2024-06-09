import React, { useState } from 'react';
import SearchCard from './SearchCard';
function BookSearchPage() {
    const [results, setResults] = useState([]);
    const fetchBooks = (name) => {
      name = name.replaceAll(" ", "+");
      fetch(`https://openlibrary.org/search.json?q=${name}&limit=10&page=1`)
        .then((res) => res.json())
        .then((data) => setResults(data.docs))
        .catch((err) => console.log(err));
    };
  return (
    <div>
    <h2>Search by book name:</h2>
      <div className='search'>
        <input type='text' id="query"></input>
        <button onClick={() => {
          let s = document.getElementById("query").value;
          fetchBooks(s);
        }}>search</button>
      </div>
      <div style={{justifySelf:"space-around",justifyContent:"center",flexWrap:"wrap",display:"flex"}}>
      {
        results ? (results.map((result, index) => (
          <div>
          <SearchCard key={index} title={result.title} edition_count={result.edition_count}/>
          </div>
        ))):(<div></div>)
      }
      </div>
    </div>
  )
}

export default BookSearchPage