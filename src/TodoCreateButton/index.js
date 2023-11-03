import { useContext } from 'react';
import './TodoCreateButton.css';
import { TodoContext } from '../TodoContext';



function TodoCreateButton(){
  const {setOpenPortal} = useContext(TodoContext);

  return (
    <button className="TodoCreateButton" 
      onClick={(event)=>{

        console.log(setOpenPortal(state=>!state));
        console.log(event.target.tagName)
        console.log(event.target)
        
      }}
      
      
    ></button>

  );
}

export {TodoCreateButton};