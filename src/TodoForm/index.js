import { useContext, useState } from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext';
import React from 'react';




function TodoForm(){
  const {setOpenPortal,addNewTodo} = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState('');


  const createTodo = (event)=>{
    event.preventDefault();
    addNewTodo(newTodo);
    setOpenPortal(false);
  }

  const cancelTodo = ()=>{
    setOpenPortal(false);
  }
  
  const saveTodo = (event)=>{
    setNewTodo(event.target.value);
  }
  

  return(
    <form onSubmit={createTodo}
      className="TodoForm"
    >
      <h2>Create a new TODO</h2>
      <textarea
        placeholder="Type a new TODO right here "
        onChange={saveTodo}
      ></textarea>
      <div className="TodoForm-btnContainer">
        <button className="TodoForm-button TodoForm-button--cancel"
          type="button" 
          onClick={cancelTodo}
        >Cancel</button>
        <button className="TodoForm-button TodoForm-button--add"

        >Add</button>
      </div>

    </form>
  )
}

export {TodoForm};