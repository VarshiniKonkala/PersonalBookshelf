import React from 'react'

function BookCard({title,edition_count}) {
  return (
    <div>
        <div style={{
        border:"2px solid black",width:"200px",height:"250px",borderRadius:"20px",marginRight:"20px",marginTop:"4px",margintop:"200px"
        }}>
        <p><strong>Book Title: </strong>{title}</p>
        <p><strong>Edition Count:</strong>{edition_count}</p>
      </div>
    </div>
  )
}

export default BookCard