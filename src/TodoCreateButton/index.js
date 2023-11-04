import { useContext } from 'react';
import './TodoCreateButton.css';
import { TodoContext } from '../TodoContext';



function TodoCreateButton(){
  const {setOpenPortal} = useContext(TodoContext);

  const showPortal = (event)=>{
    event.preventDefault();
    setOpenPortal(state=>!state);
  }

  return (
    <button className="TodoCreateButton" 
      onClick={showPortal}
    ></button>

  );
}

export {TodoCreateButton};