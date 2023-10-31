import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import {TodoCreateButton } from './TodoCreateButton';
import { useState } from 'react';




const defaultTodos = [
  {name:'Tomar el Curso de Introducción a React.js adfdsasf aasdfa asdfaf adsf df dfasdf  ',completed:false, id: 1},
  {name:'Tomar el Curso de Introducción a React.js',completed:false, id: 2},
  {name:'Llorar con la Llorona y reir con el payaso',completed:false, id: 3},
  {name:'LALALALAL',completed:false, id: 4},
  {name:'Llorar con la Llorona y reir con el payaso',completed:false, id: 5},
];



function App() {
  const [searchValue, setSearchValue] = useState('');
  const [todos, setTodos] = useState(defaultTodos);



  //derived states
  const completedTodos = todos.filter(todo=>!!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo=>{
    

    return todo.name.toLowerCase().includes(searchValue.toLowerCase());

  });

  const completeTodos = ({id,completed})=>{
    const updatedTodos = todos.map(todo => 
        todo.id === id ? {...todo, completed: !completed} : todo
      );
     
      setTodos(updatedTodos);

  };

  const onRemoved = (id)=>{
    const removedComponents = todos.filter(todo => todo.id !== id && todo);

    setTodos(removedComponents);
  };


  return (
      <>
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
                onCompleted={()=>completeTodos({id: todo.id, completed: todo.completed})} 
                onRemoved={()=>onRemoved(todo.id)} 
              
              />
                
            
              )
          }
          
          
        </TodoList>
        <TodoCreateButton/>

      </>
    
  );
}

export default App;
