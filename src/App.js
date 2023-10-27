import { TodoTitle } from './TodoTitle';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import {TodoCreateButton } from './TodoCreateButton';
import React from 'react';
import './App.css';


const defaultTodos = [
  {name:'Task 1',completed:false, id: 1},
  {name:'Task 2',completed:true, id: 2},
  {name:'Task 3',completed:false, id: 3},
  {name:'Task 4',completed:false, id: 4},
];



function App() {

  return (
      <React.Fragment>
        <TodoTitle completed={2} total={5}/>

        <TodoSearch/>
        <TodoList>
          {
            defaultTodos.map(todo=>
              <TodoItem key={todo.id} name={todo.name}/>
            
              )
          }
          
          
        </TodoList>
        <TodoCreateButton/>

      </React.Fragment>
    
  );
}

export default App;
