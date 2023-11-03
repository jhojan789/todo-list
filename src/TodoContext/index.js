import { createContext } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useState, useEffect } from "react";

const TodoContext = createContext();


function TodoProvider({children}){
  const [idTimeout, setIdTimeout] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const {item:todos, saveItem:saveTodos,loading, error} = useLocalStorage('TODOS_V1', []);
  const [activeFire, setActiveFire] = useState(false);
  const [openPortal, setOpenPortal] = useState(false);
  
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
    isAllCompleted ? setActiveFire(true) : setActiveFire(false);
    saveTodos(updatedTodos);
  };
    
  const removeTodo = (id)=>{
    activeFire && setActiveFire(false);
    const removedComponents = todos.filter(todo => todo.id !== id && todo);
    saveTodos(removedComponents);
  };
  
  //fireworks
  useEffect(()=>{
    activeFire ?
      setIdTimeout(setTimeout(()=>{
        setActiveFire(false);
      },10000)) :
      clearTimeout(idTimeout);
    
  },[activeFire]);
  

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
        openPortal, 
        setOpenPortal,
      }}>
      {children}
    </TodoContext.Provider>
  );
}

export {TodoContext,TodoProvider};