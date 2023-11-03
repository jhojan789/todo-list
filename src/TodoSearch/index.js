import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';




function TodoSearch(){
  const {setSearchValue} = useContext(TodoContext);

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