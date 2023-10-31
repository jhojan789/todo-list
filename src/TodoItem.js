import './TodoItem.css';

function TodoItem ({ name , completed, onCompleted, onRemoved }){

  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
        onClick={onCompleted}  
      ></span>
      <p className={`TodoItem-name ${completed && 'TodoItem-name--completed'}`}>{name}</p>
      <span 
        className="Icon Icon-delete" 
        onClick={onRemoved}
      ></span>
    </li>
  );
}

export {TodoItem};