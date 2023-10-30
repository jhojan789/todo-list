import './TodoItem.css';

function TodoItem ({id, name , completed, todos, setTodos }){
  const handleTodo = ()=>{
    const updatedTodos = todos.map(todo => 
        todo.id === id ? {...todo, completed: !completed} : todo
      );
     
      setTodos(updatedTodos);

  };

  const removeComponent = ()=>{
    const removedComponents = todos.filter(todo => todo.id !== id && todo);

    setTodos(removedComponents);
  };

  

  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
        onClick={handleTodo}  
      ></span>
      <p className={`TodoItem-name ${completed && 'TodoItem-name--completed'}`}>{name}</p>
      <span 
        className="Icon Icon-delete" 
        onClick={removeComponent}
      ></span>
    </li>
  );
}

export {TodoItem};