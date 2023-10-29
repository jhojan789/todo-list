import './TodoSearch.css';
import { useState } from 'react';



function TodoSearch(){
  const [searchValue, setSearchValue] = useState('');

  console.log('This is the value ' + searchValue);

  return(
    <>
      <input 
        className="TodoSearch" 
        placeholder="Type your task" 
        onChange={event=>{
          setSearchValue(event.target.value);
          
          }
        }
      
      />
    
    </>
  );
}

export {TodoSearch};