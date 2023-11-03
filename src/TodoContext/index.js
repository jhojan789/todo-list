import { createContext } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useState, useEffect } from "react";

const TodoContext = createContext();
let idTimeout;

function TodoProvider({children}){
  const [searchValue, setSearchValue] = useState('');
  const {item:todos, saveItem:saveTodos,loading, error} = useLocalStorage('TODOS_V1', []);
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
    saveTodos(updatedTodos);
  };
    
  const removeTodo = (id)=>{
    const removedComponents = todos.filter(todo => todo.id !== id && todo);
    saveTodos(removedComponents);
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
  return (
    <TodoContext.Provider value={{      
        activeFire,
        completedTodos,
        totalTodos,
        setSearchValue,
        searchedTodos,
        completeTodo,
        removeTodo,
        loading,
        error,
      }}>
      {children}
    </TodoContext.Provider>
  );
}

export {TodoContext,TodoProvider};