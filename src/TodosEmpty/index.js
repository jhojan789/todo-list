import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import './TodosEmpty.css';

function TodosEmpty(){
  const {searchedTodos,totalTodos} = useContext(TodoContext);
  return (
    <p className='message message-create'>{searchedTodos.length === 0 && totalTodos > 0 ? "No results for your search":"Create your first TO DO"}</p> 
  );
}

export {TodosEmpty};