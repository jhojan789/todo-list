import './TodoSearch.css';




function TodoSearch({setSearchValue}){


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