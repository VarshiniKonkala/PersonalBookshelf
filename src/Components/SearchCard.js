import {useState} from 'react';
const SearchCard=({title,edition_count})=>{
    const [Visible,setVisible]=useState(true);
    edition_count=edition_count.toString();
    const ispresent=()=>{
      for(let i=0;i<localStorage.length;i++){
        if(localStorage.key(i)===title &&localStorage.getItem(title)===edition_count)
            return true;
      }
      return false;
    }
    return(
      <div style={{
        border:"2px solid black",width:"200px",height:"250px",borderRadius:"20px",marginRight:"20px",marginTop:"4px",margintop:"200px"
        }}>
        <p><strong>Book Title: </strong>{title}</p>
        <p><strong>Edition Count:</strong>{edition_count}</p>
        <div id="addbutton">
        {
            !ispresent()?(
                Visible&&<button onClick={()=>{localStorage.setItem(title,edition_count);setVisible((prev)=>!prev)}}>
                Add to Local Storage</button>)
                :(<div></div>)
        }
        </div>
      </div>
    )
  }
export default SearchCard;
