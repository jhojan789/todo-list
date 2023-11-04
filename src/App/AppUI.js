import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import {TodoCreateButton } from '../TodoCreateButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';
import Fireworks from '../Fireworks';
import { TodoContext } from '../TodoContext';
import { useContext } from 'react';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';




function AppUI(){
  const {
    searchedTodos,
    completeTodo,
    removeTodo,
    loading,
    error,
    openPortal,
    

  } = useContext(TodoContext);

  return (
    <>
      <Fireworks />
      <TodoCounter/>
      <TodoSearch/>
        <TodoList>
          {loading && 
            <>
              <TodosLoading/>
              <TodosLoading/>
              <TodosLoading/>
            </>}
          {error && <TodosError/>}
          {(!error && !loading && searchedTodos.length === 0) && 
            <TodosEmpty /> }
          {
            searchedTodos.map(todo=>
              <TodoItem 
                key={todo.id} 
                name={todo.name}
                completed={todo.completed}
                onCompleted={()=>completeTodo({id: todo.id, completed: todo.completed})} 
                onRemoved={()=>removeTodo(todo.id)} 
              
              />
            )
          }
          
          
        </TodoList>
      

      <TodoCreateButton/>
        {openPortal && (
          <Modal>
            <TodoForm/>
          </Modal>
        )}

    </>
  )
}

export {AppUI};