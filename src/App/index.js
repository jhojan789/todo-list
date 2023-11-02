import { AppUI } from './AppUI';
import { useState, useEffect } from 'react';




// localStorage.removeItem('TODOS_V1')

// const defaultTodos = [
//   {name:'Tomar el Curso de Introducción a Node.js  ',completed:false, id: 1},
//   {name:'Tomar el Curso de Introducción a React.js',completed:true, id: 2},
//   {name:'Llorar con la Llorona y reir con el payaso',completed:false, id: 3},
//   {name:'LALALALAL',completed:false, id: 4},
//   {name:'Llorar con la Llorona y reir con el payaso',completed:false, id: 5},
// ];
// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos))


function useLocalStorage(itemName , initialValue){


  const [item, setItem] = useState(initialValue);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(()=>{
      try{
        let appStorage = localStorage.getItem(itemName);
        let parsedItem;
        if(!appStorage){
          localStorage.setItem(itemName,JSON.stringify(initialValue));
          parsedItem = initialValue;
        }else{
          parsedItem = JSON.parse(appStorage);
          
        }
        setTimeout(()=>{
          setItem(parsedItem);
          setLoading(false);
          
        },2000);
      }catch(error)
        {
          setLoading(false);
          setError(true);
        }
      },[]);

  const saveItem = (newItem)=>{
    const stringifyItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifyItem);
    setItem(newItem);
  };

  return { 
    item, 
    saveItem,
    loading,
    error
  };

}

let idTimeout;

function App() {

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
    <AppUI 
      activeFire={activeFire}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      removeTodo={removeTodo} 
      loading={loading} 
      error={error}
    />
    
  );
}

export default App;
