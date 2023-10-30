import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import {TodoCreateButton } from './TodoCreateButton';
import { useState } from 'react';




const defaultTodos = [
  {name:'Tomar el Curso de Introducción a React.js adfdsasf aasdfa asdfaf adsf df dfasdf  ',completed:false, id: 1},
  {name:'Tomar el Curso de Introducción a React.js',completed:true, id: 2},
  {name:'Llorar con la Llorona y reir con el payaso',completed:true, id: 3},
  {name:'Llorar con la Llorona y reir con el payaso',completed:false, id: 4},
  {name:'Llorar con la Llorona y reir con el payaso',completed:true, id: 5},
];



function App() {
  const [searchValue, setSearchValue] = useState('');
  const [todos, setTodos] = useState(defaultTodos);

  console.log('This is the value ' + searchValue);

  const completedTodos = todos.filter(todo=>!!todo.completed).length;
  const totalTodos = todos.length;

  

  return (
      <>
        <TodoCounter completed={completedTodos} total={totalTodos}/>

        <TodoSearch 
          setSearchValue={setSearchValue}  
        />
        <TodoList>
          {
            defaultTodos.map(todo=>
              <TodoItem 
                key={todo.id} 
                name={todo.name}
                completed={todo.completed}/>
            
              )
          }
          
          
        </TodoList>
        <TodoCreateButton/>

      </>
    
  );
}

export default App;
