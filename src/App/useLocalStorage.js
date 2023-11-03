import { useState, useEffect } from 'react';

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

export {useLocalStorage};


// localStorage.removeItem('TODOS_V1')

// const defaultTodos = [
//   {name:'Tomar el Curso de Introducción a Node.js  ',completed:false, id: 1},
//   {name:'Tomar el Curso de Introducción a React.js',completed:true, id: 2},
//   {name:'Llorar con la Llorona y reir con el payaso',completed:false, id: 3},
//   {name:'LALALALAL',completed:false, id: 4},
//   {name:'Llorar con la Llorona y reir con el payaso',completed:false, id: 5},
// ];
// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos))