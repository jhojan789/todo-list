import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import {TodoCreateButton } from './TodoCreateButton';
import { useState, useEffect } from 'react';
import Fireworks from './Fireworks.js';




// const defaultTodos = [
//   {name:'Tomar el Curso de Introducción a Node.js  ',completed:false, id: 1},
//   {name:'Tomar el Curso de Introducción a React.js',completed:true, id: 2},
//   {name:'Llorar con la Llorona y reir con el payaso',completed:false, id: 3},
//   {name:'LALALALAL',completed:false, id: 4},
//   {name:'Llorar con la Llorona y reir con el payaso',completed:false, id: 5},
// ];
// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos))


let idTimeout;

function App() {
  let appStorage = localStorage.getItem('TODOS_V1');; 
  let parsedTodos;

  if(!appStorage){
    localStorage.setItem('TODOS_V1','[]');
  }else{
    parsedTodos = JSON.parse(appStorage);
  }

  const [searchValue, setSearchValue] = useState('');
  const [todos, setTodos] = useState(parsedTodos);
  const [activeFire, setActiveFire] = useState(false);
  //derived states
  const completedTodos = todos.filter(todo=>!!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo=>{
    
    return todo.name.toLowerCase().includes(searchValue.toLowerCase());
    
  });
  
  
  const completeTodo = ({id,completed})=>{
    const updatedTodos = todos.map(todo => 
      todo.id === id ? {...todo, completed: !completed} : todo
      );
    
    const isAllCompleted = updatedTodos.every(todo=>todo.completed);
    isAllCompleted ? launchFireworks() : setActiveFire(false);

    saveLocalStorage(updatedTodos);
  };
    
  const removeTodo = (id)=>{
    const removedComponents = todos.filter(todo => todo.id !== id && todo);
    saveLocalStorage(removedComponents);
  };
  
  //fireworks
  useEffect(()=>{
    activeFire ?
      idTimeout = setTimeout(()=>{
        setActiveFire(false);
      },10000) :
      clearTimeout(idTimeout);
    
  },[activeFire]);
  
  const launchFireworks =()=>{
    setActiveFire(true);
  }

  const saveLocalStorage = (todos)=>{
    const stringifyTodos = JSON.stringify(todos);
    localStorage.setItem('TODOS_V1', stringifyTodos);
    setTodos(todos);
  }

  return (
      <>
        <Fireworks activeFire={activeFire}/>
        <TodoCounter completed={completedTodos} total={totalTodos}/>

        <TodoSearch 
          setSearchValue={setSearchValue}  
        />
        <TodoList>
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
    
  );
}

export default App;
