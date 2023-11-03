import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';


function TodoCounter(){
  const {completedTodos,totalTodos} = useContext(TodoContext);
  return (
    <h1 className="TodoCounter"> You have completed <strong className="TodoCounter-strong">{completedTodos}</strong> out of <strong className="TodoCounter-strong">{totalTodos}</strong> TODO tasks</h1>
  );
}

export {TodoCounter};