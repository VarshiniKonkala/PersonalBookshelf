import React from 'react';
import BookCard from './BookCard';
function MyBookShelf(){
    let books=[];
    for(let i=0;i<localStorage.length;i++){
        books.push(
            {
                title:localStorage.key(i),
                edition_count:localStorage.getItem(localStorage.key(i))
            }
        )
    }
    return(
        <div>
            <h2>My Bookshelf</h2>
            <div style={{justifySelf:"space-around",justifyContent:"center",flexWrap:"wrap",display:"flex"}}>
            {
                books ? (books.map((book) => (
                <div>
                <BookCard key={book.title+book.edition_count} title={book.title} edition_count={book.edition_count}/>
                </div>
                ))):(<div></div>)
            }
            </div>
        </div>
    );
}
export default MyBookShelf;