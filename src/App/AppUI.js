import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import {TodoCreateButton } from '../TodoCreateButton';
import Fireworks from '../Fireworks';


function AppUI({
  activeFire,
  completedTodos,
  totalTodos,
  setSearchValue,
  searchedTodos,
  completeTodo,
  removeTodo,
  loading,
  error
}){
  return (
    <>
      <Fireworks activeFire={activeFire}/>
      <TodoCounter completed={completedTodos} total={totalTodos}/>

      <TodoSearch 
        setSearchValue={setSearchValue}  
      />
      <TodoList>
        {loading && <p>Loading...</p>}
        {error && <p>Error!!</p>}
        {(!loading && searchedTodos.length) && 
          <p>Create your first TO DO</p>  }
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

    </>
  )
}

export {AppUI};